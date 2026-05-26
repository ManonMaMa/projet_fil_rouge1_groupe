from sqlalchemy.orm import Session, joinedload
from datetime import datetime, timedelta
from fastapi import HTTPException

from app.statut.models import Statut

# 🔥 récupérer un statut
def get_statut_by_id(db: Session, id_statut: int):
    statut = (
        db.query(statut)
        .filter(statut.id_statut == id_statut)
        .first()
    )

    if not statut:
        raise HTTPException(status_code=404, detail="Statut introuvable")

    return statut