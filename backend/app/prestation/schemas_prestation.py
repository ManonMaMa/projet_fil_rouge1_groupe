from pydantic import BaseModel


class PrestationCreate(BaseModel):
    description_prestation: str
    montant_prestation: float


class PrestationUpdate(PrestationCreate):
    pass


class PrestationOut(PrestationCreate):
    id: int

    class Config:
        from_attributes = True

