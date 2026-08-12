# FitForge — the daily app (hosted on Netlify)

`index.html` is Owen's self-hosted training + daily app — a single file, no build step, data in the browser (localStorage) on his own Netlify site. It's now the **centrepiece**: the daily habits and training all live here, and the habits are internalised (notifications off). Design: **minimal & clean** — a calm near-monochrome dark palette with a single soft mint accent, hairline dividers, flat cards (no glass/shadows), normal-case type, and **fade-only** motion (content fades in; the checkbox fills fade on complete), with `prefers-reduced-motion` honoured. No emoji anywhere in the UI.

## What's in it
- **Today** (landing page) — a movement hero, the **Morning** + **Daily** checklists (tappable, with the daily-4 stretches explainer), **quick-log** (walk / run / gym) with today's logged activity, a **Fitbit panel** (from the optional sheet), and **nutrition** totals.
- **Workout / Dashboard / Exercises / Goals / Body / Settings** — full training log, charts, PBs, themes, JSON export/import.
- **Removed** (Owen's call): the TikTok **Recap** card and the **"Copy my day" reporting check-in** — he's doing the habits himself and no longer reports.

## Deploying an update
It's on Netlify, so redeploy the new `index.html` however the site's set up: drag-drop the file onto the Netlify dashboard, or push to the connected git repo. Data is per-origin, so **existing gym data stays** across redeploys (same Netlify URL) — nothing to migrate.

## Fitbit auto-fill (optional)
Settings → "Fitbit auto-fill" takes a **published Google Sheet CSV link** (from `integrations/fitbit-to-sheets/`). Once set, the Today page fetches the latest row and pre-fills sleep + steps. Netlify can fetch it (unlike a sandboxed page); the sheet must be "Published to web" as CSV. No link = enter the numbers by hand in the check-in.

## What it deliberately does NOT do
- **No push notifications** — a static web app can't fire reliable scheduled/background push. (Notifications from the coach are currently off anyway — the habits are Owen's now.)
- **No reporting / recap** — removed. The app is for Owen's own tracking; nothing is auto-sent anywhere.

## Data model (added to the FitForge DB)
- `checkins[]` — `{date, readiness, sleepScore, sleepTime, steps, restingHr, energy, moved, note, stretches, checklistDone, checklistTotal}` (Fitbit fields mirror the app: Readiness, Sleep score, Sleep time, Steps, Resting HR)
- `walks[]` — `{id, date, steps, km, min, notes, label}`
- `checklist{}` — `{ 'YYYY-MM-DD': { itemId: true } }`
- `settings.fitbitCsvUrl` — the published-CSV link
