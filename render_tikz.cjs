// Render a TikZ snippet to SVG via node-tikzjax, with an on-disk cache keyed by
// content hash. Reused by preprocess (build-time tikz->svg) and by the figure
// validation step. CLI: node render_tikz.cjs <results-dir> <svg-out-dir>
const tex2svg = require("node-tikzjax").default
const fs = require("fs")
const path = require("path")
const crypto = require("crypto")

function wrap(tikz, libraries) {
  const libs = (libraries && libraries.length)
    ? `\\usetikzlibrary{${libraries.join(",")}}\n`
    : ""
  return `${libs}\\begin{document}\n${tikz}\n\\end{document}`
}

async function renderTikz(tikz, libraries, cacheDir) {
  const src = wrap(tikz, libraries)
  const key = crypto.createHash("sha1").update(src).digest("hex").slice(0, 16)
  const cached = path.join(cacheDir, key + ".svg")
  if (fs.existsSync(cached)) return { svg: fs.readFileSync(cached, "utf8"), key, cached: true }
  const svg = await tex2svg(src, { showConsole: false })
  fs.mkdirSync(cacheDir, { recursive: true })
  fs.writeFileSync(cached, svg)
  return { svg, key, cached: false }
}

module.exports = { renderTikz, wrap }

// CLI: render every results/*.json (decision tikz) to <out>/<stem>.svg
if (require.main === module) {
  const resultsDir = process.argv[2]
  const outDir = process.argv[3]
  const cacheDir = path.join(outDir, ".cache")
  fs.mkdirSync(outDir, { recursive: true })
  ;(async () => {
    const files = fs.readdirSync(resultsDir).filter((f) => f.endsWith(".json"))
    for (const f of files) {
      const r = JSON.parse(fs.readFileSync(path.join(resultsDir, f), "utf8"))
      if (r.decision !== "tikz" || !r.tikz) { console.log(`skip ${r.stem} (${r.decision})`); continue }
      try {
        const { svg } = await renderTikz(r.tikz, r.libraries, cacheDir)
        fs.writeFileSync(path.join(outDir, r.stem + ".svg"), svg)
        console.log(`OK   ${r.stem}  ${svg.length}b`)
      } catch (e) {
        console.log(`FAIL ${r.stem}: ${String(e.message).slice(0, 120)}`)
      }
    }
  })()
}
