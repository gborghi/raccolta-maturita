import { chromium } from "playwright"

const BASE = "http://localhost:8799"
// a content page that has the full left sidebar (Explorer) + search
const page_url = process.argv[2] || `${BASE}/Problemi/prob_1936_tutti_temi_4.html`

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await ctx.newPage()
await page.goto(page_url, { waitUntil: "networkidle" })
await page.waitForTimeout(800)

// 1) full page layout (sidebar)
await page.screenshot({ path: "shot_page.png" })

// 2) open the search popout and capture it
try {
  await page.click(".search-button", { timeout: 4000 })
  await page.waitForSelector(".search-container.active", { timeout: 4000 }).catch(() => {})
  await page.waitForTimeout(400)
  // type something so results render
  await page.fill("#search-bar", "parabola").catch(() => {})
  await page.waitForTimeout(600)
  await page.screenshot({ path: "shot_search.png" })
  // report computed stacking info
  const info = await page.evaluate(() => {
    const sc = document.querySelector(".search-container")
    const nav = document.querySelector(".navbar")
    const sb = document.querySelector(".sidebar.left")
    const cs = (el) => el ? getComputedStyle(el) : null
    const r = (el) => el ? el.getBoundingClientRect() : null
    return {
      searchContainer: sc ? { z: cs(sc).zIndex, pos: cs(sc).position, display: cs(sc).display, rect: r(sc) } : null,
      navbar: nav ? { z: cs(nav).zIndex, pos: cs(nav).position, rect: r(nav) } : null,
      sidebarLeft: sb ? { overflow: cs(sb).overflow, height: cs(sb).height, top: cs(sb).top, rect: r(sb) } : null,
      innerH: window.innerHeight,
    }
  })
  console.log(JSON.stringify(info, null, 2))
} catch (e) {
  console.log("search click failed:", e.message)
}
await browser.close()
