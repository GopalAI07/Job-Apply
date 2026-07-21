from sqlalchemy import Column, Integer, String, Text, TIMESTAMP
from sqlalchemy.sql import func
from database import Base


class FrontendRole(Base):
    __tablename__ = "frontend_role"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    phone = Column(String(20), nullable=False)

    # Resume is stored as a Google Drive share link string in `resume`.



    # Legacy fields (not used by the Files workflow; keep for compatibility)
    cover_letter = Column(Text, nullable=False, default="")
    # Google Drive shareable link (e.g. https://drive.google.com/file/d/<id>/view)
    resume = Column(String(1200), nullable=True)


    created_at = Column(TIMESTAMP, server_default=func.now())



class BackendRole(Base):
    __tablename__ = "backend_role"


    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    phone = Column(String(20), nullable=False)



    cover_letter = Column(Text, nullable=False, default="")
    # Google Drive shareable link (e.g. https://drive.google.com/file/d/<id>/view)
    resume = Column(String(1200), nullable=True)


    created_at = Column(TIMESTAMP, server_default=func.now())



class DatabaseRole(Base):
    __tablename__ = "database_role"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    phone = Column(String(20), nullable=False)
    cover_letter = Column(Text, nullable=False, default="")
    resume = Column(String(1200), nullable=True)
    created_at = Column(TIMESTAMP, server_default=func.now())
