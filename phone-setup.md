# iPhone Setup (iPhone 16 Pro / iOS 18)

Honest scope: Claude can't directly control your phone (Apple sandboxes that). But between Claude's push notifications, your Google Calendar, and Apple's built-in Shortcuts/Focus, you can get most of the "AI runs my phone" feel. Below is everything, tap by tap. ~10–15 min total.

## 1. Get your schedule ON your home screen (the big daily view)
Your whole week already lives in Google Calendar. Two steps:

**a) Make your Google Calendar show on the iPhone:**
- Settings → Apps → Calendar → Calendar Accounts → Add Account → Google → sign in as owentuckwell25@gmail.com → turn Calendars ON.
- (Or just install the **Google Calendar** app from the App Store and sign in — its widgets are great too.)

**b) Add the widget:**
- Long-press the home screen → tap **+** (top-left) → search **Calendar** (Apple) or **Google Calendar**.
- Pick the **large** widget (the one that lists the day's events) → Add Widget → place it top of your main home screen.
- Now today's plan — morning routine, work, gym, golf, wind-down — is the first thing you see.

**Bonus — Lock Screen + StandBy:**
- Lock Screen: long-press lock screen → Customise → add a Calendar widget under the clock.
- StandBy: when charging on its side (e.g. bedside), iPhone shows tomorrow's calendar automatically. Great for the night-before glance.

## 2. Claude's push notifications (already live — nothing to do)
- 07:15 morning brief · 22:30 daily log nudge · Sunday 10:00 weekly review.
- Make sure notifications are allowed for the Claude app so these buzz through.

## 3. Apple Shortcuts automations (the "phone runs itself" bit)
Open the **Shortcuts** app → **Automation** tab → **+** → **Create Personal Automation**. Build these:

**Morning kick (07:00, daily):**
- Trigger: Time of Day → 07:00 → Daily → Run Immediately (turn off "Ask Before Running").
- Actions: Show a checklist note / open your Life repo / play a short hype track. Simplest version: "Show Notification" → text: "Breakfast oats. Protein. Skincare + stand tall. 10k steps. Let's go."

**Wind-down (22:45, daily):**
- Trigger: Time of Day → 22:45 → Daily → Run Immediately.
- Actions: Turn on **Sleep Focus** (or Do Not Disturb) + Set Low Power / dim + "Show Notification": "Lights out at 23:00. Protect the sleep. Never miss twice."

**Gym Focus (Thu/Sat/Sun 09:00):**
- Trigger: Time of Day → 09:00 (set one per day, or a calendar-based trigger).
- Action: Turn on a **Gym** Focus mode that silences everything but plays your gym playlist.

## 4. Focus modes (Settings → Focus)
- **Sleep** — auto-on with the wind-down automation; silences notifications overnight.
- **Work** — Mon–Wed 09:00–17:00, hides distractions.
- **Gym** — quick manual toggle or automated; only music + timer.

## Ready-made Shortcut recipes (detailed, tap by tap)

### Recipe A — "Morning Kick" (07:00 daily)
1. Shortcuts app → **Automation** → **+** → **Create Personal Automation**.
2. **Time of Day** → 7:00 AM → **Daily** → Next.
3. **Run Immediately** (so it doesn't ask permission each time).
4. Add actions (tap "New Blank Automation" → Add Action):
   - **Calendar → Get Upcoming Events** (Calendar: your Google cal, Count: 6) → then **Show Result**. (Pops today's plan on screen.)
   - **Scripting → Show Notification**: "☀️ Day's on. Protein oats + coffee. Skincare + stand tall. Fill the water bottle. Let's go."
   - *(Optional hype)* **Play Music** → a pumped-up track/playlist.
5. Done.

### Recipe B — "Wind-Down" (22:45 daily)
1. Automation → **+** → Time of Day → 10:45 PM → Daily → **Run Immediately**.
2. Actions:
   - **Set Focus** → **Sleep** → On.
   - **Set Low Power Mode** → On *(optional; dims things down)*.
   - **Set Brightness** → ~20%.
   - **Show Notification**: "🌙 Wind down. Lights out at 23:00. Phone on charge, out of reach. Never miss twice."
3. Done. (Set a matching alarm/Sleep schedule in the Clock app for the actual wake.)

### Recipe C — "Gym Mode" (location-based, best option)
Instead of a time, trigger on arriving at the gym:
1. Automation → **+** → **Arrive** → choose your gym's location.
2. Actions:
   - **Set Focus** → a **Gym** focus (create one in Settings → Focus: allows only music + timer) → On.
   - **Play Music** → gym playlist.
3. Add a second automation: **Leave** that location → turn the Gym focus **Off**.

## Granular calendar plan (wake / leave-home / to-the-minute)
Travel times (door-to-door): gym 15 min · Wed golf 20 min · Dad's 20 min · Fri golf 20 min.
Precise nudges (5-min events with a popup at the start time), recurring weekly:
- **07:00 — ☀️ Wake** (popup reminder on the Morning routine event).
- **08:25 — 🚗 Leave for work** — Mon/Tue/Wed (30-min drive → 09:00 start).
- **08:40 — 🚗 Leave for gym** — Thu/Sat/Sun (15 min → arrive ~08:55 for 09:00).
- **16:55 — 🚗 Leave for golf** — Wed (20 min → arrive ~17:15 for 17:30 tee).
- **16:40 — 🚗 Leave for Dad's** — Thu (20 min → arrive 17:00).
- **Fri — 🚗 Leave for golf** — added each week: tee time − 35 min (20 travel + 15 buffer).

## What this gets you
- Home screen = today's plan, always visible.
- Phone nudges you at the right moments (Claude pushes + Shortcuts).
- Distractions muted when you're working, training, or sleeping.
- Night-before and morning-of glance handled automatically.

## What Claude still can't do (straight, no fluff)
- Install apps, add widgets, or build the Shortcuts *for* you — you tap those in once (guide above).
- Run silently in the background on the phone itself.
- Read your screen or control other apps.
Everything Claude does reach you through: push notifications, your Google Calendar, and this repo.
