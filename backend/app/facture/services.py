from sqlalchemy.orm import Session, joinedload
from app.facture.models import Facture


# 🔥 récupérer toutes les factures d’un user
def get_factures_by_user(db: Session, id_user: str):
    return (
        db.query(Facture)
        .options(joinedload(Facture.client))  # 🔥 pour récupérer le client
        .filter(Facture.id_user_fk == id_user)
        .all()
    )


# 🔥 récupérer une facture
def get_facture_by_id(db: Session, id_facture: int):
    return (
        db.query(Facture)
        .options(joinedload(Facture.client))
        .filter(Facture.id_facture == id_facture)
        .first()
    )


# 🔥 créer facture
def create_facture(db: Session, data):
    facture = Facture(**data.model_dump())

    db.add(facture)
    db.commit()
    db.refresh(facture)

    return facture


# 🔥 supprimer facture
def delete_facture(db: Session, id_facture: int):
    facture = db.query(Facture).filter(Facture.id_facture == id_facture).first()

    if not facture:
        return {"message": "Facture non trouvée"}

    db.delete(facture)
    db.commit()

    return {"message": "Facture supprimée"}