from sqlalchemy.orm import Session, joinedload
from fastapi import HTTPException

from app.devis.models import Devis, DevisPrestation
from app.devis.schemas import DevisCreate, DevisUpdate


def get_devis_by_user(db: Session, id_user: str):
    devis = (
        db.query(Devis)
        .options(
            joinedload(Devis.client),
            joinedload(Devis.statut),
        )
        .filter(Devis.id_user_fk == id_user)
        .all()
    )

    # sécurité : jamais None pour FastAPI
    return devis or []


def get_devis_by_id(db: Session, id_devis: int):
    devis = (
        db.query(Devis)
        .options(
            joinedload(Devis.client),
            joinedload(Devis.statut),
            joinedload(Devis.prestations).joinedload(DevisPrestation.prestation)
        )
        .filter(Devis.id_devis == id_devis)
        .first()
    )


    if not devis:
        raise HTTPException(status_code=404, detail="Devis introuvable")

    return devis


def create_devis(db: Session, devis_data: DevisCreate):
    devis = Devis(**devis_data.dict())

    db.add(devis)
    db.commit()
    db.refresh(devis)

    return devis


def update_devis(db: Session, id_devis: int, devis_data: DevisUpdate):
    devis = db.query(Devis).filter(Devis.id_devis == id_devis).first()

    if not devis:
        raise HTTPException(status_code=404, detail="Devis introuvable")

    update_data = devis_data.dict(exclude_unset=True)

    for key, value in update_data.items():
        setattr(devis, key, value)

    db.commit()
    db.refresh(devis)

    return devis


def delete_devis(db: Session, id_devis: int):
    devis = db.query(Devis).filter(Devis.id_devis == id_devis).first()

    if not devis:
        raise HTTPException(status_code=404, detail="Devis introuvable")

    db.delete(devis)
    db.commit()

    return {"message": "Devis supprimé avec succès"}