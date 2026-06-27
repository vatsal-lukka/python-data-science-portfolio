@echo off
setlocal
cd /d "%~dp0"
echo Starting Vatsal Lukka portfolio on http://localhost:3000
if not exist node_modules (
  npm.cmd ci
)
npm.cmd run dev
