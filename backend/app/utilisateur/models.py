from sqlalchemy import Column, String, Text, Integer, Date, ForeignKey, Numeric
from app.database import Base

class Utilisateur(Base):
    __tablename__ = "utilisateur"

    id_user = Column(String(300), primary_key=True, index=True)
    email_user = Column(String(50), unique=True, index=True)
    mdp_user = Column(Text)
    nom_user = Column(String(50))
    prenom_user = Column(String(50))
    tel_user = Column(String(50))
    entreprise_user = Column(String(50))
    adresse_postale_user = Column(Text)
    code_postal_user = Column(String(10))
    ville_user = Column(String(50))
    pays_user = Column(String(50))

