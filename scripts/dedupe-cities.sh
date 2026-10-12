#!/usr/bin/env bash
# Build -> serve -> audit loop that flags near-duplicate generated city pages (Jaccard >= 0.35 vs. same-state
# siblings) into src/data/cities-noindex.json, so they stay noindex and out of the sitemaps.
# Usage: bash scripts/dedupe-cities.sh [rounds=3] [port=3199]
set -euo pipefail
ROUNDS="${1:-3}"
PORT="${2:-3199}"
cd "$(dirname "$0")/.."
for i in $(seq 1 "$ROUNDS"); do
  echo "== round $i: build"
  npx next build > /dev/null
  npx next start -p "$PORT" > /dev/null 2>&1 &
  SERVER=$!
  for _ in $(seq 1 60); do curl -s -o /dev/null "http://localhost:$PORT/" && break; sleep 1; done
  BEFORE=$(node -e 'console.log(require("./src/data/cities-noindex.json").length)')
  BASE="http://localhost:$PORT" DUP_OUT=src/data/cities-noindex.json node scripts/seo-audit.mjs | grep -E "^Flagged|^Audited|cities \(vs" || true
  kill "$SERVER" 2>/dev/null || true
  taskkill //F //T //PID "$SERVER" > /dev/null 2>&1 || true
  AFTER=$(node -e 'console.log(require("./src/data/cities-noindex.json").length)')
  if [ "$BEFORE" = "$AFTER" ]; then echo "stable after round $i"; break; fi
done
