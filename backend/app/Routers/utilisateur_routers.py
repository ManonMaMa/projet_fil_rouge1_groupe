from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.Schemas.schemas_utilisateur import UtilisateurUpdate, UtilisateurResponse
from app.Services.service_utilisateur import get_utilisateur, update_utilisateur

router = APIRouter()


@router.get("/utilisateur/{id_user}", response_model=UtilisateurResponse)
def lire_utilisateur(id_user: str, db: Session = Depends(get_db)):

    utilisateur = get_utilisateur(db, id_user)

    if not utilisateur:
        return {"erreur": "Utilisateur non trouvé"}

    return utilisateur


@router.put("/utilisateur/{id_user}", response_model=UtilisateurResponse)
def modifier_utilisateur(id_user: str, data: UtilisateurUpdate, db: Session = Depends(get_db)):

    utilisateur = update_utilisateur(db, id_user, data)

    if not utilisateur:
        return {"erreur": "Utilisateur non trouvé"}

    return utilisateur