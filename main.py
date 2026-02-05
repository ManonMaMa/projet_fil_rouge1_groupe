from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware


class Inscription(BaseModel):
    email: str
    password: str

class Connexion(BaseModel):
    email: str
    password: str

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
def inscription(data: Inscription):
    return {
        "message": "Inscription reçue",
        "email": data.email
    }

@app.post("/connexion")
def connexion(data: Connexion):
    return {
        "message": "Vous êtes bien connecté",
        "email": data.email
    }