import React from 'react';
import { useNavigate } from "react-router-dom";
import HeaderNouvelleFacture from './headerNouvelleFacture';
import Sidebar from "../../../assets/composants/Sidebar"
import Input from '../../../assets/composants/input';

import EnTeteDetailsFactures from '../../../assets/composants/enteteDetailsFactures';

import './nouvelleFacture.css';
import LigneDetailsFactures from '../../../assets/composants/ligneDetailsFactures';


const nouvelleFacture: React.FC = () => {
  const navigate = useNavigate();

  return (

    <div className="page-conteneur-nouvelle-facture">
      {/* Importation SideBar */}
      <Sidebar />

      <div className="page-contenu-nouvelle-facture">
        <HeaderNouvelleFacture
          surRetour={() => navigate("/facturation/factures")}
        />



        <div className="zone-contenu-nouvelle-facture">

          {/* Ligne 1 */}
          <div className="ligne-1-nouvelle-facture">

            {/* Section Gauche */}
            <div className="ligne-1-contenu-gauche-nouvelle-facture">
              <div className="titre-section-nouvelle-facture">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  fill="currentColor" viewBox="0 0 24 24" >
                  <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path>
                </svg>
                <h2>Client</h2>
              </div>

              <div className="input-information-client-nouvelle-facture">
                <div className="client-ligne-1">
                  <Input label="Nom / Société" type="" placeholder="" />
                </div>
                <div className="client-ligne-2">
                  <Input label="Adresse" type="" placeholder="" />
                  <Input label="Email" type="" placeholder="" />
                </div>
                <div className="client-ligne-3">
                  <Input label="Numéro Client" type="" placeholder="" />
                </div>
              </div>
            </div>



            {/* Section Droite */}
            <div className="ligne-1-contenu-droite-nouvelle-facture">
              <div>
                <div className="titre-section-nouvelle-facture">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M5 20V8h14V6v14z"></path><path d="M12 13h5v5h-5z"></path>
                  </svg>
                  <h2>Dates</h2>
                </div>

                <div className="">
                  <div className="client-ligne-1">
                    <Input label="Date d'émission" type="" placeholder="" />
                    <Input label="Date d'échéance" type="" placeholder="" />
                  </div>
                </div>
              </div>


              <div>
                <div className="titre-section-nouvelle-facture">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M17 13c-1.1 0-2-.9-2-2v-.36c0-.47.15-.91.43-1.23a4.49 4.49 0 0 0 .96-3.88c-.35-1.66-1.7-3.03-3.35-3.4-1.37-.31-2.77 0-3.85.86s-1.7 2.14-1.7 3.52c0 1.08.39 2.12 1.1 2.94.26.3.4.73.4 1.2v.36c0 1.1-.9 2-2 2-2.21 0-4 1.79-4 4v1c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-1c0-2.21-1.79-4-4-4ZM5 17c0-1.1.9-2 2-2 2.21 0 4-1.79 4-4v-.36c0-.96-.32-1.85-.89-2.51a2.503 2.503 0 0 1 .33-3.59c.61-.49 1.38-.65 2.16-.48.9.21 1.64.96 1.84 1.87.17.8-.02 1.57-.53 2.17-.59.69-.91 1.59-.91 2.53v.36c0 2.21 1.79 4 4 4 1.1 0 2 .9 2 2H5Zm-2 3h18v2H3z"></path>
                  </svg>
                  <h2>Numéro de facture</h2>
                </div>

                <div className="input-information-contact">
                  <div className="client-ligne-1">
                    <Input label="Numéro de facture" type="" placeholder="Le numéro vous sera attribué directement lors de l'émission" />
                  </div>
                </div>
              </div>

            </div>
          </div>


          {/* Ligne 2 */}
          <div className="ligne-2-nouvelle-facture">

            <div className="titre-section-nouvelle-facture">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M19.67 2.61c-.81-.81-2.14-.81-2.95 0L3.38 15.95c-.13.13-.22.29-.26.46l-1.09 4.34c-.08.34.01.7.26.95.19.19.45.29.71.29.08 0 .16 0 .24-.03l4.34-1.09c.18-.04.34-.13.46-.26L21.38 7.27c.81-.81.81-2.14 0-2.95L19.66 2.6ZM6.83 19.01l-2.46.61.61-2.46 9.96-9.94 1.84 1.84zM19.98 5.86 18.2 7.64 16.36 5.8l1.78-1.78s.09-.03.12 0l1.72 1.72s.03.09 0 .12"></path>
              </svg>
              <h2>Détails</h2>
            </div>

            <div className="input-information-details-nouvelle-facture">
              <EnTeteDetailsFactures />
              <LigneDetailsFactures
                id="1"
                description="Frontend developpeur"
                quantite="1"
                prix="100"
                tva="10"
                total="90"
                surOptions={(id) => console.log('Options', id)}
              />
            </div>

            <div className="input-information-details-2-nouvelle-facture">
              <div>
                <button className="nouvelle-facture-ajouter-ligne" aria-label="Ajouter une ligne">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                    fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M3 13h8v8h2v-8h8v-2h-8V3h-2v8H3z"></path>
                  </svg>
                  Ajouter une ligne
                </button>
              </div>

              <div>
                <div className="total-ht-nouvelle-facture">
                  <p>Total HT</p>
                  <p>200€</p>
                </div>

                <div className="total-tva-nouvelle-facture">
                  <p>TVA</p>
                  <p>20 %</p>
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