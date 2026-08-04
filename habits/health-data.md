# Health data — Fitbit, sleep, steps

**The honest situation:** there is currently **no connector** that lets Claude read Fitbit or Google Health/Google Fit directly. Fitbit syncing into Google Health doesn't change that — Google exposes Calendar, Drive, and Gmail to Claude, but **not** its fitness data. So sleep, steps, and resting heart rate can't flow in automatically on their own.

There are two working ways to get the data in. Use either or both.

## Option A — Manual (works today, zero setup)
The **22:00 nightly check-in** asks how you slept and roughly your steps. You reply with the numbers (typed, or from the FitForge check-in); Claude logs them into `progress/log.md` and uses them to shape tomorrow (bad sleep → gentler morning; low steps → walk emphasis). Simple, honest, doubles as the accountability check. Default until the bridge is set up.

## Option B — Fitbit → Google Sheet → real numbers (recommended)
Get the **real** sleep/steps instead of a guess. The chain: **Fitbit → a Google Sheet → into the check-in.**

- **Build the pipe:** the **Google Apps Script** in `integrations/fitbit-to-sheets/` pulls your sleep/steps/resting-HR into a Sheet each **evening** (so it holds last night's sleep + today's steps at check-in time). Free Google + free Fitbit account, iPhone fine, ~15-min one-time PC setup. (Android alternative: the **Health Sync** app can export Fitbit → Sheet instead.)
- **How the real numbers reach the check-in:** publish the Sheet as CSV and paste the link into **FitForge → Settings**. The app's Today page then **auto-fills** sleep + steps from the latest row, and **"Copy my day"** sends those real numbers to the 22:00 coach in one tap. That's the automated real-data path.
- **Note on the automated night nudge:** the scheduled 22:00 session runs *without connectors*, so it can't read the Sheet by itself — the app auto-fill + paste is what carries the real numbers in. (When you're chatting with Claude directly in a normal session, Claude **can** read the Sheet via the Google Drive connector — just tell it the Sheet's name.)

### What the controller does with the data
- **Sleep < ~6h or a bad night** → tomorrow's movement drops to walk/rest, wake time held (don't compound it by sleeping in), gentler tone.
- **Steps trending low** → walk gets pushed harder on non-gym days.
- **Resting HR creeping up / poor recovery** → flag a rest day before a slip becomes an injury or a burnout.
- **Good streak of sleep + steps** → green light to add the optional 4th gym session or a run.

## Strava (optional, separate)
Your Fitbit **workouts** auto-sync to Strava, and there **is** a Strava connector. Connecting it (via claude.ai → Connectors) would let Claude read your runs/sessions automatically — but note Strava carries workouts only, **not** sleep/steps/resting-HR. Nice-to-have for training load; not a substitute for Option A or B.
