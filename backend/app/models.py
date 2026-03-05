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


class Facture(Base):
    __tablename__ = "facture"

    id_facture = Column(Integer, primary_key=True, index=True)
    numero_facture = Column(String(50), unique=True, nullable=False, index=True)
    date_facture = Column(Date, nullable=False)
    echeance_facture = Column(Date, nullable=False)
    montant_total_facture = Column(Numeric(15, 3))
    id_client_fk = Column(Integer, ForeignKey("client.id_client"), nullable=False)
    id_user_fk = Column(String(300), ForeignKey("utilisateur.id_user"), nullable=False)
    id_statut_fk = Column(Integer, ForeignKey("statut.id_statut"), nullable=False)


class Devis(Base):
    __tablename__ = "devis"

    id_devis = Column(Integer, primary_key=True, index=True)
    numero_devis = Column(String(50), nullable=False, index=True)
    date_devis = Column(Date, nullable=False)
    montant_total_devis = Column(Numeric(15, 3))
    id_client_fk = Column(Integer, ForeignKey("client.id_client"), nullable=False)
    id_user_fk = Column(String(300), ForeignKey("utilisateur.id_user"), nullable=False)
    id_statut_fk = Column(Integer, ForeignKey("statut.id_statut"), nullable=False)
