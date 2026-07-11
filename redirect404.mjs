// Post-build: inject a client-side redirect into public/404.html.
//
// Site URLs are all lowercase (see preprocess.mjs sluggify — required so pages
// agree with the crawl-links plugin, which lowercases every in-body link). Old
// capital URLs (/Svolgimenti/…, /Clusters/…) that were shared or search-indexed
// before the migration would otherwise dead-end. GitHub Pages has no server-side
// redirects, but it serves /404.html for any unknown path — so we lowercase the
// requested path there and retry. A genuinely-missing lowercase URL doesn't loop
// (the lowercased path equals the current one → no redirect → the 404 shows).
import { readFile, writeFile } from "node:fs/promises"
import { existsSync } from "node:fs"

const FILE = "public/404.html"

const SNIPPET = `<script>(function(){try{var p=location.pathname,l=p.toLowerCase();if(l!==p){location.replace(l+location.search+location.hash);}}catch(e){}})();</script>`

if (!existsSync(FILE)) {
  console.warn(`redirect404: ${FILE} not found — skipping (no 404 page to patch)`) // don't fail the build
  process.exit(0)
}

let html = await readFile(FILE, "utf8")
if (html.includes("location.replace(l+")) {
  console.log("redirect404: snippet already present — skipping")
  process.exit(0)
}
// inject as the first thing in <head> so the redirect fires before any render
html = html.replace(/<head(\s[^>]*)?>/i, (m) => m + SNIPPET)
await writeFile(FILE, html, "utf8")
console.log("redirect404: injected lowercase-redirect into public/404.html")
