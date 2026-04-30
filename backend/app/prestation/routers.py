from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.prestation.schemas import PrestationResponse, PrestationUpdate
from app.prestation.services import get_prestations_by_user, update_prestation

router = APIRouter()

@router.get("/prestations", response_model=list[PrestationResponse])
def lire_prestations(db: Session = Depends(get_db)):
    return get_prestations_by_user(db)

@router.put("/prestation/{id_prestation}", response_model=PrestationResponse)
def modifier_prestation(id_prestation: int, data: PrestationUpdate, db: Session = Depends(get_db)):
    prestation = update_prestation(db, id_prestation, data)

    if not prestation:
        return {"erreur": "Prestation non trouvée"}

    return prestation