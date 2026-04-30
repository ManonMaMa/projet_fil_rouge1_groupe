from sqlalchemy.orm import Session
from app.prestation.models import Prestation
from app.prestation.schemas import PrestationCreate, PrestationUpdate


# 🔹 Récupérer toutes les prestations d’un user
def get_prestations_by_user(db: Session, id_user: str):
    return db.query(Prestation).filter(Prestation.id_user_fk == id_user).all()


# 🔹 Récupérer une prestation par ID
def get_prestation_by_id(db: Session, id_prestation: int):
    return db.query(Prestation).filter(Prestation.id_prestation == id_prestation).first()


# 🔹 Créer une prestation
def create_prestation(db: Session, data: PrestationCreate):
    nouvelle = Prestation(**data.model_dump())

    db.add(nouvelle)
    db.commit()
    db.refresh(nouvelle)

    return nouvelle


# 🔹 Mettre à jour une prestation
def update_prestation(db: Session, id_prestation: int, data: PrestationUpdate):
    prestation = db.query(Prestation).filter(
        Prestation.id_prestation == id_prestation
    ).first()

    if not prestation:
        return None

    for key, value in data.model_dump(exclude_unset=True).items():
        setattr(prestation, key, value)

    db.commit()
    db.refresh(prestation)

    return prestation


# 🔹 Supprimer une prestation
def delete_prestation(db: Session, id_prestation: int):
    prestation = db.query(Prestation).filter(
        Prestation.id_prestation == id_prestation
    ).first()

    if not prestation:
        return None

    db.delete(prestation)
    db.commit()

    return {"message": "Prestation supprimée"}