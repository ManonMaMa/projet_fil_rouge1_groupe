from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.prestation.schemas_prestation import PrestationUpdate, PrestationCreate
from app.utilisateur.routers_utilisateur import get_prestation, update_utilisateur

router = APIRouter()


@router.get("/liste_prestations", model=PrestationCreate)
def lire_prestations(id_user: str, db: Session = Depends(get_db)):

    prestation = get_prestation(db, id_user)

    if not utilisateur:
        return {"erreur": "Utilisateur non trouvé"}

    return utilisateur


@router.put("/utilisateur/{id_user}", response_model=UtilisateurResponse)
def modifier_utilisateur(id_user: str, data: UtilisateurUpdate, db: Session = Depends(get_db)):

    utilisateur = update_utilisateur(db, id_user, data)

    if not utilisateur:
        return {"erreur": "Utilisateur non trouvé"}

    return utilisateur