from sqlalchemy.orm import Session
from app.utilisateur.models import Utilisateur
from app.utilisateur.schemas import UtilisateurUpdate


def get_utilisateur(db: Session, id_user: str):
    return db.query(Utilisateur).filter(Utilisateur.id_user == id_user).first()


def update_utilisateur(db: Session, id_user: str, data: UtilisateurUpdate):

    utilisateur = db.query(Utilisateur).filter(Utilisateur.id_user == id_user).first()

    if not utilisateur:
        return None

    for key, value in data.model_dump(exclude_unset=True).items():
        setattr(utilisateur, key, value)

    db.commit()
    db.refresh(utilisateur)

    return utilisateur