import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// App-shell chrome (rendered at <body> level by renderPage.tsx, OUTSIDE the grid):
//   • a fixed left icon RAIL   • a fixed TOPBAR (brand + relocated Quartz toolbar)
//   • a fixed horizontal SUBNAV (scrolling section links with arrows).
// All layout/styling lives in quartz/styles/custom.scss (.m-rail / .m-topbar /
// .m-subnav …); the driver script (nav height, subnav arrows, active link) is
// inlined in quartz/plugins/emitters/componentResources.ts. Links are ABSOLUTE,
// built from the configured baseUrl's path so they carry the GitHub-Pages project
// base on every page.
// Slugs are LOWERCASE: pages are emitted at lowercase paths (see preprocess.mjs
// sluggify) to agree with crawl-links' lowercased links. These component hrefs are
// NOT run through crawl-links, so they must already be the final lowercase URL.
const LINKS: [string, string][] = [
  ["Cluster", "clusters"],
  ["Argomenti", "topics"],
  ["Metodi", "methods"],
  ["Competenze", "skills"],
  ["Prove", "prove"],
  ["Problemi", "problemi"],
  ["Quesiti", "quesiti"],
  ["Statistiche", "statistiche"],
  ["Cerca", "cerca"],
]

// "host/sub/dir" -> "/sub/dir"  ;  "host" -> ""
function basePathOf(baseUrl?: string): string {
  if (!baseUrl) return ""
  const i = baseUrl.indexOf("/")
  if (i < 0) return ""
  return ("/" + baseUrl.slice(i + 1)).replace(/\/+$/, "")
}

// inline stroke icons (24×24) used by the rail. Chosen to read at a glance:
//   argomenti→tag, metodi→wrench, competenze→bullseye, prove→exam sheet,
//   problemi→puzzle, quesiti→question bubble.
const ICON: Record<string, string> = {
  home: `<path d="M3 9.5 12 3l9 6.5"/><path d="M5 10v10h14V10"/>`,
  cluster: `<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>`,
  cerca: `<circle cx="10" cy="10" r="7"/><path d="m21 21-5-5"/>`,
  argomenti: `<path d="M12.6 2.6A2 2 0 0 0 11.2 2H4a2 2 0 0 0-2 2v7.2a2 2 0 0 0 .6 1.4l8.7 8.7a2.4 2.4 0 0 0 3.4 0l6.6-6.6a2.4 2.4 0 0 0 0-3.4z"/><circle cx="7.3" cy="7.3" r="1.3"/>`,
  metodi: `<path d="M14.7 6.3a4 4 0 0 0-5.66 5.66l-6.34 6.34a2 2 0 0 0 2.83 2.83l6.34-6.34a4 4 0 0 0 5.66-5.66l-2.54 2.54-2.83-.7-.7-2.83z"/>`,
  competenze: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.6"/>`,
  prove: `<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/>`,
  problemi: `<path d="M9 3.2a1.9 1.9 0 0 1 3.8 0c0 .6-.3.9-.3 1.4h3.9v3.9c.5 0 .8-.3 1.4-.3a1.9 1.9 0 0 1 0 3.8c-.6 0-.9-.3-1.4-.3v3.9h-3.9c0 .5.3.8.3 1.4a1.9 1.9 0 0 1-3.8 0c0-.6.3-.9.3-1.4H5.4v-3.9c-.5 0-.8.3-1.4.3a1.9 1.9 0 0 1 0-3.8c.6 0 .9.3 1.4.3V4.6H9c0-.5-.3-.8-.3-1.4z"/>`,
  quesiti: `<path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.9 8.9 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.4 8.4 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5z"/><path d="M10.3 9.4a2.3 2.3 0 0 1 4.4.8c0 1.5-2.2 1.8-2.2 3.1"/><circle cx="12.4" cy="16.1" r="0.6" fill="currentColor" stroke="none"/>`,
  stats: `<path d="M3 3v18h18"/><rect x="7" y="11" width="3" height="6" rx="0.5"/><rect x="12" y="6" width="3" height="11" rx="0.5"/><rect x="17" y="14" width="3" height="3" rx="0.5"/>`,
  grafo: `<circle cx="6" cy="6" r="2.4"/><circle cx="18" cy="7" r="2.4"/><circle cx="12" cy="17.5" r="2.4"/><path d="M8.1 7.2 10.4 15.4M16.1 8.9l-3 6.2M8.4 6.4h7"/>`,
  github: `<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>`,
}
const svg = (name: string, fill = false) =>
  `<svg viewBox="0 0 24 24" fill="${fill ? "currentColor" : "none"}" stroke="${fill ? "none" : "currentColor"}" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">${ICON[name]}</svg>`

