from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.Routers.utilisateur_routers import router as utilisateur_router

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