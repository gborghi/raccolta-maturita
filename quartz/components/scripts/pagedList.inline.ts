// Renders the <div class="paged-list" data-src="cl/N.json"> placeholders that
// preprocess.mjs emitted in place of big concept bullet-lists. Loads the JSON
// slice, shows a controls bar (items-per-page selector, kept under the navbar)
// and pages through the items — so concept pages ship tiny HTML and load fast.

interface Item { h: string; l: string; s: string }

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
  let page = 0

  const controls = document.createElement("div")
  controls.className = "paged-controls"
  const listBox = document.createElement("div")
  listBox.className = "paged-listbox"
  const pager = document.createElement("nav")
  pager.className = "paged-pager"
  el.replaceChildren(controls, listBox, pager)

  // items-per-page selector
  const sel = document.createElement("select")
  sel.className = "paged-perpage"
  for (const n of PER_PAGE_OPTS) {
    const o = document.createElement("option")
    o.value = String(n)
    o.textContent = n === 0 ? "Tutti" : String(n)
    if (n === perPage) o.selected = true
    sel.appendChild(o)
  }
  const lbl = document.createElement("label")
  lbl.className = "paged-perpage-label"
  lbl.append(`${items.length} elementi · mostra `, sel, " per pagina")
  controls.appendChild(lbl)
  sel.addEventListener("change", () => {
    perPage = Number(sel.value)
    localStorage.setItem(LS_KEY, String(perPage))
    page = 0
    render()
  })

  function pageCount(): number {
    return perPage === 0 ? 1 : Math.max(1, Math.ceil(items.length / perPage))
  }

  function renderList() {
    const start = perPage === 0 ? 0 : page * perPage
    const slice = perPage === 0 ? items : items.slice(start, start + perPage)
    listBox.innerHTML =
      "<ul class='paged-ul'>" +
      slice
        .map(
          (it) =>
            `<li><a href="${prefix}${esc(it.h)}">${esc(it.l)}</a>${it.s ? " — <span class='paged-snip'>" + esc(it.s) + "</span>" : ""}</li>`,
        )
        .join("") +
      "</ul>"
  }

  function renderPager() {
    const pc = pageCount()
    if (pc <= 1) { pager.innerHTML = ""; return }
    const btn = (label: string, target: number, disabled: boolean, cur = false) =>
      `<button class="paged-btn${cur ? " current" : ""}" data-p="${target}" ${disabled ? "disabled" : ""}>${label}</button>`
    // windowed page numbers
    const nums: string[] = []
    const win = 2
    const lo = Math.max(0, page - win)
    const hi = Math.min(pc - 1, page + win)
    if (lo > 0) { nums.push(btn("1", 0, false)); if (lo > 1) nums.push(`<span class="paged-ellip">…</span>`) }
    for (let i = lo; i <= hi; i++) nums.push(btn(String(i + 1), i, false, i === page))
    if (hi < pc - 1) { if (hi < pc - 2) nums.push(`<span class="paged-ellip">…</span>`); nums.push(btn(String(pc), pc - 1, false)) }
    pager.innerHTML =
      btn("‹ Prec", page - 1, page === 0) + nums.join("") + btn("Succ ›", page + 1, page >= pc - 1)
    pager.querySelectorAll<HTMLButtonElement>("button[data-p]").forEach((b) =>
      b.addEventListener("click", () => {
        page = Number(b.dataset.p)
        render()
        el.scrollIntoView({ block: "start", behavior: "smooth" })
      }),
    )
  }

  function render() {
    renderList()
    renderPager()
  }
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
