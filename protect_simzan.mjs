// Post-build: password-protect the SimZan (Simulazioni Zanichelli, copyrighted)
// pages. For each built HTML whose slug contains "simzan", AES-GCM encrypt the
// rendered <article> body with a key derived (PBKDF2-SHA256) from $SIMZAN_PASS,
// and replace the body with a password gate holding the ciphertext. The client
// script (simzanGate.inline.ts) prompts for the password and decrypts in-browser.
//
// The password lives ONLY in the GitHub Actions secret SIMZAN_PASS (never in the
// repo). Search indices / graph are intentionally left untouched (user choice),
// so SimZan stays discoverable — only the readable page body is gated.
import { promises as fs } from "node:fs"
import { webcrypto as crypto } from "node:crypto"
import path from "node:path"

const PUB = "public"
const PASS = process.env.SIMZAN_PASS
const ITER = 150000
const ART_RE = /(<article class="popover-hint">)([\s\S]*?)(<\/article>)/

if (!PASS) {
  console.error("protect_simzan: SIMZAN_PASS not set — refusing to ship SimZan unprotected")
  process.exit(1)
}

const enc = new TextEncoder()
const b64 = (buf) => Buffer.from(buf).toString("base64")

async function deriveKey(salt) {
  const base = await crypto.subtle.importKey("raw", enc.encode(PASS), "PBKDF2", false, ["deriveKey"])
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: ITER, hash: "SHA-256" },
    base,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt"],
  )
}

async function encryptHTML(plaintext) {
  const salt = crypto.getRandomValues(new Uint8Array(16))
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const key = await deriveKey(salt)
  const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, enc.encode(plaintext))
  return { s: b64(salt), i: b64(iv), c: b64(new Uint8Array(ct)) }
}

const GATE_UI =
  `<p class="simzan-lock-msg">🔒 Contenuto riservato (materiale Zanichelli, protetto da copyright). ` +
  `Inserisci la password per visualizzarlo.</p>` +
  `<form class="simzan-form"><input type="password" class="simzan-pass" placeholder="Password" ` +
  `autocomplete="off" autocapitalize="off" spellcheck="false"><button type="submit">Sblocca</button></form>` +
  `<p class="simzan-err" hidden>Password errata.</p>`

// recursive listing (readdir {recursive} avoids dirent-type quirks on some FS)
const all = await fs.readdir(PUB, { recursive: true })

let n = 0,
  skipped = 0
for (const rel of all) {
  if (!rel.endsWith(".html")) continue
  const file = path.join(PUB, rel)
  if (!/simzan/i.test(file)) continue
  let html = await fs.readFile(file, "utf8")
  const m = html.match(ART_RE)
  if (!m) {
    skipped++
    continue
  }
  const payload = await encryptHTML(m[2])
  // base64 + JSON contain no single quotes, so a single-quoted attribute is safe
  const blob = JSON.stringify(payload)
  const gate = `<div class="simzan-gate" data-enc='${blob}'>${GATE_UI}</div>`
  html = html.replace(ART_RE, `$1${gate}$3`)
  // scrub the content snippet that Quartz bakes into the page's own
  // description / og:description / twitter:description meta tags (it would leak
  // the gated problem text right inside the protected page's <head>).
  html = html.replace(
    /(<meta (?:name|property)="(?:description|og:description|twitter:description|og:image:alt)" content=")[^"]*(")/g,
    "$1Contenuto riservato — materiale Zanichelli protetto da password.$2",
  )
  await fs.writeFile(file, html)
  n++
}
console.log(`protect_simzan: encrypted ${n} SimZan pages${skipped ? ` (${skipped} had no <article>, skipped)` : ""}`)
