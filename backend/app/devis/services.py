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
            joinedload(Devis.prestations).joinedload(DevisPrestation.prestation)
        )
        .filter(Devis.id_user_fk == id_user)
        .all()
    )

    for d in devis:
        if d.montant_total_devis is None:
            d.montant_total_devis = 0

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


def create_devis_service(db: Session, devis_data: DevisCreate):
    devis = Devis(
        numero_devis=devis_data.numero_devis,
        date_devis=devis_data.date_devis,
        id_client_fk=devis_data.id_client_fk,
        id_user_fk=devis_data.id_user_fk,
        id_statut_fk=1,  # en attente
        montant_total_devis=0  # 👈 obligatoire
    )

    db.add(devis)
    db.commit()
    db.refresh(devis)

    return devis


def add_prestation_to_devis(db: Session, id_devis: int, id_prestation: int, duree: int):
    devis = db.query(Devis).filter(Devis.id_devis == id_devis).first()

    if not devis:
        raise HTTPException(404, "Devis introuvable")

    ligne = DevisPrestation(
        id_devis_fk=id_devis,
        id_prestation_fk=id_prestation,
        duree_prestation=duree
    )

    db.add(ligne)
    db.commit()
    db.refresh(devis)

    # 🔥 recalcul automatique ici
    return recalculer_montant_total(db, devis)


def recalculer_montant_total(db: Session, devis: Devis):
    total = sum(
        p.prestation.montant_prestation * p.duree_prestation
        for p in devis.prestations
    )
    devis.montant_total_devis = total
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