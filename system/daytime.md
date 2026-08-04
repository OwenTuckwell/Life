# Daytime control — wake, leave nudges, "coming up"

The nightly two messages set the plan; these keep him on it through the day. Each is a fresh session that reads the repo first (so a one-off early start or a moved tee time is always respected over the default).

There's no live calendar — the system runs on **the repo + reasoning + git as memory**. Every nudge: **read `system/one-offs.md` and the latest `progress/log.md` entry first**, and let anything there override today's default. Push it short — a phone nudge is one glanceable line.

---

## 07:00 — Wake brief (daily)
The first thing he sees. Gather: `system/one-offs.md` for anything different about today, the latest `progress/log.md` entry (what last night's 22:00 brief set for today's movement, plus any live "never miss twice" flag).

Message:
- "☀️ Up — no snooze. Big glass of water, curtains open."
- **Today's movement** (the call made last night: walk / run / gym A|B).
- **Today's shape in one line:** the anchors (work + leave time / gym / golf / Dad's / ref).
- If a **never-miss-twice flag** is live from yesterday's miss → one line making today's version non-negotiable.
- On **work days**, remember the morning timeline lives in `habits/morning-routine.md` (7:00 up → walk → shower → porridge → dress/pack → leave). Point at it, don't recite the whole thing.

## 08:25 — Leave for work (Mon / Tue / Wed)
Check `system/one-offs.md` for a one-off earlier start first. Default message: "🚗 Leave for work now — 30-min drive, 09:00 start. Phone/keys/wallet." If a one-off sets an earlier start, the **07:00 brief and this nudge both shift** — the 22:00 brief the night before will have already flagged it.

## 08:40 — Leave for gym (Thu / Fri)
Gym is 09:00, ~15-min drive. **Thursday AND Friday are both fixed gym days** — they don't move, and golf works around them (never drop the Friday gym for golf). Message: "🏋️ Leave for the gym — Workout [A/B] today. Water, pre-gym snack, let's go." Name the workout (from the A/B alternation — check the last gym entry). Weekend gym (Sat/Sun with no football) isn't a fixed nudge — the nightly brief gives that leave time.

## 16:55 — Leave for golf (Wed, weather permitting)
9 holes with his brother, 17:30, ~20-min drive. Check `system/one-offs.md`: if golf's washed out / not on this week, skip or soften. Otherwise: "⛳ Leave for golf — 9 holes, 17:30 tee. Clubs in the car."

## 16:40 — Leave for Dad's (Thu)
Dinner, round ~17:00, ~20-min drive. "🍽️ Leave for Dad's — dinner ~17:00." Note: on the odd week this clashes with his girlfriend's plans — if `system/one-offs.md` logs that, the one-off wins, so soften to a question or skip.

---

## Variable events (handled via `system/one-offs.md`, not a fixed trigger)
- **Football (Sat &/or Sun)** — game time varies weekly and depends on weather. Once Owen logs the game(s), the nightly brief gives the leave time and makes that day football; a weekend day with **no** game becomes a gym session. Football counts as real activity (legs + cardio).
- **Fri 18-hole golf** — weather permitting, and **around** the fixed Friday gym (after it, or another day) — golf never replaces the gym. When Owen says golf's on (and the tee time), it goes in `one-offs.md` and the brief gives the leave time (tee − 35 min: 20 travel + 15 buffer). Big steps day → no separate run.
- **Extra/3rd gym session** — on tight weeks the nightly brief may slot an after-work (or occasionally before-work) session; when it does, it tells Owen the time in the brief. Not a standing trigger.
- **Anything new** — a meeting, appointment, day off, travel, wash-out: Owen tells Claude, it lands in `one-offs.md`, and the next relevant nudge picks it up. No trigger editing needed.

## The "something's coming up" principle
These triggers are the fixed skeleton. The *intelligence* is that each fresh session reads `one-offs.md` + the logs and reasons about them, so the system reacts to a changing week instead of replaying a static routine — the exceptions come from Owen telling Claude, not from a calendar feed. If a genuinely new **fixed** commitment appears (new job hours, a class, a standing appointment), add a trigger for it — tell Claude and it wires one in.
