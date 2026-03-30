from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.prestation.schemas_prestation import PrestationResponse, PrestationUpdate
from app.prestation.services_prestation import get_prestations_by_user, update_prestation

router = APIRouter()


@router.get("/prestations/{id_user}", response_model=list[PrestationResponse])
def lire_prestations(id_user: str, db: Session = Depends(get_db)):
    
    prestations = get_prestations_by_user(db, id_user)

    if not prestations:
        return {"erreur": "Aucune prestation trouvée"}

    return prestations


@router.put("/prestation/{id_prestation}", response_model=PrestationResponse)
def modifier_prestation(id_prestation: str, data: PrestationUpdate, db: Session = Depends(get_db)):

    prestation = update_prestation(db, id_prestation, data)

    if not prestation:
        return {"erreur": "Prestation non trouvée"}

    return prestation