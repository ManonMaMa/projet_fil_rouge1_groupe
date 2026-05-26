from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.statut.schemas import StatutOut
from app.statut.services import (
    get_statut_by_id
)

router = APIRouter()


# 🔥 GET détail statut
@router.get("/statuts/details/{id_statut}", response_model=StatutOut)
def details_statut(id_statut: int, db: Session = Depends(get_db)):
    statut = get_statut_by_id(db, id_statut)

    if not statut:
        raise HTTPException(status_code=404, detail="Facture non trouvée")

    return statut