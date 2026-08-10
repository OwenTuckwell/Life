# My Fitness Coach

A coach for your **training, food, sleep and recovery** — not your whole life, just the part that makes you fitter, stronger and better put-together. It plans your gym, adapts to how you're actually doing (Fitbit recovery, how you slept, how the week's going), keeps you honest, and gets out of the way. The **FitForge app** is where you live it day to day; this repo is the coach's brain and memory.

## The one idea that makes this work

You don't rise to the level of your goals. You fall to the level of your systems.
Fit, disciplined people haven't got more willpower than you — they've removed the daily decision. The plan decides; they execute. This is that plan: it hands you each day's training already decided, so there's nothing to argue yourself out of.

## How it actually runs (start here)

**`system/how-it-works.md`** — the engine and how to change any of it. The short version:

- **The app carries the day** — FitForge (on your phone): today's plan, the checklist, gym/walk/run logging, your Fitbit + nutrition numbers, and a nightly check-in you fill in whenever you want.
- **The coach adapts the training** — a 3-workout rotation (A Legs / B Push / C Pull), legs on Thursday, upper harder; the weekend flexes around football; recovery and Readiness steer intensity. Spec: `fitness/starter-plan.md` + `system/nightly.md`.
- **Notifications are optional** — currently off (the habits are yours now). A morning lift, a nightly check-in and a weekly review can be switched back on any time — just ask.

## The repo, at a glance

| Folder / file | What it's for |
|--------|-----------------|
| `system/` | **The controller's brain** — the logic each trigger runs. Edit these to change what the nudges say or decide. |
| `goals/` | North star + the current 90-day targets |
| `habits/` | Weekly schedule, morning routine, the tracker, and `health-data.md` (Fitbit/sleep/steps) |
| `fitness/` | Training plan (gym A/B) + nutrition reference |
| `progress/log.md` | **The memory** — every night's check-in lands here; tomorrow's brief reads it back |
| `app/` | **FitForge** — the phone app (Netlify): Today hub, morning checklist, walk/run/gym logging, Fitbit panel, and "Copy my day" → the controller. See `app/README.md` |
| `reviews/` | The Sunday weekly review |

## The loop

1. **Live it** — the controller pushes; you execute. No opening files required.
2. **Reply at night** — tell it how the day went; it logs it and shapes tomorrow.
3. **Redirect any time** — "early start tomorrow", "move my wake to 6:45", "golf's at 2pm Friday". It adjusts the plan or the triggers.
4. **Sunday** — 10 min with `reviews/weekly-review-template.md`.
5. **Every ~90 days** — new targets in `goals/`.

## One-time phone setup
The pushes reach you through the **Claude mobile app** — install it, sign in, allow notifications. That's it. See `phone-setup.md`. (The old iPhone alarms/Shortcuts are now optional backup, not the system.)

## Health data (Fitbit)
There's no direct Fitbit/Google Health connector, but the nightly check-in asks for your sleep/steps, and you can pipe Fitbit into a Google Sheet the controller reads automatically. Details + setup: `habits/health-data.md`.

## The rules

- **Start embarrassingly small.** A habit you'll actually do beats a perfect plan you won't.
- **Consistency over intensity.** 80% every day beats 100% twice a week then burnout.
- **Never miss twice.** Missing once is life. Missing twice starts a worse habit. Never skip two in a row.
- **The check-in is the intervention.** For a consistency problem, reporting the day beats any workout. Reply at night even when you missed — *especially* then.

---
*Built with, and run by, Claude. Talk to me any time — I'll keep this current and adjust the controller on the fly.*
