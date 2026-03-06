from pydantic import BaseModel

class InscriptionCreate(BaseModel):
    email_user: str
    mdp_user: str


class UtilisateurBase(InscriptionCreate):
    nom_user: str | None = None
    prenom_user: str | None = None
    tel_user: str | None = None
    entreprise_user: str | None = None
    adresse_postale_user: str | None = None
    code_postal_user: str | None = None
    ville_user: str | None = None
    pays_user: str | None = None


class UtilisateurUpdate(UtilisateurBase):
    pass


class UtilisateurResponse(UtilisateurBase):
    id_user: str

    class Config:
        from_attributes = True

