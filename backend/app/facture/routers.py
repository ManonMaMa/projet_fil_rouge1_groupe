from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.facture.schemas import FactureCreate, FactureOut
from app.facture.services import (
    get_factures_by_user,
    get_facture_by_id,
    convertir_devis_en_facture_service
)

router = APIRouter(prefix="/facturation", tags=["Factures"])


# 🔥 GET toutes les factures d’un user
@router.get("/factures", response_model=list[FactureOut])
def liste_factures(id_user: str, db: Session = Depends(get_db)):
    return get_factures_by_user(db, id_user)


# 🔥 GET détail facture
@router.get("/factures/details/{id_facture}", response_model=FactureOut)
def details_facture(id_facture: int, db: Session = Depends(get_db)):
    facture = get_facture_by_id(db, id_facture)

    if not facture:
        raise HTTPException(status_code=404, detail="Facture non trouvée")

    return facture


@router.post("/devis/{id_devis}/convertir")
def convertir_devis_en_facture(id_devis: int, db: Session = Depends(get_db)):
    facture = convertir_devis_en_facture_service(id_devis, db)
    return facture