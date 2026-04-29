from sqlalchemy import Column, String, Integer, Date, ForeignKey, Numeric
from sqlalchemy.orm import relationship
from app.database import Base
from app.prestation.models import Prestation


class FacturePrestation(Base):
    __tablename__ = "facture_prestation"

    id_facture_fk = Column(Integer, ForeignKey("facture.id_facture"), primary_key=True)
    id_prestation_fk = Column(Integer, ForeignKey("prestation.id_prestation"), primary_key=True)
    duree_prestation = Column(Integer, nullable=False, default=1)

    facture = relationship("Facture", back_populates="prestations")
    prestation = relationship(Prestation)


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

    client = relationship("Client", backref="facture")
    statut = relationship("Statut", backref="facture")

    prestations = relationship(
        "FacturePrestation",
        back_populates="facture",
        cascade="all, delete-orphan"
    )
