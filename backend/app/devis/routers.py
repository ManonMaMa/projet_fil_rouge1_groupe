from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.devis.schemas import DevisCreate, DevisOut, DevisUpdate
from app.prestation.schemas import AddPrestationSchema
from app.devis.services import get_devis_by_id, get_devis_by_user, create_devis_service, update_devis, delete_devis, add_prestation_to_devis


router = APIRouter(prefix="/facturation/devis", tags=["Devis"])


@router.get("", response_model=list[DevisOut])
def liste_devis(id_user: str, db: Session = Depends(get_db)):
    return get_devis_by_user(db, id_user)


@router.get("/details/{id_devis}", response_model=DevisOut)
def details_devis(id_devis: int, db: Session = Depends(get_db)):
    return get_devis_by_id(db, id_devis)


@router.post("", response_model=DevisOut)
def create_devis(devis_data: DevisCreate, db: Session = Depends(get_db)):
    return create_devis_service(db, devis_data)

@router.patch("/{id_devis}", response_model=DevisOut)
def modifier_devis(id_devis: int, devis_data: DevisUpdate, db: Session = Depends(get_db)):
    return update_devis(db, id_devis, devis_data)


@router.delete("/{id_devis}")
def supprimer_devis(id_devis: int, db: Session = Depends(get_db)):
    return delete_devis(db, id_devis)


@router.post("/{id_devis}/prestations")
def ajouter_prestation(id_devis: int, payload: AddPrestationSchema, db: Session = Depends(get_db)):
    return add_prestation_to_devis(
        db,
        id_devis=id_devis,
        id_prestation=payload.id_prestation,
        duree=payload.duree
    )

