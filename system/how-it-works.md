# How the controller works (read this first)

This repo used to be a set of files *you* maintained, plus a couple of fixed push times. It's now an **active controller**: it wakes itself up on a schedule, reads your plan + recent logs + any logged exceptions, decides what you need *right now*, and pushes it to your phone. Same repo, but it runs the day instead of just describing it. There's no live calendar feed — it runs on **the repo + reasoning, with git as the memory.**

## The engine
Behind the scenes there are **scheduled triggers** (Anthropic "Routines"). Each one fires at a set time, spins up a fresh Claude session, and that session:
1. Reads the relevant spec file in `system/` (the logic below).
2. Reads `system/one-offs.md` for anything unusual about today/tomorrow (early starts, golf tee times, ref games, days off) — these override the default week.
3. Reads recent entries in `progress/log.md` (how the last few days actually went).
4. Reads `habits/health-data.md` for any sleep/steps data available.
5. Decides the message, **pushes it to your phone**, and — for the nightly check-in — logs your reply back into the repo.

Because every fire reads and writes the repo, **the repo is the memory.** No single session has to stay alive; the git history is the continuity.

## The live schedule (all times Europe/London)
The **FitForge app now carries the day** — plan, checklist, logging, check-in. So the push notifications are stripped back to just **two**:

| Local | Days | Trigger | Spec |
|-------|------|---------|------|
| 07:00 | daily | Morning encouragement (a short lift) | prompt only |
| 23:00 | daily | Check-in — "how did today go?" + tomorrow's movement | `system/nightly.md` |

That's it. The old daytime leave-nudges (work/gym/golf/Dad's) and the separate wind-down were retired — Owen didn't need the noise once the app was doing the carrying. (`system/daytime.md` is kept for reference only; nothing fires from it.)

Variable events (a football game time, golf, an early start) aren't triggers — tell Claude and they go in `system/one-offs.md`; the **23:00 check-in** reads them when setting tomorrow.

## How to change it (this is the point)
- **Change *what a nudge says* or the decision logic** → edit the spec file (`system/nightly.md`, `system/daytime.md`). The triggers read these each time they fire, so an edit takes effect the same day.
- **Change *when* a nudge fires, or add/remove one** → tell Claude "add a nudge at X" / "move the wake brief to 06:45" and it edits the trigger itself. (These live outside the repo, in your Routines.)
- **One-off changes** ("early start tomorrow", "golf's at 14:00 Friday") → just tell Claude; it logs them in `system/one-offs.md` and the nightly/wake brief picks them up automatically.

## ⚠️ Clocks (DST)
The triggers are stored in UTC. Right now it's **British Summer Time (UTC+1)**, so each UTC time is set one hour behind the local time above. **When the clocks go back on Sun 26 Oct 2026**, every trigger will start firing one hour early unless shifted +1h. There's a one-off reminder set for ~25 Oct to do this. If a nudge ever arrives an hour off, that's why — tell Claude "fix the clocks" and it'll re-align them.

## What still needs your phone (one time)
The pushes reach you through the **Claude mobile app**. Install it, sign in as the same account, allow notifications. That's the whole setup — see `phone-setup.md`. Everything else (alarms, Shortcuts, calendar widgets) is now optional backup, not required.
