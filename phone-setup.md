# Phone setup — the one thing that matters

The controller does the work now (see `system/how-it-works.md`). Almost all of it runs on its own. There's really **one** thing you need to do on your phone, and then some optional backup.

## ✅ Required: connect the Claude mobile app (5 min)
This is how every nudge reaches you.

1. Install the **Claude** app (iOS App Store / Google Play).
2. Sign in with the **same account** you use here (owenwin22@outlook.com).
3. Open **Settings → Notifications** in the app → allow notifications. On the phone, also allow Claude in the OS notification settings (and don't let a Focus/Do-Not-Disturb mode silence it — or add Claude as an allowed app in your Sleep Focus so the 07:00 brief still lands).

That's the whole requirement. Once notifications are on, the 22:00 / 22:30 messages and the daytime leave-nudges push straight to your phone. Tap one to reply (that's how the nightly check-in gets logged).

> If a nudge ever doesn't arrive, 95% of the time it's OS notification permissions or a Focus mode eating it. Check those first.

## 🔗 Recommended: tell the controller about exceptions
There's no live calendar link — the controller runs on the repo + reasoning. So whenever something breaks the normal week, **just message Claude** and it logs it in `system/one-offs.md`, which every nudge reads:
- "Early start Tuesday, leaving at 8" · "Golf's at 2pm Friday" · "Away this weekend" · "Ref game 10am Saturday" · "At my girlfriend's Thursday, not Dad's".
- Friday's golf tee time and each weekend's ref game — tell Claude when you know them and the nightly brief turns them into leave-times automatically.
- The standard week (work, gym, golf, Dad's) is already built in — you only ever need to flag the *exceptions*.

## 🧩 Optional backup (only if you want belt-and-braces)
The controller replaces the need for these, but they're nice as a fail-safe:
- **A single Clock alarm at 07:00** ("☀️ Up — water, curtains") in case a push ever misses. One alarm, not the old wall of them.
- **Sleep Focus 23:00 → 07:00** (Settings → Focus → Sleep) to actually silence the world overnight — just allow Claude through it.
- **Screen Time → Downtime 23:00 → 09:00** to hard-block the morning doomscroll (keep TikTok whitelisted if it's work; block the pure time-sinks).

## What Claude can and can't do (straight)
- **Can:** push you timed, plan-aware nudges; a nightly plan + check-in; log your days; adjust the plan or the schedule when you ask.
- **Can't:** control the phone directly (install apps, flip Focus modes, read your screen). Those few taps above are yours; everything after is automatic.
