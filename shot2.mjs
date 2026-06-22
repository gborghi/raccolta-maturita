import { chromium } from "playwright"
const BASE = "http://localhost:8799"
const url = `${BASE}/Problemi/prob_1936_tutti_temi_4.html`
const browser = await chromium.launch()

async function run(moveToBody, outfile) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(url, { waitUntil: "networkidle" })
  await page.waitForTimeout(400)
  const probe = await page.evaluate((move) => {
    const c = document.querySelector(".search-container")
    if (move) {
      const sb = document.querySelector(".sidebar.left")
      sb.style.zIndex = "1001"          // lift the rail's stacking context above the navbar
    }
    c.classList.add("active")          // CSS: .active { display: inline-block }
    // typed query so the result box is visible
    const bar = c.querySelector("#search-bar")
    if (bar) bar.value = "parabola"
    // probe stacking: what paints on top over the navbar band (y=38) ?
    const el = document.elementFromPoint(720, 38)
    return {
      topAtNavbar: el ? (el.className || el.tagName) : null,
      parent: c.parentElement.tagName,
      z: getComputedStyle(c).zIndex,
    }
  }, moveToBody)
  await page.waitForTimeout(300)
  await page.screenshot({ path: outfile })
  console.log(outfile, JSON.stringify(probe))
  await ctx.close()
}

await run(false, "shot_baseline.png")
await run(true, "shot_fixed.png")
await browser.close()
