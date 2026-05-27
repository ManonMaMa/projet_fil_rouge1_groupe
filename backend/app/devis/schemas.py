from pydantic import BaseModel
from datetime import date
from typing import Optional, List
from app.client.schemas import ClientResponse
from app.statut.schemas import StatutOut
from app.prestation.schemas import PrestationResponse


class DevisPrestationOut(BaseModel):
    id_prestation_fk: int
    duree_prestation: int
    prestation: PrestationResponse

    class Config:
        from_attributes = True


class DevisBase(BaseModel):
    numero_devis: str
    date_devis: date
    montant_total_devis: Optional[float] = 0
    id_client_fk: int
    id_user_fk: str
    id_statut_fk: int


class DevisCreate(DevisBase):
    pass


class DevisUpdate(BaseModel):
    numero_devis: Optional[str] = None
    date_devis: Optional[date] = None
    montant_total_devis: Optional[float] = None
    id_client_fk: Optional[int] = None
    id_user_fk: Optional[str] = None
    id_statut_fk: Optional[int] = None


class DevisOut(DevisBase):
    id_devis: int
    client: Optional[ClientResponse] = None
    statut: Optional[StatutOut] = None
    prestations: List[DevisPrestationOut] = []

    class Config:
        from_attributes = True
