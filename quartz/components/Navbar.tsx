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
const LINKS: [string, string][] = [
  ["Cluster", "Clusters"],
  ["Argomenti", "Topics"],
  ["Metodi", "Methods"],
  ["Competenze", "Skills"],
  ["Prove", "Prove"],
  ["Problemi", "Problemi"],
  ["Quesiti", "Quesiti"],
  ["Cerca", "cerca"],
]

// "host/sub/dir" -> "/sub/dir"  ;  "host" -> ""
function basePathOf(baseUrl?: string): string {
  if (!baseUrl) return ""
  const i = baseUrl.indexOf("/")
  if (i < 0) return ""
  return ("/" + baseUrl.slice(i + 1)).replace(/\/+$/, "")
}

// inline stroke icons (24×24) used by the rail
const ICON: Record<string, string> = {
  home: `<path d="M3 9.5 12 3l9 6.5"/><path d="M5 10v10h14V10"/>`,
  cluster: `<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>`,
  cerca: `<circle cx="10" cy="10" r="7"/><path d="m21 21-5-5"/>`,
  metodi: `<path d="M20.6 13.4 11 3.8V9l-8 8 3 3 8-8h5.2z"/>`,
  grafo: `<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="7" r="2.5"/><circle cx="12" cy="17" r="2.5"/><path d="M8 7.5 10.5 15M16.5 9l-3 5.5"/>`,
  github: `<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>`,
}
const svg = (name: string, fill = false) =>
  `<svg viewBox="0 0 24 24" fill="${fill ? "currentColor" : "none"}" stroke="${fill ? "none" : "currentColor"}" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">${ICON[name]}</svg>`

// rail destinations: [label, slug, iconName]
const RAIL: [string, string, string][] = [
  ["Home", "", "home"],
  ["Cluster", "Clusters", "cluster"],
  ["Cerca", "cerca", "cerca"],
  ["Metodi", "Methods", "metodi"],
  ["Argomenti", "Topics", "grafo"],
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
