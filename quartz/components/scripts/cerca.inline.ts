// Faceted multi-tag search for the /cerca page (maturità corpus). Loads
// prove.json and combines tags across facets (anno, area, cluster, argomento,
// metodo, competenza, tipo di funzione) with an AND/OR (TUTTI/QUALSIASI)
// toggle, rendering matches into a sortable table.

interface P {
  href: string
  title: string
  tipo: string
  anno: string
  area: string
  cluster: string
  summary: string
  topics: string[]
  methods: string[]
  skills: string[]
  ftypes: string[]
}

interface Facet {
  key: keyof P
  label: string
  multi?: boolean
  strip?: string
}

const FACETS: Facet[] = [
  { key: "tipo", label: "Tipo" },
  { key: "anno", label: "Anno" },
  { key: "area", label: "Area" },
  { key: "cluster", label: "Cluster" },
  { key: "topics", label: "Argomento", multi: true },
  { key: "methods", label: "Metodo", multi: true },
  { key: "skills", label: "Competenza", multi: true },
  { key: "ftypes", label: "Tipo funzione", multi: true },
]

const MAX_ROWS = 1000

// pagination identical to the concept-page tables (pagedList.inline.ts)
const PER_PAGE_OPTS = [25, 50, 100, 250, 0] // 0 = Tutti
const LS_KEY = "rgf-cerca-perpage"
function getPerPage(): number {
  const raw = localStorage.getItem(LS_KEY)
  if (raw == null) return 50
  const v = Number(raw)
  return PER_PAGE_OPTS.includes(v) ? v : 50
}

// hidden keyword shadow-index (slug -> significant words), lazy-loaded once for
// the "Contenuto" search mode.
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

