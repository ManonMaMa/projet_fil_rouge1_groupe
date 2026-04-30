from sqlalchemy import Column, String, Integer, Date, ForeignKey, Numeric
from sqlalchemy.orm import relationship
from app.database import Base
from app.prestation.models import Prestation

class DevisPrestation(Base):
    __tablename__ = "devis_prestation"

    id_devis_fk = Column(Integer, ForeignKey("devis.id_devis"), primary_key=True)
    id_prestation_fk = Column(Integer, ForeignKey("prestation.id_prestation"), primary_key=True)
    duree_prestation = Column(Integer, nullable=False, default=1)

    devis = relationship("Devis", back_populates="prestations")
    prestation = relationship(Prestation)
    statut = relationship("Statut", backref="devis")

class Devis(Base):
    __tablename__ = "devis"

    id_devis = Column(Integer, primary_key=True, index=True)
    numero_devis = Column(String(50), nullable=False, index=True)
    date_devis = Column(Date, nullable=False)
    montant_total_devis = Column(Numeric(15, 3))
    id_client_fk = Column(Integer, ForeignKey("client.id_client"), nullable=False)
    id_user_fk = Column(String(300), ForeignKey("utilisateur.id_user"), nullable=False)
    id_statut_fk = Column(Integer, ForeignKey("statut.id_statut"), nullable=False)

    client = relationship("Client", backref="devis")
    statut = relationship("Statut", backref="devis")

    prestations = relationship("DevisPrestation", back_populates="devis", cascade="all, delete-orphan")