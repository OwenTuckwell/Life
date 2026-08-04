# Life OS — your controller

Not a repo you have to remember to open. A **controller** that runs your day: it wakes itself on a schedule, checks your live calendar and how the last few days went, decides what you need, and **pushes it to your phone** — a plan every night, nudges through the day, and a check-in that keeps it all honest.

## The one idea that makes this work

You don't rise to the level of your goals. You fall to the level of your systems.
Impressive people aren't more disciplined than you — they've removed the daily decision. The plan decides; they execute. This repo *is* that plan, and now it runs itself so the decision is already made before you wake up.

## How it actually runs (start here)

**`system/how-it-works.md`** — the engine: the scheduled triggers, what fires when, and how to change any of it. Read that first. The short version:

- **Two messages every night** — **22:00** (tomorrow's plan + "how did today go?") and **22:30** (wind-down lock, lights out by 23:00). Spec: `system/nightly.md`.
- **Nudges through the day** — 07:00 wake brief, leave-for-work / leave-for-gym / leave-for-golf / leave-for-Dad's, each reading your live calendar so one-offs beat the routine. Spec: `system/daytime.md`.
- **It adapts** — gym days are fixed (Thu/Sat/Sun); everything else (walk / run / rest) is decided each night off your load and how you're doing. Not the same routine on repeat.

## The repo, at a glance

| Folder / file | What it's for |
|--------|-----------------|
| `system/` | **The controller's brain** — the logic each trigger runs. Edit these to change what the nudges say or decide. |
| `goals/` | North star + the current 90-day targets |
| `habits/` | Weekly schedule, morning routine, the tracker, and `health-data.md` (Fitbit/sleep/steps) |
| `fitness/` | Training plan (gym A/B) + nutrition reference |
| `progress/log.md` | **The memory** — every night's check-in lands here; tomorrow's brief reads it back |
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
