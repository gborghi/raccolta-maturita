import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore  bundled as client-side script
import script from "./scripts/simzanGate.inline"

const style = `
.simzan-gate {
  border: 1.5px solid var(--lightgray); border-radius: var(--radius, 12px);
  background: var(--light); padding: 1.4rem 1.2rem; margin: 1rem 0;
  box-shadow: 0 2px 12px rgba(25, 26, 46, 0.06);
}
.simzan-lock-msg { margin: 0 0 0.9rem; color: var(--darkgray); font-size: 0.95rem; }
.simzan-form { display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center; }
.simzan-pass {
  flex: 1 1 14rem; padding: 0.5rem 0.8rem; font-size: 0.95rem;
  border: 1.5px solid var(--lightgray); border-radius: 999px;
  background: var(--light); color: var(--dark);
}
.simzan-pass:focus { outline: none; border-color: var(--secondary); }
.simzan-form button {
  font-family: var(--titleFont); font-weight: 600; font-size: 0.9rem;
  padding: 0.5rem 1.2rem; border-radius: 999px; border: 1.5px solid var(--secondary);
  background: var(--secondary); color: #fff; cursor: pointer; transition: all 0.12s ease;
}
.simzan-form button:hover { filter: brightness(1.08); }
.simzan-err { color: #c0392b; font-size: 0.9rem; margin: 0.7rem 0 0; }
`

export default (() => {
  const SimzanGate: QuartzComponent = () => null
  SimzanGate.afterDOMLoaded = script
  SimzanGate.css = style
  return SimzanGate
}) satisfies QuartzComponentConstructor
