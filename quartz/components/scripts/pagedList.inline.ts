// Renders the <div class="paged-list" data-src="cl/N.json"> placeholders that
// preprocess.mjs emitted in place of big concept bullet-lists. Loads the JSON
// slice and shows a mate-style dynamic table: a search box (filter within the
// listing), sortable columns (Testo / Prova / N. / Anno), an items-per-page
// selector and a windowed pager — so concept pages ship tiny HTML and load fast.

interface Item {
  h: string
  l: string
  s: string
  a?: string // anno
  p?: string // prova label
  n?: string // item tag (Q8 / P2)
}

const PER_PAGE_OPTS = [25, 50, 100, 250, 0] // 0 = Tutti
const LS_KEY = "rgf-paged-perpage"

function esc(s: string): string {
  return String(s).replace(/[&<>"]/g, (c) =>
    c === "&" ? "&amp;" : c === "<" ? "&lt;" : c === ">" ? "&gt;" : "&quot;",
  )
}

function getPerPage(): number {
  const raw = localStorage.getItem(LS_KEY)
  if (raw == null) return 50 // default: paginate (NB: Number(null)===0 === "Tutti", so guard explicitly)
  const v = Number(raw)
  return PER_PAGE_OPTS.includes(v) ? v : 50
}

// "Q8"/"P2" -> [typeRank, number] so problemi sort before quesiti, then by number.
function numKey(n: string): [number, number] {
  const m = String(n || "").match(/([PQ])\s*0*(\d+)/i)
  if (!m) return [9, 99999]
  return [m[1].toUpperCase() === "P" ? 0 : 1, Number(m[2])]
}

type Key = "s" | "p" | "n" | "a"
const COLS: { k: Key; label: string; link?: boolean }[] = [
  { k: "s", label: "Testo", link: true },
  { k: "p", label: "Prova" },
  { k: "n", label: "N." },
  { k: "a", label: "Anno" },
]

// Hidden keyword shadow-index (slug -> significant words of the atomic note),
// lazy-loaded ONCE and shared across every list on the page. Powers the
// "Contenuto" search mode.
let KW: Record<string, string> | null = null
let kwLoading: Promise<void> | null = null
async function ensureKeywords(prefix: string): Promise<void> {
  if (KW) return
  if (!kwLoading)
    kwLoading = fetch(prefix + "static/keywords.json")
      .then((r) => r.json())
      .then((j) => { KW = j as Record<string, string> })
      .catch(() => { KW = {} })
  await kwLoading
}

async function renderOne(el: HTMLElement, prefix: string) {
  const src = el.dataset.src
  if (!src) return
  let items: Item[]
  try {
    items = (await (await fetch(prefix + "static/" + src)).json()) as Item[]
  } catch {
    el.textContent = "Impossibile caricare l'elenco."
    return
  }

  let perPage = getPerPage()
  let page = 1
  let filter = ""
  let searchMode: "table" | "content" = "table"
  let sortKey: Key = "a"
  let sortDir = -1 // anno desc by default (newest first)

  // search box (filter within this listing) + mode switch (table entries vs the
  // hidden keyword index of the atomized notes)
  const search = document.createElement("input")
  search.type = "search"
  search.className = "qtable-search"
  function syncPlaceholder() {
    search.placeholder =
      searchMode === "content"
        ? `Cerca nel contenuto di ${items.length} note…`
        : `Cerca tra ${items.length} elementi…`
  }
  syncPlaceholder()

  const modeSel = document.createElement("select")
  modeSel.className = "paged-searchmode"
  modeSel.title = "Dove cercare"
  for (const [val, txt] of [["table", "Tabella"], ["content", "Contenuto"]] as const) {
    const o = document.createElement("option")
    o.value = val
    o.textContent = txt
    modeSel.appendChild(o)
  }
  modeSel.addEventListener("change", async () => {
    searchMode = modeSel.value as "table" | "content"
    syncPlaceholder()
    if (searchMode === "content") await ensureKeywords(prefix)
    page = 1
    render()
  })
  const searchRow = document.createElement("div")
  searchRow.className = "paged-searchrow"
  searchRow.append(search, modeSel)

  const count = document.createElement("div")
  count.className = "qtable-count"

  // items-per-page selector (mate format: "mostra [sel] per pagina")
  const sel = document.createElement("select")
  sel.className = "paged-perpage"
  for (const n of PER_PAGE_OPTS) {
    const o = document.createElement("option")
    o.value = String(n)
    o.textContent = n === 0 ? "Tutti" : String(n)
    if (n === perPage) o.selected = true
    sel.appendChild(o)
  }
  const perPageLbl = document.createElement("label")
  perPageLbl.className = "paged-perpage-label"
  perPageLbl.append("mostra ", sel, " per pagina")
  sel.addEventListener("change", () => {
    perPage = Number(sel.value)
    localStorage.setItem(LS_KEY, String(perPage))
    page = 1
    render()
  })

  const controls = document.createElement("div")
  controls.className = "qtable-controls"
  controls.append(count, perPageLbl)

  const table = document.createElement("table")
  table.className = "qtable-table"
  const pager = document.createElement("nav")
  pager.className = "qtable-pager"
  el.replaceChildren(searchRow, controls, table, pager)

  // whether the data has structured columns; if every item lacks them (older
  // JSON), fall back to a single linked-label column.
  const structured = items.some((it) => it.p || it.n || it.a)

  function cmp(a: Item, b: Item): number {
    let r = 0
    if (sortKey === "a") r = (Number(a.a) || 0) - (Number(b.a) || 0)
    else if (sortKey === "n") {
      const ka = numKey(a.n || ""), kb = numKey(b.n || "")
      r = ka[0] - kb[0] || ka[1] - kb[1]
    } else {
      const av = String(a[sortKey] || "").toLowerCase()
      const bv = String(b[sortKey] || "").toLowerCase()
      r = av < bv ? -1 : av > bv ? 1 : 0
    }
    if (r !== 0) return r * sortDir
    // stable tiebreak: prova then item number
    const pa = String(a.p || a.l).toLowerCase(), pb = String(b.p || b.l).toLowerCase()
    if (pa !== pb) return pa < pb ? -1 : 1
    const ka = numKey(a.n || ""), kb = numKey(b.n || "")
    return ka[0] - kb[0] || ka[1] - kb[1]
  }

  function filtered(): Item[] {
    const q = filter.toLowerCase().trim()
    if (!q) return items.slice().sort(cmp)
    let base: Item[]
    if (searchMode === "content") {
      // match every query token against the note's keyword index (fallback to the
      // visible label/snippet when a note isn't in the index)
      const toks = q.split(/\s+/).filter(Boolean)
      base = items.filter((it) => {
        const kw = (KW && KW[it.h]) || `${it.l} ${it.s}`.toLowerCase()
        return toks.every((t) => kw.includes(t))
      })
    } else {
      base = items.filter(
        (it) =>
          (it.l && it.l.toLowerCase().includes(q)) ||
          (it.s && it.s.toLowerCase().includes(q)) ||
          (it.p && it.p.toLowerCase().includes(q)) ||
          (it.n && it.n.toLowerCase().includes(q)) ||
          (it.a && it.a.toLowerCase().includes(q)),
      )
    }
    return base.sort(cmp)
  }

  function render() {
    const shown = filtered()
    const pages = perPage === 0 ? 1 : Math.max(1, Math.ceil(shown.length / perPage))
    if (page > pages) page = pages
    if (page < 1) page = 1
    const start = perPage === 0 ? 0 : (page - 1) * perPage
    const slice = perPage === 0 ? shown : shown.slice(start, start + perPage)
    count.textContent =
      pages > 1
        ? `${shown.length} elementi — ${start + 1}–${start + slice.length} (pag. ${page}/${pages})`
        : `${shown.length} elementi`

    if (structured) {
      const head =
        "<thead><tr>" +
        COLS.map(
          (c) =>
            `<th data-k="${c.k}" class="qtable-th${
              sortKey === c.k ? " sorted-" + (sortDir > 0 ? "asc" : "desc") : ""
            }">${c.label}</th>`,
        ).join("") +
        "</tr></thead>"
      const body =
        "<tbody>" +
        slice
          .map((it) => {
            const link = `<a href="${prefix}${esc(it.h)}">${esc(it.s || it.l) || "(apri)"}</a>`
            return (
              "<tr>" +
              `<td>${link}</td>` +
              `<td>${esc(it.p || "")}</td>` +
              `<td>${esc(it.n || "")}</td>` +
              `<td>${esc(it.a || "")}</td>` +
              "</tr>"
            )
          })
          .join("") +
        "</tbody>"
      table.innerHTML = head + body
      table.querySelectorAll<HTMLElement>("th.qtable-th").forEach((th) =>
        th.addEventListener("click", () => {
          const k = th.dataset.k as Key
          if (sortKey === k) sortDir *= -1
          else {
            sortKey = k
            sortDir = k === "a" ? -1 : 1
          }
          page = 1
          render()
        }),
      )
    } else {
      // fallback: single linked-label column (no structured fields)
      table.innerHTML =
        "<tbody>" +
        slice
          .map(
            (it) =>
              `<tr><td><a href="${prefix}${esc(it.h)}">${esc(it.l)}</a>${
                it.s ? " — <span class='paged-snip'>" + esc(it.s) + "</span>" : ""
              }</td></tr>`,
          )
          .join("") +
        "</tbody>"
    }
    renderPager(pages)
  }

  function renderPager(pages: number) {
    if (pages <= 1) {
      pager.innerHTML = ""
      return
    }
    const btn = (label: string, target: number, disabled: boolean, cur = false) =>
      `<button class="paged-btn${cur ? " current" : ""}" data-p="${target}" ${disabled ? "disabled" : ""}>${label}</button>`
    const nums: string[] = []
    const win = 2
    const lo = Math.max(1, page - win)
    const hi = Math.min(pages, page + win)
    if (lo > 1) {
      nums.push(btn("1", 1, false))
      if (lo > 2) nums.push(`<span class="paged-ellip">…</span>`)
    }
    for (let i = lo; i <= hi; i++) nums.push(btn(String(i), i, false, i === page))
    if (hi < pages) {
      if (hi < pages - 1) nums.push(`<span class="paged-ellip">…</span>`)
      nums.push(btn(String(pages), pages, false))
    }
    pager.innerHTML =
      btn("‹ Prec", page - 1, page === 1) + nums.join("") + btn("Succ ›", page + 1, page >= pages)
  }

  pager.addEventListener("click", (e) => {
    const t = (e.target as HTMLElement).closest("button[data-p]") as HTMLElement | null
    if (!t) return
    page = Number(t.dataset.p)
    render()
    el.scrollIntoView({ block: "start", behavior: "smooth" })
  })

  search.addEventListener("input", () => {
    filter = search.value
    page = 1
    render()
  })

  render()
}

async function init() {
  const els = Array.from(document.querySelectorAll<HTMLElement>("div.paged-list")).filter(
    (el) => !el.dataset.rendered,
  )
  if (!els.length) return
  const slug = document.body.dataset.slug || ""
  const prefix = "../".repeat((slug.match(/\//g) || []).length)
  for (const el of els) {
    el.dataset.rendered = "1"
    await renderOne(el, prefix)
  }
}

document.addEventListener("nav", () => {
  init()
})
init()
