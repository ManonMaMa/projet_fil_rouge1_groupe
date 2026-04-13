import React from 'react';
import { useNavigate } from "react-router-dom";
import HeaderNouvelleFacture from './headerNouvelleFacture';
import Sidebar from "../../../assets/composants/Sidebar"
import Input from '../../../assets/composants/input';
import './nouvelleFacture.css';


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

          {/* Ligne 1 */}
          <div className="ligne-1">

            {/* Section Gauche */}
            <div className="nouvelle-facture-gauche">
              <div className="titre-section-nouvelle-facture">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  fill="currentColor" viewBox="0 0 24 24" >
                  <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path>
                </svg>
                <h2>Client</h2>
              </div>

              <div className="ligne-1-nouvelle-facture">
                <Input label="Nom / Société" type="" placeholder="Séléctionner un client" />
              </div>

              <div className="ligne-2-nouvelle-facture">
                <Input label="Adresse" type="" placeholder="75 rue du puis 75000 Paris" />
                <Input label="Email" type="" placeholder="example@email.com" />
              </div>

              <div className="ligne-3-nouvelle-facture">
                <Input label="Numéro client" type="" placeholder="" />
              </div>
            </div>



            {/* Section Droite */}
            <div className="nouvelle-facture-droite">

              <div className="nouvelle-facture-droite-1">
                <div className="titre-section-nouvelle-facture">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M5 20V8h14V6v14z"></path><path d="M12 13h5v5h-5z"></path>
                  </svg>
                  <h2>Date</h2>
                </div>

                <div className="ligne-2-nouvelle-facture">
                  <Input label="Date d'émission" type="" placeholder="" />
                  <Input label="Date d'échéance" type="" placeholder="" />
                </div>
              </div>


              <div className="nouvelle-facture-droite-2">
                <div className="titre-section-nouvelle-facture">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M17 13c-1.1 0-2-.9-2-2v-.36c0-.47.15-.91.43-1.23a4.49 4.49 0 0 0 .96-3.88c-.35-1.66-1.7-3.03-3.35-3.4-1.37-.31-2.77 0-3.85.86s-1.7 2.14-1.7 3.52c0 1.08.39 2.12 1.1 2.94.26.3.4.73.4 1.2v.36c0 1.1-.9 2-2 2-2.21 0-4 1.79-4 4v1c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-1c0-2.21-1.79-4-4-4ZM5 17c0-1.1.9-2 2-2 2.21 0 4-1.79 4-4v-.36c0-.96-.32-1.85-.89-2.51a2.503 2.503 0 0 1 .33-3.59c.61-.49 1.38-.65 2.16-.48.9.21 1.64.96 1.84 1.87.17.8-.02 1.57-.53 2.17-.59.69-.91 1.59-.91 2.53v.36c0 2.21 1.79 4 4 4 1.1 0 2 .9 2 2H5Zm-2 3h18v2H3z"></path>
                  </svg>
                  <h2>Numéro de facture</h2>
                </div>

                <div className="ligne-1-nouvelle-facture">
                  <Input label="Numéro de facture" type="" placeholder="Le numéro sera attribué lors de l'émission" />
                </div>
              </div>
            </div>
          </div>





        </div>
      </div>
    </div>

  );
};

export default nouvelleFacture;