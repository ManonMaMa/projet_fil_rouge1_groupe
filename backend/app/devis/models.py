from sqlalchemy import Column, String, Integer, Date, ForeignKey, Numeric
from app.database import Base

class Devis(Base):
    __tablename__ = "devis"

    id_devis = Column(Integer, primary_key=True, index=True)
    numero_devis = Column(String(50), nullable=False, index=True)
    date_devis = Column(Date, nullable=False)
    montant_total_devis = Column(Numeric(15, 3))
    id_client_fk = Column(Integer, ForeignKey("client.id_client"), nullable=False)
    id_user_fk = Column(String(300), ForeignKey("utilisateur.id_user"), nullable=False)
    id_statut_fk = Column(Integer, ForeignKey("statut.id_statut"), nullable=False)