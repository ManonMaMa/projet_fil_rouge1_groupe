from pydantic import BaseModel

class InscriptionCreate(BaseModel):
    email: str
    password: str


class UtilisateurUpdate(BaseModel):
    email: str
    password: str
    nom_user: str | None = None
    prenom_user: str | None = None
    tel_user: str | None = None
    entreprise_user: str | None = None
    adresse_postale_user: str | None = None
    code_postal_user: str | None = None
    ville_user: str | None = None
    pays_user: str | None = None


class ClientCreate(BaseModel):
    nom_client: str
    prenom_client: str
    email_client: str


class ServiceCreate(BaseModel):
    description_service: str
    montant_service: float


class ServiceUpdate(BaseModel):
    description_service: str
    montant_service: float


