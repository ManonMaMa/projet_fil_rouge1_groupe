from pydantic import BaseModel


class PrestationCreate(BaseModel):
    description_prestation: str
    montant_prestation: float


class PrestationUpdate(PrestationCreate):
    pass
