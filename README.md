# Snag List Generator

Upload site photos → AI writes the snag description → your Excel template is filled (S.No, date, floor, elevation, area, description, photo) → emailed to you. 100% free.

## Setup (about 10 minutes, once)

### 1. Put it on GitHub Pages
1. Create a GitHub repo (e.g. `snag-list`) and upload all files in this folder.
2. Repo **Settings → Pages → Branch: main / root → Save**.
3. Your app is live at `https://YOUR-USERNAME.github.io/snag-list/`.

### 2. Free AI key
Go to https://aistudio.google.com/apikey → **Create API key** (free tier, no card).

### 3. Free email sender
1. Go to https://script.google.com → **New project**.
2. Paste the contents of `apps-script/Code.gs`; change `SECRET` to your own code.
3. **Deploy → New deployment → Web app** → Execute as: **Me**, Who has access: **Anyone** → Deploy → authorise.
4. Copy the **Web app URL**.

### 4. On your phone
1. Open your GitHub Pages link → browser menu → **Add to Home Screen**.
2. Open **Setup**: paste Gemini key, Web app URL, secret code, project name, and upload your Excel template once → **Save**.

## Daily use
Set defaults (floor / elevation / area / date) → **Add photos** → **Generate & email Excel**.
Descriptions are editable before generating. Photos without a date use the photo's own date.

## Template rules
Put your column headings in one row, e.g. `S.No | Date | Floor | Elevation | Area | Description | Photo`.
The app finds them by name (Photo/Image, S.No, Date, Floor, Elevation, Area/Location, Description/Snag/Defect/Remarks).
Formatting of the first row under the heading is copied to every snag row. Extra sample rows below the heading are overwritten.

## Notes
- Your keys stay only in your phone's browser; the email always goes to the Google account that owns the script.
- Free Gemini limits are a few requests per minute, so the app spaces requests out; large batches take a little time.
- Change `MODEL` in `index.html` if Google retires the model name.
