# Frontend (React + Vite + Tailwind)

The frontend provides:
- Job application forms for 3 roles (`frontend`, `backend`, `database`)
- Admin login page
- Admin UI (view stored applications + resume links)

---

## Quick start (local)
### 1) Install dependencies
```bash
cd Frontend
npm i
```

### 2) Configure environment
Create `Frontend/.env`:
```env
VITE_API_BASE_URL=http://localhost:8000
VITE_API_BASE_URL_VERCEL_LOCAL=http://localhost:8000
```

> The code reads one of these:
- `import.meta.env.VITE_API_BASE_URL`
- `import.meta.env.VITE_API_BASE_URL_VERCEL_LOCAL`

### 3) Run dev server
```bash
npm run dev
```

Open the URL printed by Vite.

---

## Build / Preview
```bash
npm run build
npm run preview
```

---

## Credentials (Admin)
Backend is hardcoded to accept:
- username: `admin`
- password: `admin@123`

---

## How the frontend talks to the backend
The form submits to:
- `POST ${API_BASE_URL}/frontend`
- `POST ${API_BASE_URL}/backend`
- `POST ${API_BASE_URL}/database`

And login uses:
- `POST ${API_BASE_URL}/login`

The backend expects `multipart/form-data` field names:
- `full_name`
- `email`
- `phone`
- `cover_letter`
- `resume_google_drive_link`

---

## Deployed URL (Vercel)
Backend CORS config already whitelists these Vercel frontend domains:
- https://job-apply-amedd38ur-gopalai07s-projects.vercel.app
- https://job-apply-ten.vercel.app
- https://www.job-apply-ten.vercel.app

---

## Render deployment note (links from `.env`)
No `.env` file containing your Render backend URL exists in this repo.
After deploying backend to Render, update `Frontend/.env`:
- `VITE_API_BASE_URL=https://<your-render-backend>.onrender.com`

---

## Troubleshooting
- **API_BASE_URL is blank**: ensure `Frontend/.env` exists and VITE variables are spelled exactly.
- **Form submit fails**: verify CORS and that backend endpoints are reachable.

