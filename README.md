# Job Apply (Full Stack)

A complete full-stack **Job Apply** app built with:
- **Frontend**: React + Vite + Tailwind
- **Backend**: FastAPI + SQLAlchemy (REST API + admin endpoints)
- **Database**: Stores job applications for 3 roles: `frontend`, `backend`, `database`

---

## What you get
### Frontend
- Job application forms for 3 open roles
- Admin login screen
- Admin pages to list applications and view stored resume links

### Backend
- Receives application submissions via `multipart/form-data`
- Stores submissions in SQLAlchemy models
- Admin APIs to list and fetch stored resume links
- CORS configured for the deployed Vercel frontend domains

---

## Start the project (high level)
1) Configure environment variables (`.env` files)
2) Run Backend
3) Run Frontend

Detailed steps are in:
- `Backend/README.md`
- `Frontend/README.md`

---

## Required environment variables (via `.env`)
### Backend (`Backend/.env`)
- `DATABASE_URL`

### Frontend (`Frontend/.env`)
- `VITE_API_BASE_URL` (your backend base URL)
- `VITE_API_BASE_URL_VERCEL_LOCAL` (optional alternate)

> Note: This repo does not currently contain actual `.env` files (so Render/host URLs must be filled in by you). 

---

## Deployed URLs (from code)
The backend CORS configuration explicitly whitelists these **Vercel** frontend origins:
- https://job-apply-amedd38ur-gopalai07s-projects.vercel.app
- https://job-apply-ten.vercel.app
- https://www.job-apply-ten.vercel.app

Backend/Render URLs must come from your deployment `.env` values (not committed in this repo).

---

## Admin login
The backend currently hardcodes demo credentials:
- **username**: `admin`
- **password**: `admin@123`

---

## Repo layout
```
Backend/
  main.py
  database.py
  models.py
  schemas.py
  requirements.txt
Frontend/
  package.json
  src/
```

