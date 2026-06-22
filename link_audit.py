"""Audit ALL internal links in the built site (public/). For every <a href> that
points inside the site, resolve it relative to the page and check the target file
exists. Report broken links grouped by target slug + count of source pages."""
import re, os
from pathlib import Path
from collections import defaultdict
from urllib.parse import unquote

PUB = Path(r"C:/Users/utente/site-maturita/public")
BASE = "/raccolta-maturita"

html_files = list(PUB.rglob("*.html"))
existing = set()
for p in PUB.rglob("*"):
    if p.is_file():
        existing.add(p.relative_to(PUB).as_posix())

href_re = re.compile(r'href="([^"]+)"')

def target_exists(rel):
    rel = rel.strip("/")
    if rel == "":
        rel = "index"
    cands = [rel, rel + ".html", rel + "/index.html", rel.rstrip("/") + "/index.html"]
    return any(c in existing for c in cands)

broken = defaultdict(set)   # resolved-target -> {source pages}
raw_by_target = defaultdict(set)
for hp in html_files:
    rel_dir = hp.parent.relative_to(PUB).as_posix()
    src = hp.relative_to(PUB).as_posix()
    txt = hp.read_text(encoding="utf-8", errors="replace")
    for href in href_re.findall(txt):
        if href.startswith(("http://", "https://", "mailto:", "#", "data:", "javascript:")):
            continue
        h = href.split("#")[0].split("?")[0]
        if not h:
            continue
        h = unquote(h)
        # strip the project base if absolute
        if h.startswith(BASE + "/"):
            resolved = h[len(BASE) + 1:]
        elif h.startswith("/"):
            resolved = h.lstrip("/")
        else:
            resolved = os.path.normpath(os.path.join(rel_dir, h)).replace("\\", "/")
        if resolved in (".", ""):
            resolved = "index"
        # ignore static assets that obviously exist checks
        if target_exists(resolved):
            continue
        # skip non-page asset extensions we don't emit-check
        if re.search(r"\.(png|jpg|jpeg|svg|pdf|css|js|webp|ico|woff2?|json|xml|txt)$", resolved, re.I):
            if resolved in existing:
                continue
        broken[resolved].add(src)
        raw_by_target[resolved].add(href)

print(f"HTML pages scanned: {len(html_files)}")
print(f"BROKEN distinct targets: {len(broken)}")
total_links = sum(len(v) for v in broken.values())
print(f"BROKEN link instances: {total_links}\n")
for tgt in sorted(broken, key=lambda t: -len(broken[t]))[:60]:
    ex = next(iter(raw_by_target[tgt]))
    print(f"{len(broken[tgt]):5}x  {tgt}   (e.g. href={ex!r})")
