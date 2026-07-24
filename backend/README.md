# LaunchOps demo API

This FastAPI service reuses the M00 administration foundation from
`Amine-te/launch_system` and adds only the operational records needed by the
current Launch Engineer, Launch Manager, Warehouse Team Leader, and System
Administrator UI.

## Run locally

```powershell
python -m pip install -r backend/requirements.txt
npm run api
```

Run the UI in a second terminal:

```powershell
npm run dev
```

The browser API client calls `http://127.0.0.1:8000` during local development.
SQLite data is created at
`backend/launch_system_demo.db`; uploaded PDFs are stored under
`backend/uploads/`.

## Demo roles

The current prototype sends `X-Demo-Role` from its role switcher:

- `engineer`: creates launch instructions and validates signed reception.
- `manager`: reads every project and may change only assigned projects.
- `wh_lead`: consumes a delivery code, selects the receiver, generates the
  transfer document, and uploads signed reception.
- `admin`: reads the backend status summary shown in System Administration.

System Administration uses `/auth` signed-cookie sessions and `/admin`
authorization. Operational creation derives material requirements from the
latest BOM version in the database; client-submitted material quantities are
not authoritative.
