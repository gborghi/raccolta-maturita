import { chromium } from "playwright"
const BASE = "http://localhost:8790"
const browser = await chromium.launch()
for (const w of [1920, 1440]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 1000 } })
  const page = await ctx.newPage()
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" })
  await page.waitForTimeout(700)
  await page.screenshot({ path: `home_${w}.png` })
  const m = await page.evaluate(() => {
    const r = (s) => { const e = document.querySelector(s); return e ? { left: Math.round(e.getBoundingClientRect().left), right: Math.round(e.getBoundingClientRect().right), w: Math.round(e.getBoundingClientRect().width) } : null }
    return {
      vw: window.innerWidth,
      page: r("#quartz-root.page") || r(".page"),
      quartzBody: r("#quartz-body"),
      navInner: r(".navbar-inner"),
      sidebarLeft: r(".sidebar.left"),
      center: r(".center"),
      brand: r(".navbar-brand"),
    }
  })
  console.log(`w=${w}`, JSON.stringify(m))
  await ctx.close()
}
await browser.close()
