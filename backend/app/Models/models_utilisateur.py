from sqlalchemy import Column, String, Text
from app.database import Base

class Utilisateur(Base):
    __tablename__ = "utilisateur"

    id_user = Column(String, primary_key=True, index=True)

    nom_user = Column(String)
    prenom_user = Column(String)
    email_user = Column(String)
    mdp_user = Column(Text)

    tel_user = Column(String)
    entreprise_user = Column(String)

    adresse_postale_user = Column(Text)
    code_postale_user = Column(String)

    ville_user = Column(String)
    pays_user = Column(String)