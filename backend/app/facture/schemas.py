from pydantic import BaseModel
from datetime import date
from typing import Optional, List
from app.client.schemas import ClientResponse
from app.prestation.schemas import PrestationBase

class FacturePrestationOut(BaseModel):
    id_prestation_fk: int
    duree_prestation: int
    prestation: Optional[PrestationBase]

    class Config:
        from_attributes = True


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
    prestations: List[FacturePrestationOut] = []

    class Config:
        from_attributes = True