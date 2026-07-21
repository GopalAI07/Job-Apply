from fastapi import FastAPI, Depends, File, Form, HTTPException
from sqlalchemy.orm import Session

from fastapi.middleware.cors import CORSMiddleware

from database import get_db, engine, Base
from models import FrontendRole, BackendRole, DatabaseRole


app = FastAPI()

@app.on_event("startup")
def startup():
    print("DATABASE:", engine.url)
    print("TABLES:", Base.metadata.tables.keys())

    Base.metadata.create_all(bind=engine)

    print("TABLE CREATION COMPLETE")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://job-apply-amedd38ur-gopalai07s-projects.vercel.app",
        "https://job-apply-ten.vercel.app",
        "https://www.job-apply-ten.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



def _apply(position: str, model, *,
           full_name: str,
           email: str,
           phone: str,
           cover_letter: str,
           resume_google_drive_link: str,
           db: Session):
    resume_google_drive_link = (resume_google_drive_link or "").strip()
    if not resume_google_drive_link:
        raise HTTPException(status_code=400, detail="resume_google_drive_link is required")

    application = model(
        full_name=full_name,
        email=email,
        phone=phone,
        cover_letter=cover_letter,
        resume=resume_google_drive_link,
    )
    db.add(application)
    db.commit()
    db.refresh(application)
    return application

@app.get("/")
def home():
    return {"status": "API running"}


@app.post("/frontend")
def apply_frontend(
    full_name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    cover_letter: str = Form(...),
    resume_google_drive_link: str = Form(...),
    db: Session = Depends(get_db),
):
    return _apply(
        "frontend",
        FrontendRole,
        full_name=full_name,
        email=email,
        phone=phone,
        cover_letter=cover_letter,
        resume_google_drive_link=resume_google_drive_link,
        db=db,
    )


@app.post("/backend")
def apply_backend(
    full_name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    cover_letter: str = Form(...),
    resume_google_drive_link: str = Form(...),
    db: Session = Depends(get_db),
):
    return _apply(
        "backend",
        BackendRole,
        full_name=full_name,
        email=email,
        phone=phone,
        cover_letter=cover_letter,
        resume_google_drive_link=resume_google_drive_link,
        db=db,
    )


@app.post("/database")
def apply_database(
    full_name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    cover_letter: str = Form(...),
    resume_google_drive_link: str = Form(...),
    db: Session = Depends(get_db),
):
    return _apply(
        "database",
        DatabaseRole,
        full_name=full_name,
        email=email,
        phone=phone,
        cover_letter=cover_letter,
        resume_google_drive_link=resume_google_drive_link,
        db=db,
    )

@app.post("/login")
def login(
    username: str = Form(...),
    password: str = Form(...),
):
    if username == "admin" and password == "admin@123":
        return {"message": "Login successful"}


    raise HTTPException(status_code=401, detail="Invalid username or password")


@app.get("/admin/{position}")
def admin_dashboard(position:str, db: Session = Depends(get_db)):
    if position == "frontend":
        applications = db.query(FrontendRole).all()
    elif position == "backend":
        applications = db.query(BackendRole).all()
    elif position == "database":
        applications = db.query(DatabaseRole).all()
    else:
        raise HTTPException(status_code=404, detail="Position not found")

    return applications 


@app.get("/admin/view/{position}/{application_id}/")
def get_application(position: str, application_id: int, db: Session = Depends(get_db)):
    """Return the stored resume Google Drive link for the given position + application_id."""
    if position not in {"frontend", "backend", "database"}:
        raise HTTPException(status_code=404, detail="Position not found")

    if position == "frontend":
        application = db.query(FrontendRole).filter(FrontendRole.id == application_id).first()
    elif position == "backend":
        application = db.query(BackendRole).filter(BackendRole.id == application_id).first()
    else:
        application = db.query(DatabaseRole).filter(DatabaseRole.id == application_id).first()

    if application is None:
        raise HTTPException(status_code=404, detail="Application not found")

    if not application.resume:
        raise HTTPException(status_code=404, detail="Resume link not found")

    return {
        "id": application.id,
        "position": position,
        "resume_google_drive_link": application.resume,
    }


                    