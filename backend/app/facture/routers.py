from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.facture.schemas import FactureCreate, FactureOut
from app.facture.services import (
    get_factures_by_user,
    get_facture_by_id,
    create_facture,
    delete_facture
)

router = APIRouter(prefix="/facturation/factures", tags=["Factures"])


# 🔥 GET toutes les factures d’un user
@router.get("", response_model=list[FactureOut])
def liste_factures(id_user: str, db: Session = Depends(get_db)):
    return get_factures_by_user(db, id_user)


# 🔥 GET détail facture
@router.get("/details/{id_facture}", response_model=FactureOut)
def details_facture(id_facture: int, db: Session = Depends(get_db)):
    facture = get_facture_by_id(db, id_facture)

    if not facture:
        raise HTTPException(status_code=404, detail="Facture non trouvée")

    return facture


# 🔥 CREATE facture
@router.post("", response_model=FactureOut)
def ajouter_facture(data: FactureCreate, db: Session = Depends(get_db)):
    return create_facture(db, data)


# 🔥 DELETE facture
@router.delete("/{id_facture}")
def supprimer_facture(id_facture: int, db: Session = Depends(get_db)):
    return delete_facture(db, id_facture)