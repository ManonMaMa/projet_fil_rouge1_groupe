from pydantic import BaseModel
from datetime import date
from typing import Optional
from app.client.schemas import ClientResponse


class FactureBase(BaseModel):
    numero_facture: str
    date_facture: date
    echeance_facture: date
    montant_total_facture: Optional[float] = None
    id_client_fk: int
    id_user_fk: str
    id_statut_fk: int


class FactureCreate(FactureBase):
    pass


class FactureOut(FactureBase):
    id_facture: int

    # 🔥 relation client (JOIN)
    client: Optional[ClientResponse] = None

    class Config:
        from_attributes = True