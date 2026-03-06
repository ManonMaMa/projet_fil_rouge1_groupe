from pydantic import BaseModel


class ServiceCreate(BaseModel):
    description_service: str
    montant_service: float


class ServiceUpdate(ServiceCreate):
    pass


