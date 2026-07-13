from pydantic import BaseModel, EmailStr


class Application(BaseModel):
    full_name: str
    email: EmailStr
    phone: str

    # coverLetter is a short text string (stored directly in DB)
    cover_letter: str

    # resume is stored as a Google Drive link string
    resume: str

    class Config:
        from_attributes = True



