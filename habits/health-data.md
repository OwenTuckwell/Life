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

### The numbers Owen sends (Fitbit + nutrition from MacroFactor)
The FitForge check-in captures Fitbit's **Readiness**, **Sleep score**, **Sleep time**, **Steps**, **Resting HR** (sleep/scores = last night; steps = today), plus **nutrition** he copies from MacroFactor (calories + protein/carbs/fat, with his targets). A pasted "Copy my day" looks like:
`Fitbit: Readiness 72 · Sleep score 84 · Sleep 7h 32m · 9200 steps · Resting HR 56`
`Nutrition: 1650/2000 kcal · P160/180 C150 F55 (actual/target)`

### What the controller does with them
- **Low Readiness (<~40) or bad Sleep score / short sleep** → tomorrow's movement drops to walk/rest (even flex a non-fixed day off), wake time still held at 07:00 (don't compound it by sleeping in), gentler tone.
- **High Readiness (>~75) + good sleep** → green light to push — the extra gym session, a run, or a harder effort.
- **Nutrition — the biggest lever for "looking good" after training.**
  - **Protein under target** (e.g. P130 vs P180) → flag it warmly: protein is what turns the gym work into a better-looking body; nudge an easy add (extra chicken/Greek yogurt/whey). This is the main nutrition thing to watch.
  - **Calories well over target for several days** → gently note the deficit's slipping (leaning out needs a small deficit); **well under** for days → flag under-fuelling (kills gym performance and recovery). Don't police single days — look at the trend, and defer the actual numbers to MacroFactor (it sets his targets).
  - Never meal-plan or count for him — MacroFactor does that. Just reinforce protein + roughly hitting his target.
- **Resting HR creeping up over several days** → flag recovery before a slip becomes injury or burnout.
- **Steps** — a *loose* activity gauge, **not a target to chase for Owen**. His football + gym + golf already cover activity, so don't nag a step number; only note it if a work-day stretch (Mon–Wed desk days) is genuinely sedentary — then a walk is a nice-to-have, not a rule.
- On **gym days (Thu/Fri fixed)** the workout stays, but Readiness can dial the *intensity* (leave more in the tank on a low-Readiness morning).

## Strava (optional, separate)
Your Fitbit **workouts** auto-sync to Strava, and there **is** a Strava connector. Connecting it (via claude.ai → Connectors) would let Claude read your runs/sessions automatically — but note Strava carries workouts only, **not** sleep/steps/resting-HR. Nice-to-have for training load; not a substitute for Option A or B.
