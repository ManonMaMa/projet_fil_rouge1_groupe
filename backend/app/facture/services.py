from sqlalchemy.orm import Session, joinedload
from datetime import datetime, timedelta
from fastapi import HTTPException

from app.facture.models import FacturePrestation, Facture
from app.devis.models import DevisPrestation, Devis
from app.prestation.models import Prestation


# 🔥 récupérer toutes les factures d’un user
def get_factures_by_user(db: Session, id_user: str):
    return (
        db.query(Facture)
        .options(joinedload(Facture.client), joinedload(Facture.statut))  # 🔥 pour récupérer le client
        .filter(Facture.id_user_fk == id_user)
        .all()
    )


# 🔥 récupérer une facture
def get_facture_by_id(db: Session, id_facture: int):
    facture = (
        db.query(Facture)
        .options(
            joinedload(Facture.client),
            joinedload(Facture.statut),
            joinedload(Facture.prestations).joinedload(FacturePrestation.prestation)
        )
        .filter(Facture.id_facture == id_facture)
        .first()
    )

    if not facture:
        raise HTTPException(status_code=404, detail="Facture introuvable")

    return facture

def convertir_devis_en_facture_service(id_devis: int, db: Session):

    devis = db.query(Devis).filter(Devis.id_devis == id_devis).first()
    if not devis:
        raise HTTPException(status_code=404, detail="Devis introuvable")

    # Dates
    date_facture = datetime.now().date()
    echeance = date_facture + timedelta(days=30)

    # Création facture
    facture = Facture(
        numero_facture=f"FAC-{devis.numero_devis}",
        date_facture=date_facture,
        echeance_facture=echeance,
        montant_total_facture=devis.montant_total_devis,
        id_client_fk=devis.id_client_fk,
        id_user_fk=devis.id_user_fk,
        id_statut_fk=5
    )

    db.add(facture)
    db.flush()  # pour obtenir facture.id_facture

    # Copier les prestations du devis vers facture_prestation
    prestations = db.query(DevisPrestation).filter(DevisPrestation.id_devis_fk == id_devis).all()

    for p in prestations:
        nouvelle_prestation = FacturePrestation(
            id_facture_fk=facture.id_facture,
            id_prestation_fk=p.id_prestation_fk,
            duree_prestation=p.duree_prestation
        )
        db.add(nouvelle_prestation)

    # Supprimer les prestations du devis
    for p in prestations:
        db.delete(p)

    # Supprimer le devis
    db.delete(devis)

    db.commit()
    db.refresh(facture)

    return facture