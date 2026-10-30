# LUMINOUS 10.0 — Setup Instructions

## 1. Prerequisites

- Node.js 20 or newer
- npm
- A Supabase project for registrations and payment screenshots
- Optional: a Google Sheet and Google Apps Script deployment for the volunteer registration mirror

## 2. Install the project

```bash
npm install
```

## 3. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

# Recommended for the server-side registration function
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Optional Google Sheets mirror
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
GOOGLE_SHEETS_WEBHOOK_SECRET=the-same-secret-used-in-apps-script
```

Never expose `SUPABASE_SERVICE_ROLE_KEY` in browser code or commit `.env` to Git.

## 4. Configure Supabase

1. Create a Supabase project.
2. Open **SQL Editor → New query**.
3. Copy and run [supabase-migration.sql](./supabase-migration.sql).

The migration creates:

- `luminous_registrations` for team and member information
- A private `payment-screenshots` Storage bucket
- Storage policies for screenshot uploads and authenticated reads
- Row-level security policies for registration records

The actual screenshot is stored in Supabase Storage. The database stores its path in `payment_screenshot_path`.

## 5. Configure Google Sheets syncing (optional)

1. Create a Google Sheet.
2. Open **Extensions → Apps Script**.
3. Copy the contents of [scripts/google-sheets-webhook.gs](./scripts/google-sheets-webhook.gs).
4. Replace `REPLACE_WITH_A_LONG_RANDOM_SECRET` with a long random secret.
5. Deploy it as a **Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Copy the deployment URL into `GOOGLE_SHEETS_WEBHOOK_URL`.
7. Put the same secret into `GOOGLE_SHEETS_WEBHOOK_SECRET`.
8. Restart or redeploy the application.

The Apps Script automatically creates a `Registrations` tab and appends new registrations with a `Pending` status. Supabase remains the source of truth if Google Sheets is unavailable.

## 6. Run locally

Start the development server:

```bash
npm run dev
```

Open the URL printed by Vite, normally:

```text
http://localhost:5173
```

## 7. Verify the project

Run the production build:

```bash
npm run build
```

Run automated tests:

```bash
npm run test
```

Run the linter:

```bash
npm run lint
```

## 8. Test a registration

1. Open `/register`.
2. Complete the team details.
3. Upload a PNG, JPG, or WebP payment screenshot up to 5 MB.
4. Submit the registration.
5. Verify the row in Supabase → **Table Editor → `luminous_registrations`**.
6. Verify the screenshot in Supabase → **Storage → `payment-screenshots`**.
7. If Google Sheets sync is configured, verify the new row in the `Registrations` tab.

## 9. Useful project commands

```bash
npm run dev       # Development server
npm run build     # Production build
npm run preview   # Preview the production build
npm run test      # Run tests once
npm run lint      # Run ESLint
npm run format    # Format source files with Prettier
```
