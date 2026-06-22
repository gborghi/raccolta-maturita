#!/usr/bin/env bash
# Deploy the built ./public to the gh-pages branch (legacy Pages source).
# `quartz build` wipes public/.git, and the `gh-pages` npm tool dies with
# ENAMETOOLONG on Windows (1400+ files), so we re-init public as its own repo
# and force-push the branch. Run AFTER `node preprocess.mjs && npx quartz build`.
set -e
MSG="${1:-deploy site}"
REPO="https://github.com/gborghi/raccolta-maturita.git"
cd "$(dirname "$0")/public"
# Guard: a killed/raced build can leave public/ incomplete -> deploying it makes
# GitHub serve index.xml (RSS) at / because index.html is missing. Refuse that.
if [ ! -f index.html ]; then
  echo "ABORT: public/index.html missing — build incomplete, NOT deploying." >&2
  exit 1
fi
N=$(find . -name '*.html' | wc -l)
if [ "$N" -lt 100 ]; then
  echo "ABORT: only $N html files in public/ — build looks incomplete, NOT deploying." >&2
  exit 1
fi
touch .nojekyll
rm -rf .git
git init -b gh-pages -q
git add -A
git -c user.email=gio.borghi@gmail.com -c user.name=gborghi commit -q -m "$MSG"
git push -q --force "$REPO" gh-pages
echo "deployed gh-pages @ $(git rev-parse --short HEAD)"
# CRITICAL: the legacy Pages build does NOT reliably auto-trigger on push (live can
# stay stale 30+ min). Explicitly trigger it and report. (proven on raccolta-gare-fisica)
gh api -X POST repos/gborghi/raccolta-maturita/pages/builds >/dev/null 2>&1 \
  && echo "pages build triggered (gh api)" \
  || echo "WARN: could not trigger pages build via gh api — run it manually."
