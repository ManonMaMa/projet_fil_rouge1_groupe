from fastapi import Depends
from sqlalchemy.orm import Session
import uuid

from app.database import get_db
from app.utilisateur.models import Utilisateur
from app.utilisateur.schemas import UtilisateurCreate, UtilisateurUpdate

from app.client.models import Client
from app.client.schemas import ClientCreate

from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi import HTTPException   #Gere le exception

from app.utilisateur.routers import router as utilisateur_router
from app.devis.routers import router as devis_router
from app.facture.routers import router as facture_router

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
app.include_router(devis_router)
app.include_router(facture_router)

# ----- DEMARRAGE DE L'APPLICATION ------

@app.get("/")
def api_status():
    return {"status": "API opérationnelle !!"}

# ----- AJOUT ROUTE USER ------

@app.get("/user/{id_user}")  # Récupére l'id de l'utilisateur
def get_user(id_user: str, db: Session = Depends(get_db)):
    utilisateur = db.query(Utilisateur).filter(Utilisateur.id_user == id_user).first()

    if not utilisateur:
        raise HTTPException(status_code=404, detail="Utilisateur non trouvé")

    return {
        "id_user": utilisateur.id_user,
        "email": utilisateur.email_user,
        "nom": utilisateur.nom_user,
        "prenom": utilisateur.prenom_user,
        "tel": utilisateur.tel_user,
        "entreprise": utilisateur.entreprise_user,
        "adresse": utilisateur.adresse_postale_user,
        "code_postal": utilisateur.code_postal_user,
        "ville": utilisateur.ville_user,
        "pays": utilisateur.pays_user
    } 


# ----- AJOUT ROUTE CLIENT POUR USER ------

@app.get("/clients/{id_user}")
def get_clients_by_user(id_user: str, db: Session = Depends(get_db)):
    clients = db.query(Client).filter(Client.id_user_fk == id_user).all()

    return [
        {
            "id_client": c.id_client,
            "nom_client": c.nom_client,
            "prenom_client": c.prenom_client,
            "email_client": c.email_client,
            "tel_client": c.tel_client,
            "entreprise_client": c.entreprise_client,
            "adresse_postale_client": c.adresse_postale_client,
            "code_postal_client": c.code_postal_client,
            "ville_client": c.ville_client,
            "pays_client": c.pays_client,
        }
        for c in clients
    ]

# ----- AJOUT ROUTE CLIENT POUR CLIENT ------

@app.get("/client/{id_client}")
def get_client(id_client: int, db: Session = Depends(get_db)):
    client = db.query(Client).filter(Client.id_client == id_client).first()

    if not client:
        raise HTTPException(status_code=404, detail="Client non trouvé")

    return {
        "id_client": client.id_client,
        "nom_client": client.nom_client,
        "prenom_client": client.prenom_client,
        "email_client": client.email_client,
        "tel_client": client.tel_client,
        "entreprise_client": client.entreprise_client,
        "adresse_postale_client": client.adresse_postale_client,
        "code_postal_client": client.code_postal_client,
        "ville_client": client.ville_client,
        "pays_client": client.pays_client,
    }


# ----- AJOUTER UN NOUVEAU CLIENT ------

@app.post("/client")
def create_client(data: ClientCreate, db: Session = Depends(get_db)):
    nouveau_client = Client(**data.model_dump())

    db.add(nouveau_client)
    db.commit()
    db.refresh(nouveau_client)

    return nouveau_client


# ----- AJOUTER UN NOUVEAU UTILISATEUR ------

@app.post("/inscription")
def inscription(
    data: UtilisateurCreate,
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


# ----- MISE A JOUR ------

@app.put("/user/update/{id_user}")
def update_user(
    id_user: str,
    data: UtilisateurUpdate,
    db: Session = Depends(get_db)
):
    utilisateur = db.query(Utilisateur).filter(Utilisateur.id_user == id_user).first()

    if not utilisateur:
        raise HTTPException(status_code=404, detail="Utilisateur non trouvé")

    # update dynamique
    for key, value in data.model_dump(exclude_unset=True).items():
        setattr(utilisateur, key, value)

    db.commit()
    db.refresh(utilisateur)

    return {"message": "Utilisateur mis à jour"}


# ----- CONNEXION ------

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