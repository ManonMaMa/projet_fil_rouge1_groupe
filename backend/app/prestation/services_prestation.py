from sqlalchemy.orm import Session
from app.prestation.models_prestation import Prestation
from app.prestation.schemas_prestation import PrestationUpdate, PrestationCreate


def create_prestation(db: Session, data: PrestationCreate):
    prestation = Prestation(**data.dict())
    db.add(prestation)
    db.commit()
    db.refresh(prestation)
    return prestation


def get_prestations(db: Session, id_user: str):
    return db.query(Prestation).filter(Prestation.id_user == id_user).all()


def get_prestation_by_id(db: Session, prestation_id: int):
    return db.query(Prestation).filter(Prestation.id == prestation_id).first()


def update_prestation(db: Session, prestation_id: int, data: PrestationUpdate):
    prestation = get_prestation_by_id(db, prestation_id)
    if not prestation:
        return None

    for key, value in data.dict(exclude_unset=True).items():
        setattr(prestation, key, value)

    db.commit()
    db.refresh(prestation)
    return prestation


def delete_prestation(db: Session, prestation_id: int):
    prestation = get_prestation_by_id(db, prestation_id)
    if not prestation:
        return None

    db.delete(prestation)
    db.commit()
    return True