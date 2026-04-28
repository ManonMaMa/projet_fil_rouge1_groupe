from pydantic import BaseModel
from datetime import date
from typing import Optional


class DevisBase(BaseModel):
    numero_devis: str
    date_devis: date
    montant_total_devis: Optional[float] = None
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

    class Config:
        orm_mode = True
