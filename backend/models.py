from sqlalchemy import Column, String, Text
from backend.database import Base

class Utilisateur(Base):
    __tablename__ = "utilisateur"

    id_user = Column(String(300), primary_key=True, index=True)
    email_user = Column(String(50), unique=True, index=True)
    mdp_user = Column(Text)
