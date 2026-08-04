# Daytime control — wake, leave nudges, "coming up"

The nightly two messages set the plan; these keep him on it through the day. Each is a fresh session that checks the calendar first (so a one-off early start or a moved tee time is always respected over the default).

Every nudge: **check Google Calendar for today** before sending, so one-offs beat the default. Push it short — a phone nudge is one glanceable line.

---

## 07:00 — Wake brief (daily)
The first thing he sees. Gather: today on the calendar, tomorrow's-plan entry (what the 22:00 brief set for today's movement), `progress/log.md` for any live "never miss twice" flag.

Message:
- "☀️ Up — no snooze. Big glass of water, curtains open."
- **Today's movement** (the call made last night: walk / run / gym A|B).
- **Today's shape in one line:** the anchors (work + leave time / gym / golf / Dad's / ref).
- If a **never-miss-twice flag** is live from yesterday's miss → one line making today's version non-negotiable.
- On **work days**, remember the morning timeline lives in `habits/morning-routine.md` (7:00 up → walk → shower → porridge → dress/pack → leave). Point at it, don't recite the whole thing.

## 08:25 — Leave for work (Mon / Tue / Wed)
Check calendar for a one-off earlier start first. Default message: "🚗 Leave for work now — 30-min drive, 09:00 start. Phone/keys/wallet." If the calendar says an earlier start, the **07:00 brief and this nudge both shift** — flag it the night before.

## 08:40 — Leave for gym (Thu / Sat / Sun)
Gym is 09:00, ~15-min drive. Message: "🏋️ Leave for the gym — Workout [A/B] today. Water, pre-gym snack, let's go." Name the workout (from the A/B rotation). If a weekend ref game clashes that morning, the nightly brief will already have flexed gym to the free half of the day — respect what the calendar/plan says over the default 08:40.

## 16:55 — Leave for golf (Wed)
9 holes with his brother, 17:30, ~20-min drive. "⛳ Leave for golf — 9 holes, 17:30 tee. Clubs in the car."

## 16:40 — Leave for Dad's (Thu)
Dinner, round ~17:00, ~20-min drive. "🍽️ Leave for Dad's — dinner ~17:00." Note: on the odd week this clashes with his girlfriend's plans, the calendar wins — check it.

---

## Variable events (handled by the nightly brief, not a fixed trigger)
- **Fri 18-hole golf** — tee time varies. The **22:00 Thursday brief** reads Friday's tee time off the calendar and gives the leave time (tee − 35 min: 20 travel + 15 buffer). Big steps day → no separate run.
- **Weekend ref game** — time varies weekly. The nightly brief slots gym into the free half of that day and gives the leave time once the game's on the calendar.
- **Anything new on the calendar** — every nudge checks the calendar live, so a meeting, appointment, or event added during the week gets surfaced at the next relevant touchpoint without anyone editing a trigger.

## The "something's coming up" principle
These triggers are the fixed skeleton. The *intelligence* is that each fresh session reads the live calendar, so the system reacts to a changing week instead of replaying a static routine. If a genuinely new fixed commitment appears (new job hours, a class, standing appointment), add a trigger for it — tell Claude and it wires one in.
