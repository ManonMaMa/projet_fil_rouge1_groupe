from pydantic import BaseModel

class ServiceBase(BaseModel):
    description_service: str
    montant_service: float


class ServiceCreate(ServiceBase):
    pass


class ServiceUpdate(ServiceBase):
    pass


class ServiceResponse(ServiceBase):
    id_service: int

    class Config:
        from_attributes = True