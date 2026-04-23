from pydantic import BaseModel
from typing import Optional

# 🔹 Base (SANS email/mdp)
class UtilisateurBase(BaseModel):
    nom_user: Optional[str] = None
    prenom_user: Optional[str] = None
    tel_user: Optional[str] = None
    entreprise_user: Optional[str] = None
    adresse_postale_user: Optional[str] = None
    code_postal_user: Optional[str] = None
    ville_user: Optional[str] = None
    pays_user: Optional[str] = None


# 🔹 Création (OBLIGATOIRE)
class UtilisateurCreate(UtilisateurBase):
    email_user: str
    mdp_user: str


# 🔹 Update
class UtilisateurUpdate(BaseModel):
    email_user: Optional[str] = None
    mdp_user: Optional[str] = None
    nom_user: Optional[str] = None
    prenom_user: Optional[str] = None
    tel_user: Optional[str] = None
    entreprise_user: Optional[str] = None
    adresse_postale_user: Optional[str] = None
    code_postal_user: Optional[str] = None
    ville_user: Optional[str] = None
    pays_user: Optional[str] = None


# 🔹 Response
class UtilisateurResponse(UtilisateurBase):
    id_user: str
    email_user: str

    class Config:
        from_attributes = True