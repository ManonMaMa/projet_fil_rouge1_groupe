from pydantic import BaseModel

class InscriptionCreate(BaseModel):
    email: str
    password: str
