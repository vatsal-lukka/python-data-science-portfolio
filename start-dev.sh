#!/usr/bin/env sh
set -e
cd "$(dirname "$0")"
echo "Starting Vatsal Lukka portfolio on http://localhost:3000"
if [ ! -d "node_modules" ]; then
  npm ci
fi
npm run dev
