from sqlalchemy import Column, String, Text, Integer, Date, ForeignKey, Numeric
from app.database import Base


class Service(Base):
    __tablename__ = "service"

    id_service = Column(Integer, primary_key=True, index=True)
    description_service = Column(Text)
    montant_service = Column(Numeric(15, 2))
