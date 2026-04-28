from pydantic import BaseModel
from typing import Optional

class ClientBase(BaseModel):
    nom_client: str
    prenom_client: str
    email_client: Optional[str] = None
    tel_client: Optional[str] = None
    entreprise_client: Optional[str] = None
    adresse_postale_client: Optional[str] = None
    code_postal_client: Optional[str] = None
    ville_client: Optional[str] = None
    pays_client: Optional[str] = None


class ClientCreate(ClientBase):
    id_user_fk: str


class ClientResponse(ClientBase):
    id_client: int
    id_user_fk: str
    nom: Optional[str] = None

    class Config:
        from_attributes = True
