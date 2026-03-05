from pydantic import BaseModel
from typing import Optional

class UtilisateurBase(BaseModel):

    nom_user: Optional[str] = None
    prenom_user: Optional[str] = None
    email_user: Optional[str] = None

    tel_user: Optional[str] = None
    entreprise_user: Optional[str] = None

    adresse_postale_user: Optional[str] = None
    code_postale_user: Optional[str] = None
    ville_user: Optional[str] = None
    pays_user: Optional[str] = None


class UtilisateurUpdate(UtilisateurBase):
    pass


class UtilisateurResponse(UtilisateurBase):
    id_user: str

    class Config:
        from_attributes = True