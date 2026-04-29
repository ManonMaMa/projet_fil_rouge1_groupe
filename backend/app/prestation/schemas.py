from pydantic import BaseModel
from typing import Optional

class PrestationBase(BaseModel):
    description_prestation: Optional[str]
    montant_prestation: Optional[float]

    class Config:
        from_attributes = True

class PrestationCreate(BaseModel):
    description_prestation: str
    montant_prestation: float


class PrestationUpdate(PrestationCreate):
    pass
