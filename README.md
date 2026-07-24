# LaunchOps PO Control Center

Role-based Vite and FastAPI prototype for project governance, purchase-order
control, BOM-based launch planning, warehouse transfers, stock, and system
administration.

## Run locally

```powershell
npm install
npm run api
```

Run the UI in a second terminal:

```powershell
npm run dev
```

Create a production build with `npm run build`.

Run the backend tests with:

```powershell
$env:PYTHONPATH='backend'
python -m pytest backend/tests -q
```

## Structure

- `index.html`: persistent application shell only.
- `src/main.js`: frontend entry point.
- `src/app`: router, shared state, navigation, and application startup.
- `src/api`: FastAPI request wrappers.
- `src/layout`: sidebar and top bar.
- `src/components`: small shared HTML and UI helpers.
- `src/features`: one folder per business area; each page exports `render` and
  `mount`.
- `src/styles`: tokens, base rules, layout, components, and feature styles.
- `backend/app/routers`: request and response coordination.
- `backend/app/services`: business constraints and persistence operations.
- `backend/app/models`: SQLAlchemy records.
- `backend/tests`: API-level workflow and constraint tests.

Feature modules may import API and component modules. They do not import other
feature pages. The app layer owns routing, loading shared data, and page
lifecycle.

The operational role switch still uses the `X-Demo-Role` header so the demo can
be evaluated without separate logins. System Administration uses the signed
session endpoints. Replace the demo role header with authenticated role claims
before production use.

The supplied product requirements are retained in [`SRS_Launch_System_v2-bis.md`](./SRS_Launch_System_v2-bis.md).
