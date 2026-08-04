# Health data — Fitbit, sleep, steps

**The honest situation:** there is currently **no connector** that lets Claude read Fitbit or Google Health/Google Fit directly. Fitbit syncing into Google Health doesn't change that — Google exposes Calendar, Drive, and Gmail to Claude, but **not** its fitness data. So sleep, steps, and resting heart rate can't flow in automatically on their own.

There are two working ways to get the data in. Use either or both.

## Option A — Manual (works today, zero setup)
The **22:00 nightly check-in** asks how you slept and roughly your steps. You reply with the numbers; Claude logs them into `progress/daily-log.md` and uses them to shape tomorrow (bad sleep → gentler morning; low steps → walk emphasis). Simple, honest, and it doubles as the accountability check. This is the default until a bridge is set up.

## Option B — Google Sheet bridge (automatic, ~10 min one-time setup)
Claude **can** read a Google Sheet (via the Google Drive connector). So we pipe Fitbit/Google Fit data into a Sheet, and the controller reads it.

Pick whichever source you actually use:
- **From Google Fit / Health Connect (Android):** the app **Health Sync** (free trial / cheap) can export Fitbit → Google Fit → and on to a **Google Sheet** on a schedule. Or "Fitbit to Google Sheets" style tools.
- **From Fitbit directly (recommended, fully hands-off):** a **Google Apps Script** using the Fitbit Web API writes your daily sleep/steps/resting-HR into a Sheet each morning. **It's written and ready** in `integrations/fitbit-to-sheets/` (script + step-by-step README) — free Google + free Fitbit account, iPhone fine, ~15-min one-time setup on your PC.
- **Simplest of all:** a Sheet with columns `Date | Sleep (h) | Steps | Resting HR | Notes` that you (or an automation) fill in.

Then tell Claude the Sheet's name. The nudges will read the latest row and react to it — no more being asked for numbers you've already tracked.

### What the controller does with the data
- **Sleep < ~6h or a bad night** → tomorrow's movement drops to walk/rest, wake time held (don't compound it by sleeping in), gentler tone.
- **Steps trending low** → walk gets pushed harder on non-gym days.
- **Resting HR creeping up / poor recovery** → flag a rest day before a slip becomes an injury or a burnout.
- **Good streak of sleep + steps** → green light to add the optional 4th gym session or a run.

## Strava (optional, separate)
Your Fitbit **workouts** auto-sync to Strava, and there **is** a Strava connector. Connecting it (via claude.ai → Connectors) would let Claude read your runs/sessions automatically — but note Strava carries workouts only, **not** sleep/steps/resting-HR. Nice-to-have for training load; not a substitute for Option A or B.
