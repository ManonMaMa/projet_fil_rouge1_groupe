from pydantic import BaseModel

class ClientBase(BaseModel):
    nom_client: str
    prenom_client: str
    email_client: str


class ClientCreate(ClientBase):
    pass


class ClientResponse(ClientBase):
    id_client: int

    class Config:
        from_attributes = True