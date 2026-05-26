from pydantic import BaseModel
from typing import Optional

class StatutBase(BaseModel):
    nom_statut: str

    class Config:
        from_attributes = True


class StatutCreate(StatutBase):
    pass


class StatutOut(StatutBase):
    id_statut: int