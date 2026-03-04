import React from 'react';
import { useNavigate } from "react-router-dom";
import HeaderNouvelleFacture from './headerNouvelleFacture';
import Sidebar from "../../../assets/composants/Sidebar"
import './nouvelleFacture.css'; // CSS de la page devis



// Composant principal de la nouvelle facture
const nouvelleFacture: React.FC = () => {
  const navigate = useNavigate();

  return (

    <div className="page-conteneur">
      {/* Importation SideBar */}
      <Sidebar />

      <div className="page-contenu">
        {/* Importation Header */}
        <HeaderNouvelleFacture
        surRetour={() => navigate("/facturation/factures")}
        />

        {/* Zone principale du contenu de la page ici */}
        <div className="zone-contenu">

          {/* Section de la première année */}
          <div className="section-annee">
            <h2 className="titre-annee">Client</h2>
            {/* liste des devis ici */}
            <p>Nom / société</p>
            <p>Adresse</p>
            <p>Email</p>
            <p>Numéro client</p>
          </div>

          {/* Section de la deuxiè année */}
          <div className="section-annee">
            <h2 className="titre-annee">Dates</h2>
            {/* Liste des devis ici */}
            <p>Date d'émission</p>
            <p>Date d'échéances</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default nouvelleFacture;