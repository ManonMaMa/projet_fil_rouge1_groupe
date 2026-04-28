from sqlalchemy.orm import Session
from fastapi import HTTPException

from app.devis.models import Devis
from app.devis.schemas import DevisCreate, DevisOut, DevisUpdate


def get_devis_by_user(db: Session, id_user: str):
    return db.query(Devis).filter(Devis.id_user_fk == id_user).all()


def get_devis_by_id(db: Session, id_devis: int):
    devis = db.query(Devis).filter(Devis.id_devis == id_devis).first()
    if not devis:
        return None
    return devis


def create_devis(db: Session, devis_data: DevisCreate):
    devis = Devis(**devis_data.dict())
    db.add(devis)
    db.commit()
    db.refresh(devis)
    return devis


def update_devis(db: Session, id_devis: int, devis_data: DevisUpdate):
    devis = get_devis_by_id(db, id_devis)

    update_data = devis_data.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(devis, key, value)

    db.commit()
    db.refresh(devis)
    return devis


def delete_devis(db: Session, id_devis: int):
    devis = get_devis_by_id(db, id_devis)

    db.delete(devis)
    db.commit()

    return {"message": "Devis supprimé avec succès"}
