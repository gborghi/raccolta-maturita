import http from "http"
import fs from "fs"
import path from "path"
const CT = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".pdf": "application/pdf" }
http.createServer((q, s) => {
  let fp = path.join("public", decodeURIComponent(q.url.split("?")[0].split("#")[0]))
  if (fp.endsWith(path.sep) || fp.endsWith("/")) fp += "index.html"
  fs.readFile(fp, (e, d) => {
    if (e) { s.writeHead(404); s.end() }
    else { s.writeHead(200, { "content-type": CT[path.extname(fp)] || "application/octet-stream" }); s.end(d) }
  })
}).listen(8790, () => console.log("serving public on 8790"))
