from sqlalchemy import Column, String, Text
from app.database import Base

class Utilisateur(Base):
    __tablename__ = "utilisateur"

    id_user = Column(String, primary_key=True, index=True)

    nom_user = Column(String, nullable=True)
    prenom_user = Column(String, nullable=True)
    email_user = Column(String)
    mdp_user = Column(Text)

    tel_user = Column(String, nullable=True)
    entreprise_user = Column(String, nullable=True)

    adresse_postale_user = Column(Text, nullable=True)
    code_postal_user = Column(String, nullable=True)

    ville_user = Column(String, nullable=True)
    pays_user = Column(String, nullable=True)
