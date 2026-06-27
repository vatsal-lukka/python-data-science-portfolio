# How To Run This Portfolio

## Requirements

Install Node.js 20 LTS or newer from https://nodejs.org.

## Windows

Open the project folder in VS Code, then run:

```bat
npm.cmd ci
npm.cmd run dev
```

Open http://localhost:3000.

You can also double-click `start-dev.bat`.

## macOS Or Linux

Open a terminal in the project folder, then run:

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Sharing The Project

When sending this project to someone else, zip the folder but do not include:

- `node_modules`
- `.next`

The receiver only needs the source files plus `package.json` and `package-lock.json`. Running `npm ci` will recreate all dependencies exactly.

## Contact Form

The contact form sends messages to `vatsallukka55@gmail.com` through FormSubmit.
The first submission may trigger a confirmation email to that inbox. Confirm it
once so future messages are delivered normally.
