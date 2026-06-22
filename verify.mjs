import { chromium } from "playwright"
const BASE = "http://localhost:8790"
const url = `${BASE}/Problemi/prob_1936_tutti_temi_4.html`
const browser = await chromium.launch()
for (const w of [1920, 1440]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 1000 } })
  const page = await ctx.newPage()
  await page.goto(url, { waitUntil: "networkidle" })
  await page.waitForTimeout(800)
  const R = (s) => page.evaluate((sel) => {
    const e = document.querySelector(sel); if (!e) return null
    const b = e.getBoundingClientRect(); return { left: Math.round(b.left), right: Math.round(b.right), top: Math.round(b.top), w: Math.round(b.width) }
  }, s)
  const info = {
    vw: w,
    navbarH: (await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue("--navbar-h"))).trim(),
    page_: await R("#quartz-root"),
    navInner: await R(".navbar-inner"),
    brand: await R(".navbar-brand"),
    navLinks: await R(".navbar-links"),
    sidebarLeft: await R(".sidebar.left"),
    center: await R(".center"),
    sidebarRight: await R(".sidebar.right"),
  }
  await page.screenshot({ path: `verify_${w}.png` })
  // open search, measure popout box vs navbar
  await page.evaluate(() => document.querySelector(".search-container").classList.add("active"))
  await page.waitForTimeout(200)
  const search = await page.evaluate(() => {
    const sp = document.querySelector(".search-space"); const nav = document.querySelector(".navbar")
    const a = sp.getBoundingClientRect(); const n = nav.getBoundingClientRect()
    return { searchSpaceTop: Math.round(a.top), navbarBottom: Math.round(n.bottom), overlap: Math.round(n.bottom - a.top) }
  })
  info.search = search
  await page.screenshot({ path: `verify_search_${w}.png` })
  console.log(JSON.stringify(info))
  await ctx.close()
}
await browser.close()
