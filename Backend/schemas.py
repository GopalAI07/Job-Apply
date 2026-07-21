from pydantic import BaseModel, EmailStr


class Application(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    cover_letter: str
    resume: str
    class Config:
        from_attributes = True



