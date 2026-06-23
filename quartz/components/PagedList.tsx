import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore  bundled as client-side script
import script from "./scripts/pagedList.inline"

const style = `
div.paged-list { margin: 1rem 0; overflow-x: auto; }
.paged-list .qtable-search {
  width: 100%; box-sizing: border-box; padding: 0.5rem 0.7rem; margin-bottom: 0.4rem;
  border: 1.5px solid var(--lightgray); border-radius: 999px; background: var(--light);
  color: var(--dark); font-size: 0.95rem;
}
.paged-list .qtable-search:focus { outline: none; border-color: var(--secondary); }
.qtable-controls {
  display: flex; align-items: center; justify-content: space-between; gap: 0.6rem;
  flex-wrap: wrap; margin-bottom: 0.4rem;
}
.qtable-count { font-size: 0.82rem; color: var(--gray); }
.paged-perpage-label { font-size: 0.85rem; color: var(--darkgray); display: inline-flex; align-items: center; gap: 0.4rem; }
.paged-perpage {
  font-family: var(--titleFont); font-weight: 600; font-size: 0.85rem;
  padding: 0.2rem 0.45rem; border-radius: 8px; border: 1.5px solid var(--lightgray);
  background: var(--light); color: var(--dark); cursor: pointer;
}
.paged-perpage:focus { outline: none; border-color: var(--secondary); }
.paged-list table.qtable-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
.paged-list table.qtable-table th, .paged-list table.qtable-table td {
  text-align: left; padding: 0.35rem 0.55rem; border-bottom: 1px solid var(--lightgray);
  vertical-align: top;
}
.paged-list table.qtable-table th.qtable-th { cursor: pointer; user-select: none; white-space: nowrap; }
.paged-list table.qtable-table th.qtable-th:hover { color: var(--secondary); }
.paged-list table.qtable-table th.sorted-asc::after { content: " \\2191"; }
.paged-list table.qtable-table th.sorted-desc::after { content: " \\2193"; }
.paged-list table.qtable-table td:nth-child(3), .paged-list table.qtable-table td:nth-child(4) { text-align: center; white-space: nowrap; }
.paged-snip { color: var(--gray); font-size: 0.92em; }
.qtable-pager {
  display: flex; gap: 0.3rem; align-items: center; justify-content: center;
  margin-top: 0.9rem; flex-wrap: wrap;
}
.paged-btn {
  font-family: var(--titleFont); font-weight: 600; font-size: 0.85rem;
  min-width: 2rem; padding: 0.3rem 0.6rem; border-radius: 999px;
  border: 1.4px solid var(--lightgray); background: var(--light); color: var(--dark); cursor: pointer;
  transition: all 0.12s ease;
}
.paged-btn:hover:not(:disabled) { border-color: var(--accent-orange, #f0852a); }
.paged-btn.current { background: var(--secondary); color: #fff; border-color: var(--secondary); }
.paged-btn:disabled { opacity: 0.4; cursor: default; }
.paged-ellip { color: var(--gray); padding: 0 0.2rem; }
`

export default (() => {
  const PagedList: QuartzComponent = () => null
  PagedList.afterDOMLoaded = script
  PagedList.css = style
  return PagedList
}) satisfies QuartzComponentConstructor
