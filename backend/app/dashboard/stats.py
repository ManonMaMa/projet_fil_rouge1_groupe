from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database import get_db
from app.facture.models import Facture
from app.devis.models import Devis

router = APIRouter(prefix="/facturation")


# 🔥 Total devis acceptés
@router.get("/stats/devis-acceptes")
def total_devis_acceptes(db: Session = Depends(get_db), id_user: str = Query(...)):
    total = (
        db.query(func.sum(Devis.montant_total_devis))
        .filter(Devis.id_user_fk == id_user, Devis.id_statut_fk == 2)  # 2 = accepté
        .scalar()
    )
    return {"total": float(total or 0)}


# 🔥 Total factures non payées
@router.get("/stats/factures-non-payees")
def total_factures_non_payees(db: Session = Depends(get_db), id_user: str = Query(...)):
    total = (
        db.query(func.sum(Facture.montant_total_facture))
        .filter(Facture.id_user_fk == id_user, Facture.id_statut_fk == 5)  # 1 = non payée
        .scalar()
    )
    return {"total": float(total or 0)}


# 🔥 Total factures payées
@router.get("/stats/factures-payees")
def total_factures_payees(db: Session = Depends(get_db), id_user: str = Query(...)):
    total = (
        db.query(func.sum(Facture.montant_total_facture))
        .filter(Facture.id_user_fk == id_user, Facture.id_statut_fk == 4)  # 3 = payée
        .scalar()
    )
    return {"total": float(total or 0)}
