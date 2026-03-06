from sqlalchemy import Column, String, Text, Integer, Date, ForeignKey, Numeric
from app.database import Base


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

