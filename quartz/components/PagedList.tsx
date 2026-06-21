import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore  bundled as client-side script
import script from "./scripts/pagedList.inline"

const style = `
div.paged-list { margin: 1rem 0; }
.paged-controls {
  position: sticky; top: 3.4rem; z-index: 50;
  display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;
  padding: 0.5rem 0.8rem; margin-bottom: 0.8rem;
  background: var(--light); border: 1px solid var(--lightgray); border-radius: var(--radius, 12px);
  box-shadow: 0 2px 10px rgba(25,26,46,0.05);
}
.paged-perpage-label { font-size: 0.9rem; color: var(--darkgray); display: inline-flex; align-items: center; gap: 0.4rem; }
.paged-perpage {
  font-family: var(--titleFont); font-weight: 600; font-size: 0.9rem;
  padding: 0.25rem 0.5rem; border-radius: 8px; border: 1.5px solid var(--lightgray);
  background: var(--light); color: var(--dark); cursor: pointer;
}
.paged-perpage:focus { outline: none; border-color: var(--secondary); }
ul.paged-ul { margin: 0.3rem 0; }
ul.paged-ul li { margin: 0.15rem 0; }
.paged-snip { color: var(--gray); font-size: 0.92em; }
.paged-pager { display: flex; flex-wrap: wrap; gap: 0.3rem; align-items: center; margin: 1rem 0 0.3rem; }
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
