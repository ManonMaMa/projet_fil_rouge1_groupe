from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.devis.schemas import DevisCreate, DevisOut, DevisUpdate
from app.devis.services import get_devis_by_id, get_devis_by_user, create_devis, update_devis, delete_devis


router = APIRouter(prefix="/facturation/devis", tags=["Devis"])


@router.get("", response_model=list[DevisOut])
def liste_devis(id_user: str, db: Session = Depends(get_db)):
    return get_devis_by_user(db, id_user)


@router.get("/details/{id_devis}", response_model=DevisOut)
def details_devis(id_devis: int, db: Session = Depends(get_db)):
    return get_devis_by_id(db, id_devis)


@router.post("", response_model=DevisOut)
def create_devis(data: DevisCreate, db: Session = Depends(get_db)):
    nouveau = Devis(**data.model_dump())

    db.add(nouveau)
    db.commit()
    db.refresh(nouveau)

    return nouveau


@router.patch("/{id_devis}", response_model=DevisOut)
def modifier_devis(id_devis: int, devis_data: DevisUpdate, db: Session = Depends(get_db)):
    return update_devis(db, id_devis, devis_data)


@router.delete("/{id_devis}")
def supprimer_devis(id_devis: int, db: Session = Depends(get_db)):
    return delete_devis(db, id_devis)
