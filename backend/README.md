# LaunchOps demo API

This FastAPI service reuses the M00 administration foundation from
`Amine-te/launch_system` and adds only the operational records needed by the
current Launch Engineer and Warehouse Team Leader UI.

## Run locally

```powershell
python -m pip install -r backend/requirements.txt
npm run api
```

Run the UI in a second terminal:

```powershell
npm run dev
```

The UI proxies `/api` to `http://127.0.0.1:8000`. SQLite data is created at
`backend/launch_system_demo.db`; uploaded PDFs are stored under
`backend/uploads/`.

## Demo roles

The current prototype sends `X-Demo-Role` from its role switcher:

- `engineer`: creates launch instructions and validates signed reception.
- `wh_lead`: consumes a delivery code, selects the receiver, generates the
  transfer document, and uploads signed reception.
- `admin`: reads the backend status summary shown in Super Admin.

The imported M00 authentication and administration routes remain available for
future production wiring. The current UI remains the only frontend.