function esc(s: unknown): string {
  return String(s).replace(/[&<>"]/g, (c) =>
    c === "&" ? "&amp;" : c === "<" ? "&lt;" : c === ">" ? "&gt;" : "&quot;",
  )
}
function pretty(strip: string | undefined, v: string): string {
  let s = strip ? v.replace(strip, "") : v
  return s.charAt(0).toUpperCase() + s.slice(1)
}

async function init() {
  const root = document.getElementById("cerca")
  if (!root || root.dataset.rendered) return
  root.dataset.rendered = "1"

  const slug = document.body.dataset.slug || ""
  const prefix = "../".repeat((slug.match(/\//g) || []).length)
  let data: P[]
  try {
    data = await (await fetch(prefix + "static/prove.json")).json()
  } catch {
    root.textContent = "Impossibile caricare i dati."
    return
  }

  const selected = new Set<string>()
  let mode: "AND" | "OR" = "AND"
  let filterText = ""
  let searchMode: "table" | "content" = "table"
  let perPage = getPerPage()

  const facetValues: { facet: Facet; values: [string, number][] }[] = FACETS.map((facet) => {
    const counts = new Map<string, number>()
    for (const p of data) {
      const raw = p[facet.key] as unknown
      const vals = facet.multi ? (raw as string[]) || [] : raw === "" || raw == null ? [] : [String(raw)]
      for (const v of vals) counts.set(v, (counts.get(v) || 0) + 1)
    }
    let values = [...counts.entries()]
    if (facet.key === "anno") values.sort((a, b) => Number(b[0]) - Number(a[0]))
    else values.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    return { facet, values }
  })

  function matches(p: P): boolean {
    if (selected.size === 0) return false
    const test = (token: string) => {
      const [key, val] = token.split("::")
      const facet = FACETS.find((f) => f.key === key)!
      if (facet.multi) return ((p[facet.key] as unknown as string[]) || []).includes(val)
      return String(p[facet.key]) === val
    }
    const tokens = [...selected]
    return mode === "AND" ? tokens.every(test) : tokens.some(test)
  }

  const controls = document.createElement("div")
  controls.className = "cerca-controls"
  const facetsBox = document.createElement("div")
  facetsBox.className = "cerca-facets"
  const selectedBar = document.createElement("div")
  selectedBar.className = "cerca-selected"
  // free-text search WITHIN the tag-matched results (same UX as the concept-page
  // tables). Lives below the tags; filters by title / testo / tag labels.
  const search = document.createElement("input")
  search.type = "search"
  search.className = "qtable-search cerca-search"
  function syncPlaceholder() {
    search.placeholder =
      searchMode === "content"
        ? "Cerca nel contenuto delle note selezionate…"
        : "Cerca nel testo dei risultati selezionati…"
  }
  syncPlaceholder()
  search.addEventListener("input", () => {
    filterText = search.value
    page = 0
    renderResults()
  })
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
    page = 0
    renderResults()
  })
  const searchRow = document.createElement("div")
  searchRow.className = "paged-searchrow cerca-searchrow"
  searchRow.append(search, modeSel)
  const resultsBox = document.createElement("div")
  resultsBox.className = "cerca-results"
  root.replaceChildren(controls, facetsBox, selectedBar, searchRow, resultsBox)

  const toggle = document.createElement("button")
  toggle.className = "cerca-toggle"
  function syncToggle() {
    toggle.textContent = mode === "AND" ? "Corrispondenza: TUTTI i tag" : "Corrispondenza: QUALSIASI tag"
  }
  toggle.addEventListener("click", () => {
    mode = mode === "AND" ? "OR" : "AND"
    syncToggle()
    render()
  })
  syncToggle()
  controls.appendChild(toggle)

  for (const { facet, values } of facetValues) {
    if (!values.length) continue
    const sec = document.createElement("details")
    sec.className = "cerca-facet"
    const sum = document.createElement("summary")
    sum.textContent = `${facet.label} (${values.length})`
    sec.appendChild(sum)
    const chips = document.createElement("div")
    chips.className = "cerca-chips"
    for (const [val, count] of values) {
      const token = `${facet.key}::${val}`
      const chip = document.createElement("button")
      chip.className = "cerca-chip"
      chip.dataset.token = token
      chip.innerHTML = `${esc(pretty(facet.strip, val))} <span class="cerca-n">${count}</span>`
      chip.addEventListener("click", () => {
        if (selected.has(token)) selected.delete(token)
        else selected.add(token)
        render()
      })
      chips.appendChild(chip)
    }
    sec.appendChild(chips)
    facetsBox.appendChild(sec)
  }

  let sortKey: keyof P = "anno"
  let sortDir = -1
  let page = 0

  // free-text predicate: "table" mode searches the visible columns + tag labels;
  // "content" mode searches the hidden keyword index of the atomized note.
  function textMatch(p: P): boolean {
    const q = filterText.toLowerCase().trim()
    if (!q) return true
    if (searchMode === "content") {
      const kw = (KW && KW[p.href]) || `${p.title} ${p.summary}`.toLowerCase()
      return q.split(/\s+/).filter(Boolean).every((t) => kw.includes(t))
    }
    const hay = [
      p.title, p.summary, p.tipo, p.anno, p.area, p.cluster,
      ...(p.topics || []), ...(p.methods || []), ...(p.skills || []), ...(p.ftypes || []),
    ].join(" ").toLowerCase()
    return hay.includes(q)
  }

  function renderResults() {
    if (selected.size === 0) {
      resultsBox.innerHTML = `<p class="cerca-hint">Seleziona dei tag qui sopra per vedere i problemi e quesiti.</p>`
      return
    }
    let rows = data.filter((p) => matches(p) && textMatch(p))
    rows.sort((a, b) => {
      let av: any = a[sortKey], bv: any = b[sortKey]
      if (sortKey === "anno") {
        av = Number(av)
        bv = Number(bv)
      }
      if (av < bv) return -sortDir
      if (av > bv) return sortDir
      if (a.title !== b.title) return a.title < b.title ? -1 : 1
      return 0
    })
    const total = Math.min(rows.length, MAX_ROWS)
    const pages = perPage === 0 ? 1 : Math.max(1, Math.ceil(total / perPage))
    if (page >= pages) page = pages - 1
    if (page < 0) page = 0
    const start = perPage === 0 ? 0 : page * perPage
    const shown = perPage === 0 ? rows.slice(0, total) : rows.slice(start, start + perPage)
    const cols: [keyof P, string][] = [
      ["title", "Problema / Quesito"],
      ["summary", "Testo"],
      ["tipo", "Tipo"],
      ["anno", "Anno"],
    ]
    const head = cols
      .map(
        ([k, l]) =>
          `<th data-k="${k}" class="qtable-th${sortKey === k ? " sorted-" + (sortDir > 0 ? "asc" : "desc") : ""}">${l}</th>`,
      )
      .join("")
    const body = shown
      .map(
        (r) =>
          `<tr><td><a href="${prefix}${esc(r.href)}">${esc(r.title) || "(item)"}</a></td>` +
          `<td>${esc(r.summary)}</td><td>${esc(pretty(undefined, r.tipo))}</td><td>${esc(r.anno)}</td></tr>`,
      )
      .join("")
    const note = rows.length > MAX_ROWS ? ` (limitati a ${MAX_ROWS})` : ""
    const from = total === 0 ? 0 : start + 1
    const to = start + shown.length
    // per-page selector (mate format) + live count
    const perPageOpts = PER_PAGE_OPTS.map(
      (n) => `<option value="${n}"${n === perPage ? " selected" : ""}>${n === 0 ? "Tutti" : n}</option>`,
    ).join("")
    const countLine =
      `<div class="qtable-controls">` +
      `<div class="qtable-count"><strong>${rows.length}</strong> problemi e quesiti${note}` +
      (pages > 1 ? ` — ${from}–${to} (pag. ${page + 1}/${pages})` : "") +
      `</div>` +
      `<label class="paged-perpage-label">mostra <select class="paged-perpage">${perPageOpts}</select> per pagina</label>` +
      `</div>`
    // windowed numbered pager (identical to pagedList)
    let pager = ""
    if (pages > 1) {
      const btn = (label: string, target: number, disabled: boolean, cur = false) =>
        `<button class="paged-btn${cur ? " current" : ""}" data-p="${target}" ${disabled ? "disabled" : ""}>${label}</button>`
      const nums: string[] = []
      const win = 2
      const lo = Math.max(0, page - win)
      const hi = Math.min(pages - 1, page + win)
      if (lo > 0) { nums.push(btn("1", 0, false)); if (lo > 1) nums.push(`<span class="paged-ellip">…</span>`) }
      for (let i = lo; i <= hi; i++) nums.push(btn(String(i + 1), i, false, i === page))
      if (hi < pages - 1) { if (hi < pages - 2) nums.push(`<span class="paged-ellip">…</span>`); nums.push(btn(String(pages), pages - 1, false)) }
      pager =
        `<nav class="qtable-pager">` +
        btn("‹ Prec", page - 1, page === 0) + nums.join("") + btn("Succ ›", page + 1, page >= pages - 1) +
        `</nav>`
    }
    resultsBox.innerHTML =
      countLine +
      `<table class="qtable-table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>` +
      pager
    resultsBox.querySelectorAll<HTMLElement>("th.qtable-th").forEach((th) =>
      th.addEventListener("click", () => {
        const k = th.dataset.k as keyof P
        if (sortKey === k) sortDir *= -1
        else {
          sortKey = k
          sortDir = 1
        }
        page = 0
        renderResults()
      }),
    )
    const sel = resultsBox.querySelector<HTMLSelectElement>("select.paged-perpage")
    sel?.addEventListener("change", () => {
      perPage = Number(sel.value)
      localStorage.setItem(LS_KEY, String(perPage))
      page = 0
      renderResults()
    })
    resultsBox.querySelectorAll<HTMLElement>(".paged-btn[data-p]").forEach((b) =>
      b.addEventListener("click", () => {
        if ((b as HTMLButtonElement).disabled) return
        page = Number(b.dataset.p)
        renderResults()
        resultsBox.scrollIntoView({ behavior: "smooth", block: "start" })
      }),
    )
  }

  function renderSelected() {
    if (selected.size === 0) {
      selectedBar.innerHTML = ""
      return
    }
    selectedBar.innerHTML =
      `<span class="cerca-sel-label">Tag attivi:</span> ` +
      [...selected]
        .map((token) => {
          const [key, val] = token.split("::")
          const f = FACETS.find((x) => x.key === key)!
          return `<button class="cerca-chip active" data-token="${esc(token)}">${esc(f.label)}: ${esc(pretty(f.strip, val))} ✕</button>`
        })
        .join("") +
      ` <button class="cerca-clear">Azzera</button>`
    selectedBar.querySelectorAll<HTMLElement>(".cerca-chip.active").forEach((b) =>
      b.addEventListener("click", () => {
        selected.delete(b.dataset.token!)
        render()
      }),
    )
    selectedBar.querySelector(".cerca-clear")?.addEventListener("click", () => {
      selected.clear()
      render()
    })
  }

  function syncChipStates() {
    facetsBox.querySelectorAll<HTMLElement>(".cerca-chip").forEach((c) => {
      c.classList.toggle("active", selected.has(c.dataset.token!))
    })
  }

  function render() {
    page = 0
    syncChipStates()
    renderSelected()
    renderResults()
  }

  render()
}

document.addEventListener("nav", () => {
  init()
})
init()
