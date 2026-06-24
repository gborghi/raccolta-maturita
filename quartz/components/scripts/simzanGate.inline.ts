// Client-side unlock for password-protected SimZan pages. protect_simzan.mjs
// (post-build) replaces the <article> body of each SimZan note with a
// <div class="simzan-gate" data-enc='{s,i,c}'> holding the AES-GCM ciphertext of
// the original rendered HTML. Here we prompt for the password, derive the key
// (PBKDF2-SHA256, must match protect_simzan.mjs), decrypt and inject the HTML.
// The password is cached in sessionStorage so other SimZan pages auto-unlock.

interface Payload { s: string; i: string; c: string } // base64 salt, iv, ciphertext

const SS_KEY = "simzan-pass"
const ITER = 150000

function fromB64(s: string): Uint8Array {
  const bin = atob(s)
  const u = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i)
  return u
}

async function deriveKey(pass: string, salt: Uint8Array): Promise<CryptoKey> {
  const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(pass), "PBKDF2", false, [
    "deriveKey",
  ])
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: ITER, hash: "SHA-256" },
    base,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"],
  )
}

async function decryptOne(p: Payload, pass: string): Promise<string> {
  const key = await deriveKey(pass, fromB64(p.s))
  const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: fromB64(p.i) }, key, fromB64(p.c))
  return new TextDecoder().decode(pt)
}

// Try to unlock every gate on the page with `pass`. Returns true on success.
async function unlockAll(pass: string): Promise<boolean> {
  const gates = Array.from(document.querySelectorAll<HTMLElement>(".simzan-gate"))
  if (!gates.length) return true
  // decrypt all first (so a wrong password fails cleanly without partial DOM edits)
  const decoded: { gate: HTMLElement; html: string }[] = []
  for (const gate of gates) {
    try {
      const payload = JSON.parse(gate.dataset.enc || "{}") as Payload
      decoded.push({ gate, html: await decryptOne(payload, pass) })
    } catch {
      return false
    }
  }
  for (const { gate, html } of decoded) gate.outerHTML = html
  sessionStorage.setItem(SS_KEY, pass)
  return true
}

function init() {
  const gates = document.querySelectorAll<HTMLElement>(".simzan-gate")
  if (!gates.length) return

  const saved = sessionStorage.getItem(SS_KEY)
  if (saved) {
    unlockAll(saved).then((ok) => {
      if (!ok) sessionStorage.removeItem(SS_KEY)
    })
    return
  }

  gates.forEach((gate) => {
    const form = gate.querySelector<HTMLFormElement>(".simzan-form")
    const err = gate.querySelector<HTMLElement>(".simzan-err")
    form?.addEventListener("submit", async (e) => {
      e.preventDefault()
      const input = gate.querySelector<HTMLInputElement>(".simzan-pass")
      const pass = input?.value || ""
      if (err) err.hidden = true
      const ok = await unlockAll(pass)
      if (!ok && err) err.hidden = false
    })
  })
}

document.addEventListener("nav", () => init())
init()
