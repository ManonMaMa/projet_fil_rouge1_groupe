import React from 'react';
import { useNavigate } from "react-router-dom";
import HeaderNouvelleFacture from './headerNouvelleFacture';
import Sidebar from "../../../assets/composants/Sidebar"
import './nouvelleFacture.css'; // CSS de la page devis
import Input from '../../../assets/composants/input';



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
            {/* Import composant input */}
            <Input label="Nom / Société" type="" placeholder="" />
            <Input label="Adresse" type="" placeholder="" />
            <Input label="Email" type="" placeholder="exemple@email.com" />
            <Input label="Numéro client" type="" placeholder="" />


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