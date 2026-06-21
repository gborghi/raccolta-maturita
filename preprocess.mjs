// Preprocess the maturità "Knowledge Graph" Obsidian vault into Quartz content.
// - copies notes (.md) into ./content (frontmatter re-emitted cleanly)
// - copies non-md assets so embeds resolve
// - strips links to local PDFs (the exam PDFs are not published)
// - emits ./quartz/static/prove.json (the 'tipo: prova' subset) for /cerca
import { promises as fs } from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const NUL = String.fromCharCode(0)

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
    if (/^(#{1,6}\s|>\s|!\[\[|Fonte:|\*\*(Topic|Metodi|Competenze|Tipo|Cluster|Fonte|Risposta|Soluzione):|<!--|\||---)/.test(line)) continue
    if (/^!\[\[/.test(line)) continue
    // strip a leading "1." / "Q1" / "(a)" / "a)" enumerator and bold markers
    line = line.replace(/^\s*(?:Q?\d+[.)]|\([a-z]\)|[a-z]\))\s*/i, "").replace(/\*\*/g, "")
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
  const items = []
  const RE = /^- \[\[([^\]|#]+)(#[^\]|]*)?(?:\|([^\]]*))?\]\]\s*(?:[—-]\s*(.*))?$/
  for (let k = head; k < lines.length; k++) {
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
  const newContent = kept + "\n\n<div class=\"paged-list\" data-src=\"__SRC__\" data-count=\"" + items.length + "\"></div>\n"
  return { newContent, items }
}

function transform(content) {
  // strip PDF links (kept as plain text label)
  content = content.replace(/\[([^\]]*)\]\(<[^>]*\.pdf[^>]*>\)/gi, "$1")
  content = content.replace(/\[([^\]]*)\]\([^)\s]*\.pdf[^)]*\)/gi, "$1")
  // turn **Fonte/Soluzione** PDF wikilinks into plain text (no public PDFs)
  content = content.replace(/\[\[[^\]]*\.pdf(?:#[^\]|]*)?(?:\|([^\]]*))?\]\]/gi, (full, alias) => alias || "")
  // drop the backticked PDF filename in "Fonte: `Prova_...pdf` · p.N"
  content = content.replace(/`[^`]*\.pdf`/gi, "")
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
    if (data.tipo === "prova") {
      const tags = Array.isArray(data.tags) ? data.tags : []
      prove.push({
        href: slugFromRel(rel),
        title: data.title ?? "",
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

- **Cluster** (aree tematiche): [[Studio di Funzione]] · [[Geometria]] · [[Derivate, Massimi e Minimi]] · [[Calcolo Integrale e Aree]] · [[Probabilità e Combinatoria]] · [[Successioni, Serie ed Eq. Differenziali]] — cartella *Clusters*
- **Argomenti**: cartella *Topics* · **Metodi risolutivi**: cartella *Methods* · **Competenze**: cartella *Skills* · **Tipi di funzione**: cartella *Tipi-funzione*
- **Prove**: cartella *Prove* (ogni prova con testo, svolgimento e link al PDF) · **Soluzioni**: cartella *Soluzioni* (svolgimenti in LaTeX)

Usa la **[ricerca per più tag](cerca)** per filtrare le ${prove.length} prove combinando anno, area, cluster, argomento, metodo, competenza e tipo di funzione. In alternativa: ricerca testuale (in alto) o il **grafo** della conoscenza. Ogni elenco nelle pagine-concetto è navigabile via wikilink.
`
  await fs.writeFile(path.join(CONTENT, "index.md"), home)

  const cerca = `---
title: Ricerca per più tag
---

Seleziona uno o più tag per filtrare le ${prove.length} prove. Usa l'interruttore **TUTTI / QUALSIASI** per richiedere tutti i tag (intersezione) o almeno uno (unione).

<div id="cerca"></div>
`
  await fs.writeFile(path.join(CONTENT, "cerca.md"), cerca)

  console.log(`md written ${mdWritten}, assets copied ${assetsCopied}, indexed ${prove.length} prove, paginated ${pagedLists} concept lists`)
}
main()
