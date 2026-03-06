from pydantic import BaseModel


class PrestationCreate(BaseModel):
    description_prestation: str
    montant_prestation: float
    id_user_fk: str


class PrestationUpdate(PrestationCreate):
    pass


class PrestationOut(BaseModel):
    id_prestation: int
    description_prestation: str
    montant_prestation: float
    id_user_fk: str

    class Config:
        from_attributes = True

