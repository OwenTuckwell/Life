# FitForge — the daily app (hosted on Netlify)

`index.html` is Owen's self-hosted training + daily app. It's a single file, no build step, data stored in the browser (localStorage) on his own Netlify site. This is the **logging + viewing surface** of the Life OS; the controller (in `system/`) is the notification + planning engine. The two connect via a one-tap **"Copy my day"** bridge (no shared database — that's not free for a static app).

## What's in it
- **Today** (landing page) — today's movement call, the **morning checklist** (grooming + posture stretches, tappable), **quick-log** (walk / run / gym), a **Fitbit panel**, and the **nightly check-in** (sleep, steps, energy, how it went).
- **Copy my day for Claude** — builds the check-in as text and copies it; Owen pastes it into the Claude app and the controller logs it to `progress/log.md`. This is how what he logs in the app reaches the nightly coach.
- Existing FitForge features untouched: Dashboard, Workout, Runs, Exercises, Goals, Body, Settings, themes, charts, PBs, JSON export/import.

## Deploying an update
It's on Netlify, so redeploy the new `index.html` however the site's set up: drag-drop the file onto the Netlify dashboard, or push to the connected git repo. Data is per-origin, so **existing gym data stays** across redeploys (same Netlify URL) — nothing to migrate.

## Fitbit auto-fill (optional)
Settings → "Fitbit auto-fill" takes a **published Google Sheet CSV link** (from `integrations/fitbit-to-sheets/`). Once set, the Today page fetches the latest row and pre-fills sleep + steps. Netlify can fetch it (unlike a sandboxed page); the sheet must be "Published to web" as CSV. No link = enter the numbers by hand in the check-in.

## What it deliberately does NOT do
- **No push notifications** — a static web app can't fire reliable scheduled/background push (especially on iOS). Notifications come from the **controller** via the Claude app; the app is where those nudges send you to tick/log.
- **No auto two-way sync** — the "Copy my day" paste is the bridge to the controller. (A connector-based auto path is possible later if Owen connects Google Sheets on claude.ai.)

## Data model (added to the FitForge DB)
- `checkins[]` — `{date, readiness, sleepScore, sleepTime, steps, restingHr, energy, moved, note, stretches, checklistDone, checklistTotal}` (Fitbit fields mirror the app: Readiness, Sleep score, Sleep time, Steps, Resting HR)
- `walks[]` — `{id, date, steps, km, min, notes, label}`
- `checklist{}` — `{ 'YYYY-MM-DD': { itemId: true } }`
- `settings.fitbitCsvUrl` — the published-CSV link
