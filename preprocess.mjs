// Preprocess the maturità "Knowledge Graph" Obsidian vault into Quartz content.
// - copies notes (.md) into ./content (frontmatter re-emitted cleanly)
// - copies non-md assets so embeds resolve
// - strips links to local PDFs (the exam PDFs are not published)
// - emits ./quartz/static/prove.json (the 'tipo: prova' subset) for /cerca
import { promises as fs, readFileSync } from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const NUL = String.fromCharCode(0)

// filename -> Google Drive fileId. The exam PDFs are NOT shipped in the repo
// (487MB) — they live on Drive (folder shared "anyone with link"), so the site
// builds on CI without them. PDF links resolve to the Drive viewer.
const PDF_DRIVE = JSON.parse(readFileSync(new URL("./pdf_drive_map.json", import.meta.url), "utf8"))
const missingPdf = new Set()

// Lenient flat-frontmatter parser (some values carry stray quotes/NUL/apostrophes
// that break strict YAML). Re-emitted as clean YAML by matter.stringify on write.
function parseFrontmatter(raw) {
  raw = raw.split(NUL).join("")
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!m) return { data: {}, content: raw }
  const data = {}
  const lines = m[1].split(/\r?\n/)
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const kv = line.match(/^(\w[\w.-]*):\s?(.*)$/)
    if (!kv) continue
    const key = kv[1]
    let v = kv[2].trim()
    if (v === "") {
      // possible YAML block list: subsequent "  - item" lines
      const items = []
      let j = i + 1
      while (j < lines.length && /^\s*-\s+/.test(lines[j])) {
        items.push(lines[j].replace(/^\s*-\s+/, "").trim().replace(/^["']|["']$/g, ""))
        j++
      }
      if (items.length) { data[key] = items; i = j - 1; continue }
      data[key] = ""
    } else if (v.startsWith("[") && v.endsWith("]")) {
      data[key] = v.slice(1, -1).split(",").map((x) => x.trim().replace(/^["']|["']$/g, "")).filter(Boolean)
    } else {
      if ((v.startsWith('"') && v.endsWith('"') && v.length > 1) ||
          (v.startsWith("'") && v.endsWith("'") && v.length > 1)) v = v.slice(1, -1)
      data[key] = v
    }
  }
  return { data, content: m[2] }
}

const VAULT = "E:/giovanni/Dropbox/insegnamento/Wiligelmo/EsameMaturita/materiali-provascritta/Knowledge Graph"
const ROOT = path.resolve(".")
const CONTENT = path.join(ROOT, "content")
const STATIC_JSON = path.join(ROOT, "quartz", "static", "prove.json")
const CL_DIR = path.join(ROOT, "quartz", "static", "cl")   // per-concept paginated-list JSON
const SKIP_DIRS = new Set(["tmp_imgs"])
const SKIP_FILES = new Set(["_Home.md"])                   // we generate our own index.md
const CONCEPT_DIRS = ["Topics", "Methods", "Skills", "Clusters", "Tipi-funzione"]

function sluggify(s) {
  return s.split("/").map((seg) =>
    seg.replace(/\s/g, "-").replace(/&/g, "-and-").replace(/%/g, "-percent").replace(/\?/g, "").replace(/#/g, "")
  ).join("/").replace(/\/$/, "")
}
function slugFromRel(rel) {
  return sluggify(rel.replace(/\.md$/, "").split(path.sep).join("/"))
}

// Pull wikilink targets from a "**Label:** [[A]], [[B|alias]]" meta line.
function metaLinks(content, label) {
  const re = new RegExp("^\\*\\*" + label + ":\\*\\*(.*)$", "m")
  const m = content.match(re)
  if (!m) return []
  return [...m[1].matchAll(/\[\[([^\]|#]+?)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]/g)].map((x) => x[1].trim())
}

function summarize(content) {
  let body = content
    .replace(/^#\s+.*$/m, "")                          // drop first H1
    .replace(/<!--fig:start-->[\s\S]*?<!--fig:end-->/g, "")
  for (let line of body.split(/\r?\n/)) {
    line = line.trim()
    if (!line) continue
    if (/^(#{1,6}\s|>\s|!\[\[|Fonte:|\*\*(Topic|Metodi|Competenze|Tipo|Cluster|Fonte|Risposta|Soluzione|Prova):|<!--|\||---)/.test(line)) continue
    if (/^!\[\[/.test(line)) continue
    // strip a leading "1." / "Q1" / "(a)" / "a)" enumerator and bold markers
    line = line.replace(/^\s*(?:Q?\d+[.)]|\([a-z]\)|[a-z]\))\s*/i, "").replace(/\*\*/g, "")
    // flatten any stray wikilinks / md-links to plain text so /cerca never shows raw markup
    line = line.replace(/\[\[[^\]|#]*(?:#[^\]|]*)?\|([^\]]*)\]\]/g, "$1")
    line = line.replace(/\[\[([^\]|#]*)(?:#[^\]|]*)?\]\]/g, "$1")
    line = line.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    line = line.replace(/\s+/g, " ").trim()
    if (line.length >= 8) return line.slice(0, 160).trim()
  }
  return ""
}

// GitHub-slugger-ish heading anchor (matches Quartz's heading ids closely enough).
function anchorSlug(s) {
  return s.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s/g, "-")
}

// Extract the bullet-list of a concept note into structured items and replace it
// with a lightweight placeholder div. Returns { newContent, items } or null.
function extractConceptList(content) {
  const lines = content.split(/\r?\n/)
  const firstBullet = lines.findIndex((l) => /^- \[\[/.test(l))
  if (firstBullet < 0) return null
  let head = firstBullet
  for (let k = firstBullet - 1; k >= 0; k--) {
    if (lines[k].startsWith("## ")) { head = k; break }
    if (lines[k].startsWith("# ")) { head = k + 1; break }
  }
  // Paginate ONLY the list under this heading — stop at the next "## " section so
  // any following sections (e.g. a cluster's "## Argomenti correlati" cross-links)
  // are preserved instead of being swallowed/discarded.
  let end = lines.length
  for (let k = head + 1; k < lines.length; k++) {
    if (lines[k].startsWith("## ")) { end = k; break }
  }
  const items = []
  const RE = /^- \[\[([^\]|#]+)(#[^\]|]*)?(?:\|([^\]]*))?\]\]\s*(?:[—-]\s*(.*))?$/
  for (let k = head; k < end; k++) {
    const m = lines[k].match(RE)
    if (!m) continue
    let target = m[1].trim()
    // concept lists already point into Prove/... ; keep that prefix as-is
    const anchor = m[2] ? "#" + anchorSlug(m[2].slice(1)) : ""
    items.push({
      h: sluggify(target) + anchor,
      l: (m[3] || target.replace(/^Prove\//, "")).trim(),
      s: (m[4] || "").trim(),
    })
  }
  if (!items.length) return null
  const kept = lines.slice(0, head + 1).join("\n").replace(/\n+$/, "")
  const tail = lines.slice(end).join("\n").replace(/^\n+/, "")
  const newContent = kept + "\n\n<div class=\"paged-list\" data-src=\"__SRC__\" data-count=\"" + items.length + "\"></div>\n" +
    (tail ? "\n" + tail + "\n" : "")
  return { newContent, items }
}

function transform(content) {
  // drop the editable TikZ source comment kept for Obsidian (the SVG is what the
  // web shows); leaving it risks KaTeX grabbing the $...$ inside the comment.
  content = content.replace(/<!--tikz:[\s\S]*?-->/g, "")
  // Drop the leading body "# Title" — Quartz's ArticleTitle already renders the
  // title once, so keeping the H1 shows it twice. (Body starts with newlines
  // after the frontmatter, so allow leading whitespace before the #.)
  content = content.replace(/^\s*#[ \t]+.+\r?\n+/, "")
  // Single-item notes carry a redundant (and sometimes mislabelled, e.g. always
  // "Problema 1") "## Problema/Quesito N" heading. If there is exactly one such
  // heading, drop it — the page title already says which problem/quesito it is.
  const secHeads = content.match(/^##\s+(Problema|Quesito|Questionario)\b.*$/gm) || []
  if (secHeads.length === 1) {
    content = content.replace(/^##\s+(Problema|Quesito|Questionario)\b.*\r?\n+/m, "")
  }
  // The exam PDFs live on Google Drive (not in the repo). Rewrite the
  // [[file.pdf#page=N|alias]] wikilinks and [alias](…/file.pdf#frag) markdown
  // links into Drive viewer links. The Drive viewer ignores #page=N, so the page
  // is dropped from the URL (the alias text still mentions the page). External
  // links open in a new tab. If a filename is unmapped, keep the alias as plain
  // text (no broken link) and warn.
  const pdfLink = (file, frag, alias) => {
    const name = file.trim()
    const label = (alias && alias.trim()) || "📄 Testo (PDF)"
    const id = PDF_DRIVE[name] || PDF_DRIVE[path.basename(name)]
    if (!id) {
      missingPdf.add(name)
      return label
    }
    return `[${label}](https://drive.google.com/file/d/${id}/view)`
  }
  // wikilink: [[file.pdf#page=N|alias]] / [[file.pdf|alias]] / [[file.pdf]]
  content = content.replace(
    /\[\[\s*([^\]#|]+\.pdf)\s*(?:#([^\]|]+?))?\s*(?:\|\s*([^\]]*?)\s*)?\]\]/gi,
    (_m, file, frag, alias) => pdfLink(file, frag, alias),
  )
  // markdown link: [alias](<…/file.pdf#frag>) — keep only the basename + frag
  content = content.replace(
    /\[([^\]]*)\]\(<?\s*[^)\s]*?([^/)\s]+\.pdf)(?:#([^)\s>]+))?\s*>?\)/gi,
    (_m, alias, file, frag) => pdfLink(file, frag, alias),
  )
  // Quartz's wikilinkRegex forbids '#' in the alias segment ([^\[\]\#]*), so a
  // wikilink whose display text contains '#' (e.g. the SimZan labels "… parte3 #1")
  // fails to match and is left as raw "[[…]]" text on the web. Obsidian renders it
  // fine, so this is a web-only fix: sanitize '#' -> 'n.' INSIDE the alias only
  // (the target's own '#heading' anchor, before the '|', is left untouched).
  content = content.replace(
    /\[\[([^\[\]\n|]+)\|([^\[\]\n]*?)\]\]/g,
    (_m, target, alias) => `[[${target}|${alias.replace(/#/g, "n.")}]]`,
  )
  // drop the now-redundant backticked filename in "Fonte: `X.pdf` · p.N"
  content = content.replace(/`[^`]*\.pdf`/gi, "")
  content = content.replace(/Fonte:\s+·\s*/g, "Fonte: ")
  content = content.replace(/·\s*·/g, "·")
  content = content.replace(/ ·\s*$/gm, "")
  return content
}

async function walk(dir, base = dir, out = []) {
  for (const ent of await fs.readdir(dir, { withFileTypes: true })) {
    if (ent.isDirectory()) {
      if (SKIP_DIRS.has(ent.name)) continue
      await walk(path.join(dir, ent.name), base, out)
    } else {
      out.push(path.relative(base, path.join(dir, ent.name)))
    }
  }
  return out
}

function tagVal(tags, prefix) {
  const t = (tags || []).find((x) => typeof x === "string" && x.startsWith(prefix))
  return t ? t.slice(prefix.length) : ""
}

async function main() {
  await fs.rm(CONTENT, { recursive: true, force: true })
  await fs.mkdir(CONTENT, { recursive: true })
  await fs.rm(CL_DIR, { recursive: true, force: true })
  await fs.mkdir(CL_DIR, { recursive: true })
  const files = await walk(VAULT)

  // Pre-scan Prove titles (stem -> human title) so we can give the matching
  // Soluzioni notes a readable title instead of "Soluzioni — <ugly_slug>".
  const provaTitle = {}
  for (const rel of files) {
    if (!rel.endsWith(".md") || rel.split(path.sep)[0] !== "Prove") continue
    const { data, content } = parseFrontmatter(await fs.readFile(path.join(VAULT, rel), "utf8"))
    let t = data.title
    if (!t) { const h = content.match(/^#\s+(.+?)\s*$/m); t = h ? h[1].trim() : null }
    if (t) provaTitle[path.basename(rel, ".md")] = t
  }

  const prove = []
  let mdWritten = 0, assetsCopied = 0, clIdx = 0, pagedLists = 0
  for (const rel of files) {
    if (SKIP_FILES.has(path.basename(rel))) continue
    const src = path.join(VAULT, rel)
    const dest = path.join(CONTENT, rel)
    await fs.mkdir(path.dirname(dest), { recursive: true })
    if (!rel.endsWith(".md")) {
      await fs.copyFile(src, dest); assetsCopied++; continue
    }
    const raw = await fs.readFile(src, "utf8")
    const { data, content } = parseFrontmatter(raw)
    if (!data.title) {
      const h1 = content.match(/^#\s+(.+?)\s*$/m)
      if (h1) data.title = h1[1].trim()
    }
    // Prettify Soluzioni titles using the matching prova's human title.
    if (rel.split(path.sep)[0] === "Soluzioni") {
      const pt = provaTitle[path.basename(rel, ".md")]
      if (pt) data.title = pt + " — Svolgimento"
    }
    let outContent = transform(content)
    // Big concept lists -> JSON + client pagination (tiny page HTML).
    const topDir = rel.split(path.sep)[0]
    if (CONCEPT_DIRS.includes(topDir)) {
      const ex = extractConceptList(outContent)
      if (ex) {
        const srcRel = "cl/" + clIdx + ".json"
        await fs.writeFile(path.join(CL_DIR, clIdx + ".json"), JSON.stringify(ex.items))
        outContent = ex.newContent.replace("__SRC__", srcRel)
        clIdx++; pagedLists++
      }
    }
    await fs.writeFile(dest, matter.stringify(outContent, data))
    mdWritten++
    // /cerca indexes the ATOMIC items (one record per single problema/quesito).
    if (data.tipo === "problema" || data.tipo === "quesito") {
      const tags = Array.isArray(data.tags) ? data.tags : []
      prove.push({
        href: slugFromRel(rel),
        title: data.title ?? "",
        tipo: data.tipo,
        anno: data.anno ? String(data.anno) : tagVal(tags, "anno/"),
        area: tagVal(tags, "area/"),
        cluster: data.cluster ? String(data.cluster) : "",
        summary: summarize(content),
        topics: metaLinks(content, "Topic"),
        methods: metaLinks(content, "Metodi"),
        skills: metaLinks(content, "Competenze"),
        ftypes: metaLinks(content, "Tipo funzione"),
      })
    }
  }
  await fs.mkdir(path.dirname(STATIC_JSON), { recursive: true })
  await fs.writeFile(STATIC_JSON, JSON.stringify(prove))

  const home = `---
title: Maturità Scientifica — Raccolta Prove
---

Archivio delle prove scritte di **Matematica** della Maturità (Liceo Scientifico) — sessioni ordinarie, suppletive, straordinarie, PNI, estero e simulazioni — dal 1875 a oggi, con testo in LaTeX, **svolgimento** e classificazione per **argomento**, **metodo risolutivo**, **competenza** e **tipo di funzione**.

## Esplora

- **Cluster** (aree tematiche): [[Clusters/Studio di Funzione|Studio di Funzione]] · [[Clusters/Geometria|Geometria]] · [[Clusters/Derivate, Massimi e Minimi|Derivate, Massimi e Minimi]] · [[Clusters/Calcolo Integrale e Aree|Calcolo Integrale e Aree]] · [[Clusters/Probabilità e Combinatoria|Probabilità e Combinatoria]] · [[Clusters/Successioni, Serie ed Eq. Differenziali|Successioni, Serie ed Eq. Differenziali]] — cartella *Clusters*
- **Argomenti**: cartella *Topics* · **Metodi risolutivi**: cartella *Methods* · **Competenze**: cartella *Skills* · **Tipi di funzione**: cartella *Tipi-funzione*
- **Prove intere**: cartella *Prove* · **Singoli problemi**: cartella *Problemi* · **Singoli quesiti**: cartella *Quesiti* · **Soluzioni**: cartella *Soluzioni* (svolgimenti in LaTeX)

Usa la **[ricerca per più tag](cerca)** per filtrare i ${prove.length} singoli problemi e quesiti combinando tipo, anno, area, cluster, argomento, metodo, competenza e tipo di funzione. In alternativa: ricerca testuale (in alto) o il **grafo** della conoscenza. Ogni elenco nelle pagine-concetto è navigabile via wikilink.
`
  await fs.writeFile(path.join(CONTENT, "index.md"), home)

  const cerca = `---
title: Ricerca per più tag
---

Seleziona uno o più tag per filtrare i ${prove.length} singoli problemi e quesiti. Usa l'interruttore **TUTTI / QUALSIASI** per richiedere tutti i tag (intersezione) o almeno uno (unione).

<div id="cerca"></div>
`
  await fs.writeFile(path.join(CONTENT, "cerca.md"), cerca)

  console.log(`md written ${mdWritten}, assets copied ${assetsCopied}, indexed ${prove.length} prove, paginated ${pagedLists} concept lists`)
  if (missingPdf.size) console.log(`WARN: ${missingPdf.size} PDF filenames unmapped (no Drive id): ${[...missingPdf].join(", ")}`)
}
main()