// rail destinations: [label, slug, iconName]. Same set + order as the sub-nav so
// the rail is a complete section index (mirrors LINKS above).
const RAIL: [string, string, string][] = [
  ["Home", "", "home"],
  ["Cluster", "clusters", "cluster"],
  ["Argomenti", "topics", "argomenti"],
  ["Metodi", "methods", "metodi"],
  ["Competenze", "skills", "competenze"],
  ["Prove", "prove", "prove"],
  ["Problemi", "problemi", "problemi"],
  ["Quesiti", "quesiti", "quesiti"],
  ["Statistiche", "statistiche", "stats"],
  ["Cerca", "cerca", "cerca"],
]

const Navbar: QuartzComponent = ({ cfg, displayClass }: QuartzComponentProps) => {
  const bp = basePathOf(cfg?.baseUrl)
  const href = (slug: string) => `${bp}/${slug}${slug === "" || slug === "cerca" ? "" : "/"}`
  return (
    <div class={classNames(displayClass, "m-shell")}>
      {/* ── left icon rail ── */}
      <aside class="m-rail" aria-label="Navigazione">
        <a class="m-rail-logo" href={`${bp}/`} aria-label="Home">M</a>
        {RAIL.map(([label, slug, icon]) => (
          <a
            class="m-rail-btn"
            href={href(slug)}
            title={label}
            aria-label={label}
            data-nav-slug={slug}
            dangerouslySetInnerHTML={{ __html: svg(icon) }}
          />
        ))}
        {/* graph toggle — an ACTION, not a destination. The chrome driver hides it
            on pages without a right-rail graph (e.g. home) and, on click, reveals +
            builds the "Vista grafo" panel. */}
        <button
          type="button"
          class="m-rail-btn m-rail-graph"
          title="Vista grafo"
          aria-label="Vista grafo"
          data-graph-toggle
          hidden
          dangerouslySetInnerHTML={{ __html: svg("grafo") }}
        />
        <a
          class="m-rail-gh"
          href="https://github.com/gborghi/raccolta-maturita"
          target="_blank"
          rel="noopener"
          title="GitHub"
          aria-label="GitHub"
          dangerouslySetInnerHTML={{ __html: svg("github", true) }}
        />
      </aside>

      {/* ── topbar (brand; Quartz search/theme/reader toolbar is CSS-relocated here) ── */}
      <header class="m-topbar">
        <a class="m-brand" href={`${bp}/`}>
          <span class="m-brand-mark">M</span>
          Maturità Scientifica
        </a>
        <div class="m-topbar-spacer" />
      </header>

      {/* ── horizontal sub-nav ── */}
      <nav class="m-subnav" aria-label="Sezioni">
        <div class="m-subnav-fade left" data-fade="l" />
        <button class="m-subnav-arrow left" data-arrow="l" aria-label="Scorri a sinistra" tabIndex={-1}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <div class="m-subnav-scroll" data-subnav-scroll>
          {LINKS.map(([label, slug]) => (
            <a class="m-subnav-link" href={href(slug)} data-nav-slug={slug}>
              {label}
            </a>
          ))}
        </div>
        <button class="m-subnav-arrow right" data-arrow="r" aria-label="Scorri a destra" tabIndex={-1}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>
        <div class="m-subnav-fade right" data-fade="r" />
      </nav>
    </div>
  )
}

export default (() => Navbar) satisfies QuartzComponentConstructor
