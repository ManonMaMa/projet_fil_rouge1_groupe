from sqlalchemy import Column, Integer, String
from app.database import Base

class Statut(Base):
    __tablename__ = "statut"

    id_statut = Column(Integer, primary_key=True, index=True)