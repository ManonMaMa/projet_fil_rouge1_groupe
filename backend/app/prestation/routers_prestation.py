from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.prestation.schemas_prestation import PrestationCreate, PrestationUpdate, PrestationOut
from app.prestation.services_prestation import (
    create_prestation,
    get_prestations,
    update_prestation,
    delete_prestation,
    get_prestation_by_id
)

router = APIRouter(prefix="/prestations", tags=["Prestations"])

# 🔵 Créer une prestation
@router.post("/", response_model=PrestationOut)
def creer_prestation(data: PrestationCreate, db: Session = Depends(get_db)):
    return create_prestation(db, data)


# 🟢 Lire toutes les prestations d’un utilisateur
@router.get("/", response_model=list[PrestationOut])
def lire_prestations(id_user: str, db: Session = Depends(get_db)):
    prestations = get_prestations(db, id_user)

    if not prestations:
        return {"erreur": "Aucune prestation trouvée pour cet utilisateur"}

    return prestations


# 🟢 Lire une les prestations
@router.get("/{prestation_id}", response_model=PrestationOut)
def lire_prestation(id_user: str, db: Session = Depends(get_db)):

    prestation = get_prestation_by_id(db, id_user)

    if not prestation:
        return {"erreur": "Prestation non trouvée"}

    return prestation


# 🟡 Modifier une prestation
@router.put("/{prestation_id}", response_model=PrestationOut)
def modifier_prestation(prestation_id: int, data: PrestationUpdate, db: Session = Depends(get_db)):
    prestation = update_prestation(db, prestation_id, data)
    if not prestation:
        return {"erreur": "Prestation non trouvée"}
    return prestation


# 🔴 Supprimer une prestation
@router.delete("/{prestation_id}")
def supprimer_prestation(prestation_id: int, db: Session = Depends(get_db)):
    deleted = delete_prestation(db, prestation_id)
    if not deleted:
        return {"erreur": "Prestation non trouvée"}
    return {"message": "Prestation supprimée avec succès"}
