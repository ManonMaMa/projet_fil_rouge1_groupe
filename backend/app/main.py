from fastapi import Depends
from sqlalchemy.orm import Session
import uuid

from app.database import get_db
from app.Models.models_utilisateur import Utilisateur
from app.utilisateur.schemas_utilisateur import InscriptionCreate


from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi import HTTPException   #Gere le exception

from app.Routers.utilisateur_routers import router as utilisateur_router

class Inscription(BaseModel):
    email_user: str
    mdp_user: str

class Connexion(BaseModel):
    email_user: str
    mdp_user: str

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Charger les routes utilisateur
app.include_router(utilisateur_router)


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
def connexion(data: Connexion, db: Session = Depends(get_db)):
    utilisateur = db.query(Utilisateur).filter(Utilisateur.email_user == data.email_user).first()
    if not utilisateur or utilisateur.mdp_user != data.mdp_user:
        raise HTTPException(status_code=401, detail="Email ou mot de passe incorrect")

    return {
        "message": "Vous êtes bien connecté",
        "id_user": utilisateur.id_user,
        "email": utilisateur.email_user
    }
