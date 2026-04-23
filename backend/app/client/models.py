from sqlalchemy import Column, String, Text, Integer, ForeignKey
from app.database import Base

class Client(Base):
    __tablename__ = "client"

    id_client = Column(Integer, primary_key=True, index=True)
    nom_client = Column(String(50))
    prenom_client = Column(String(50))
    email_client = Column(String(50))
    tel_client = Column(String(50))
    entreprise_client = Column(String(50))
    adresse_postale_client = Column(Text)
    code_postal_client = Column(String(10))
    ville_client = Column(String(50))
    pays_client = Column(String(50))
    id_user_fk = Column(String(300), ForeignKey("utilisateur.id_user"))