# Backend (FastAPI + SQLAlchemy)

This is the backend API for **Job Apply**.

## What this service does
- Starts a FastAPI server
- Connects to a database using `DATABASE_URL`
- Creates tables on startup (`Base.metadata.create_all`)
- Provides endpoints used by the React frontend
- Exposes admin endpoints to view stored applications + resume links

---

## Quick start (local)
### 1) Create Python virtual environment
```bash
cd Backend
python -m venv venv
venv\Scripts\activate
```

### 2) Install dependencies
```bash
pip install -r requirements.txt
```

### 3) Configure environment
Create `Backend/.env`:
```env
DATABASE_URL=your_sqlalchemy_connection_string
```

Example (Postgres):
```env
DATABASE_URL=postgresql+psycopg2://USER:PASSWORD@HOST:5432/DBNAME
```

> `Backend/database.py` loads this file via `python-dotenv`.

### 4) Run the server
```bash
uvicorn main:app --reload --port 8000
```

Backend health check:
- `GET http://localhost:8000/` (returns `{ "status": "API running" }`)

---

## Required packages (from `requirements.txt`)
Backend dependencies include:
- `fastapi`
- `uvicorn`
- `sqlalchemy`
- `psycopg2-binary`
- `python-dotenv`
- `pydantic` + related tooling

(Install them with `pip install -r requirements.txt`.)

---

## API Endpoints
### Apply submissions
These accept `multipart/form-data` (the frontend sends a `FormData` payload):
- `POST /frontend`
- `POST /backend`
- `POST /database`

Required fields:
- `full_name`
- `email`
- `phone`
- `cover_letter`
- `resume_google_drive_link`

### Admin
- `POST /login`
  - `username`, `password`
  - Demo credentials are hardcoded:
    - username: `admin`
    - password: `admin@123`

- `GET /admin/{position}`
  - `position`: `frontend | backend | database`

- `GET /admin/view/{position}/{application_id}/`
  - Returns stored `resume_google_drive_link` for the given application.

---

## CORS / Frontend domains
The backend allows calls from the Vercel frontend domains:
- `https://job-apply-amedd38ur-gopalai07s-projects.vercel.app`
- `https://job-apply-ten.vercel.app`
- `https://www.job-apply-ten.vercel.app`

Local dev:
- `http://localhost:5173`
- `http://127.0.0.1:5173`

If you deploy the frontend elsewhere, add that origin to `Backend/main.py`.

---

## Render deployment note (links from `.env`)
No `.env` file with Render deployment URLs exists in this repo.
When deploying to Render, set the backend URL in your frontend `.env`:
- `Frontend/.env` -> `VITE_API_BASE_URL=https://<your-render-backend>.onrender.com`

---

## Troubleshooting
- **Database errors**: verify `DATABASE_URL` is present and reachable.
- **Frontend cannot submit**: check that `VITE_API_BASE_URL` matches your deployed backend URL.
- **CORS blocked**: ensure the frontend domain is included in the `allow_origins` list.

