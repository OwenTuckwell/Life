# Fitbit → Google Sheet (auto sleep / steps / resting HR)

Pipes your daily Fitbit numbers into a Google Sheet that the Life OS controller reads, so the nightly check-in stops having to ask you. **Free Google account + free Fitbit account. No premium. iPhone is fine** — your Fitbit app already syncs to Fitbit's cloud; the script (`Code.gs`) runs on Google's servers and reads from there. All setup below is done in a browser on your PC; once it's running you never touch it.

Budget ~15 minutes, one time.

## 1. Make the Google Sheet
1. Go to [sheets.new](https://sheets.new) — name it e.g. **"Fitbit data"**.
2. **Extensions → Apps Script**. This opens the script editor bound to that sheet.

## 2. Add the code
1. Delete the empty `myFunction` and paste in all of **`Code.gs`** from this folder.
2. Add the OAuth library: left sidebar **Libraries (+)** → Script ID
   `1B7FSrk5Zi6L1rSxxTDgDEUsPzlukDsi4KGuTMorsTQHhGBzBkMun4iDF` → Look up → pick the latest version → **Add**. (This is Google's official `apps-script-oauth2` library.)
3. Save (💾).

## 3. Register a free Fitbit app
1. Go to [dev.fitbit.com](https://dev.fitbit.com) → **Manage → Register an App** (sign in with your normal Fitbit account).
2. Fill in anything for name/description/URLs. The two that matter:
   - **OAuth 2.0 Application Type:** *Personal* (this is what unlocks sleep/HR data on a free account).
   - **Callback URL:** get it from the script — in Apps Script run the function **`logRedirectUri`** once (Run ▶), open **Execution log**, copy the URL it prints (looks like `https://script.google.com/macros/d/…/usercallback`), and paste it here.
3. Save. Copy your **OAuth 2.0 Client ID** and **Client Secret**.

## 4. Store your secrets (kept out of the code / git)
In Apps Script: **Project Settings (⚙️) → Script Properties → Add script property**, add two:
- `FITBIT_CLIENT_ID` = your Client ID
- `FITBIT_CLIENT_SECRET` = your Client Secret

(They live only in your private script — never in `Code.gs`, so nothing secret is ever committed here.)

## 5. Authorise once
1. Run the function **`authorize`** (Run ▶). Approve the Google permissions prompt the first time.
2. Open **Execution log**, click the Fitbit URL it prints, approve access.
3. Run **`updateFitbitSheet`** — check the sheet: a row for yesterday should appear (Date, Sleep h, Steps, Resting HR).

## 6. Make it daily
Apps Script left sidebar → **Triggers (⏰) → Add Trigger**:
- Function: `updateFitbitSheet`
- Event source: **Time-driven → Day timer → 7am–8am**.
Save. Done — a fresh row lands every morning.

## 7. Tell the controller
Message Claude the Sheet's name ("Fitbit data"). It reads the latest row via the Google Drive connector each night — bad sleep quietly softens the next morning, low steps pushes the walk, a good streak green-lights an extra session. Logic: `habits/health-data.md`.

## 8. Connect it to the FitForge app (auto-fill the Today page)
This makes your sleep/steps show up in the app and pre-fill the nightly check-in — no typing.

1. In the Fitbit Sheet: **File → Share → Publish to web**.
2. In the dialog: under **Link**, pick your **Fitbit** sheet (not "Entire document") and change the format from *Web page* to **Comma-separated values (.csv)**.
3. Click **Publish** → confirm → **copy the link** it gives you (ends in `output=csv`).
   - *Note:* "Publish to web" makes only that sheet's rows public via the link (the link is unguessable, but treat it as shareable). It's separate from the sheet's normal private sharing.
4. Open **FitForge → Settings → "Fitbit auto-fill" → paste the link → Save link**.
5. Go to **Today** — the Fitbit panel now shows your latest sleep, steps and resting HR, and the check-in's sleep/steps fields pre-fill from it.

If it doesn't load: the link must be the **CSV** one (not a normal share link), the sheet tab must be named/selected correctly, and the column headers should include *Date, Sleep, Steps, Resting HR* (the app matches on those words). No link, or a private one, just means you type the numbers in by hand — nothing breaks.

## If something breaks
- **No data / 401 in the log** → re-run `authorize` (token expired or scope changed). `reset` clears the auth to start fresh.
- **403 on sleep/HR** → the Fitbit app type isn't *Personal*; fix it at dev.fitbit.com.
- **Wrong day** → the script pulls *yesterday* on purpose (a day's data is only complete the next morning); keep the trigger in the morning.
