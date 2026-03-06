from fastapi import Depends
from sqlalchemy.orm import Session
import uuid

from app.database import get_db
from app.models import Utilisateur
from app.utilisateur.schemas_utilisateur import InscriptionCreate


from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware


class Inscription(BaseModel):
    email_user: str
    password_user: str

class Connexion(BaseModel):
    email_user: str
    password_user: str

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def api_status():
    return {"status": "API opérationnelle !!"}

@app.post("/inscription")
def inscription(
    data: InscriptionCreate,
    db: Session = Depends(get_db)
):
    print("📩 Données reçues :", data)

    nouvel_utilisateur = Utilisateur(
        id_user=str(uuid.uuid4()),
        email_user=data.email_user,
        mdp_user=data.mdp_user
    )

    db.add(nouvel_utilisateur)
    db.commit()
    db.refresh(nouvel_utilisateur)

    return {
        "message": "Utilisateur créé avec succès 🎉",
        "email": nouvel_utilisateur.email_user
    }



@app.post("/connexion")
def connexion(data: Connexion):
    return {
        "message": "Vous êtes bien connecté",
        "email": data.email_user
    }