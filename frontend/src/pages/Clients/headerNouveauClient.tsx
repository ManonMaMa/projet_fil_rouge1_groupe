import React, { useState } from 'react';
import './headerNouveauClient.css';


// ------------------------------ Propriétés du composant Header ------------------------------
interface ProprieteHeaderNouvelleFacture {
  titre?: string;                        // Titre affiché 
  surRetour?: () => void;                // Callback bouton retour
  surApercu?: () => void;                // Callback bouton aperçu
  surEnregistrerBrouillon?: () => void;  // Callback enregistrer en brouillon
  surEmettre?: () => void;               // Callback émettre la facture
  estFavori?: boolean;                   // État favori
  surBasculesFavori?: () => void;        // Callback bascule favori
}


// ------------------------------ Composant principal ------------------------------
const HeaderNouveauClient: React.FC<ProprieteHeaderNouvelleFacture> = ({
  titre = 'Nouveau Client',
  surRetour,
  surEmettre,
  estFavori = false,
  surBasculesFavori,
}) => {


  // Fonction enregistrer le client
  const gererEnregistrerClient = () => {
    console.log("Bouton Enregistrer le client cliqué");

    if (surEmettre) {
      surEmettre();
    }
  };


  // Fonction annuler les modifications
  const gererAnnulerModifications = () => {
    console.log("Bouton Annuler les modifications cliqué")

    if (surEmettre) {
      surEmettre();
    }
  }



  // État local favori si aucun callback externe
  const [favoriLocal, setFavoriLocal] = useState(estFavori);


  const gererFavori = () => {
    setFavoriLocal(!favoriLocal);
    if (surBasculesFavori) surBasculesFavori();
  };


  return (
    <div className="header-nouveau-client-contenu">

      {/* ------------------------------ SECTION 1 : Retour à la liste ------------------------------ */}
      <button className="header-nouveau-client-retour" onClick={surRetour} aria-label="Retour à la liste">
        {/* Chevron gauche */}
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
          fill="currentColor" viewBox="0 0 24 24" >
          <path d="M14.29 6.29 8.59 12l5.7 5.71 1.42-1.42-4.3-4.29 4.3-4.29z"></path>
        </svg>
        Retour à la liste
      </button>
      {/* ------------------------------------------------------------------------------------------- */}


      {/* ------------------------- SECTION 2 : Titre + actions principales ------------------------- */}
      <div className="header-nouveau-document-top">

        {/* Titre de la facture */}
        <h1 className="header-nouveau-document-titre">{titre}</h1>

        {/* Actions de droite */}
        <div className="header-nouveau-document-actions">


          {/* Bouton Annuler les modifications */}
          <button 
          className="header-nouveau-document-btn-brouillon" 
          onClick={gererAnnulerModifications}
            aria-label="Annuler les modifications"
            >
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16"
              fill="currentColor" 
              viewBox="0 0 24 24" 
            >
              <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
            </svg>

            Annuler les modifications
          </button>



          {/* Bouton Enregistrer le client */}
          <button
            className="header-nouveau-document-btn-emettre"
            onClick={gererEnregistrerClient}
            aria-label="Enregistrer le client"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5 21h14c1.1 0 2-.9 2-2V8c0-.27-.11-.52-.29-.71l-4-4A1 1 0 0 0 16 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2m10-2H9v-5h6zM11 5h2v2h-2zM5 5h2v4h8V5h.59L19 8.41V19h-2v-5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v5H5z"></path>
            </svg>

            Enregistrer le client
          </button>

        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------- */}



      {/* --------- SECTION 3 : Statut + favori --------------------------------------- */}
      <div className="header-nouveau-document-sous-titre">

        {/* Badge statut brouillon */}
        <span className="header-nouveau-document-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
            fill="currentColor" viewBox="0 0 24 24" >
            <path d="M5 21h14c1.1 0 2-.9 2-2v-7h-2v7H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2"></path><path d="M7 13v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l9-9a.996.996 0 0 0 0-1.41l-3-3a.996.996 0 0 0-1.41 0l-9.01 8.99A1 1 0 0 0 7 13m10-7.59L18.59 7 17.5 8.09 15.91 6.5zm-8 8 5.5-5.5 1.59 1.59-5.5 5.5H9z"></path>
          </svg>
          Brouillon
        </span>


        {/* Bouton favori (étoile) */}
        <button
          className={`header-nouveau-document-btn-favori ${favoriLocal ? 'active' : ''}`}
          onClick={gererFavori}
          aria-label={favoriLocal ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
            fill="currentColor" viewBox="0 0 24 24" >
            <path d="m4.83 12.49 2.04 1.83-.83 2.9-1 3.5c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02l3-2L12 18.19l2.45 1.63 3 2a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1-3.5-.83-2.9 2.04-1.83 2.5-2.25c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-3.15-.25-2.56-.2-2.47-5.46a.998.998 0 0 0-1.82 0L8.61 8.05l-2.56.2-3.15.25c-.4.03-.74.3-.87.68s-.02.8.28 1.06l2.5 2.25Zm1.39-2.25 2.52-.2.62-.05.59-.05.84-1.86 1.2-2.66 1.2 2.66.84 1.86.59.05.62.05 2.52.2.83.07-.77.69-2.5 2.25-.46.42.17.6 1.25 4.38-3.74-2.49-.55-.37-.55.37-3.74 2.49 1.25-4.38.17-.6-.46-.42L6.16 11l-.77-.69z"></path>
          </svg>
        </button>

      </div>
      {/* ----------------------------------------------------------------------------- */}

      {/* Séparateur */}
      <hr className="header-nouveau-document-separateur" />

    </div >
  );
};

export default HeaderNouveauClient;