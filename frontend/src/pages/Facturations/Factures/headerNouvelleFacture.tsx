import React, { useState } from 'react';
import './headerNouvelleFacture.css';


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
const HeaderNouvelleFacture: React.FC<ProprieteHeaderNouvelleFacture> = ({
  titre = 'Nouvelle facture',
  surRetour,
  surApercu,
  surEnregistrerBrouillon,
  surEmettre,
  estFavori = false,
  surBasculesFavori,
}) => {

  // État local favori si aucun callback externe
  const [favoriLocal, setFavoriLocal] = useState(estFavori);

  const gererFavori = () => {
    setFavoriLocal(!favoriLocal);
    if (surBasculesFavori) surBasculesFavori();
  };


  return (
    <div className="header-nouvelle-facture-contenu">

      {/* ------------------------------ SECTION 1 : Retour à la liste ------------------------------ */}
      <button className="header-nouvelle-facture-retour" onClick={surRetour} aria-label="Retour à la liste">
        {/* Chevron gauche */}
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
          fill="currentColor" viewBox="0 0 24 24" >
          <path d="M14.29 6.29 8.59 12l5.7 5.71 1.42-1.42-4.3-4.29 4.3-4.29z"></path>
        </svg>
        Retour à la liste
      </button>
      {/* ------------------------------------------------------------------------------------------- */}


      {/* ------------------------- SECTION 2 : Titre + actions principales ------------------------- */}
      <div className="header-nouvelle-facture-top">

        {/* Titre de la facture */}
        <h1 className="header-nouvelle-facture-titre">{titre}</h1>

        {/* Actions de droite */}
        <div className="header-nouvelle-facture-actions">

          {/* Bouton Aperçu */}
          <button className="header-nouvelle-facture-btn-apercu" onClick={surApercu} aria-label="Aperçu">
            {/* Icône œil */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              fill="currentColor" viewBox="0 0 24 24" >
              <path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path><path d="M12 19c7.63 0 9.93-6.62 9.95-6.68.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68s-9.93 6.61-9.95 6.67c-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68Zm0-12c5.35 0 7.42 3.85 7.93 5-.5 1.16-2.58 5-7.93 5s-7.42-3.84-7.93-5c.5-1.16 2.58-5 7.93-5"></path>
            </svg>
            Aperçu
          </button>

          {/* Bouton Enregistrer en brouillon */}
          <button className="header-nouvelle-facture-btn-brouillon" onClick={surEnregistrerBrouillon}
            aria-label="Enregistrer en brouillon">
            {/* Icône enregistrer */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              fill="currentColor" viewBox="0 0 24 24" >
              <path d="M5 21h14c1.1 0 2-.9 2-2V8c0-.27-.11-.52-.29-.71l-4-4A1 1 0 0 0 16 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2m10-2H9v-5h6zM11 5h2v2h-2zM5 5h2v4h8V5h.59L19 8.41V19h-2v-5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v5H5z"></path>
            </svg>
            Enregistrer en brouillon
          </button>

          {/* Bouton Émettre la facture */}
          <button className="header-nouvelle-facture-btn-emettre" onClick={surEmettre}
            aria-label="Émettre la facture">
            {/* Icône émettre */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              fill="currentColor" viewBox="0 0 24 24" >
              <path d="M13 16V7.41l4.29 4.3 1.42-1.42L12 3.59l-6.71 6.7 1.42 1.42L11 7.41V16zm-9 2h16v2H4z"></path>
            </svg>
            Émettre la facture
          </button>

        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------- */}



      {/* --------- SECTION 3 : Statut + favori --------------------------------------- */}
      <div className="header-nouvelle-facture-sous-titre">

        {/* Badge statut brouillon */}
        <span className="header-nouvelle-facture-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
            fill="currentColor" viewBox="0 0 24 24" >
            <path d="M5 21h14c1.1 0 2-.9 2-2v-7h-2v7H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2"></path><path d="M7 13v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l9-9a.996.996 0 0 0 0-1.41l-3-3a.996.996 0 0 0-1.41 0l-9.01 8.99A1 1 0 0 0 7 13m10-7.59L18.59 7 17.5 8.09 15.91 6.5zm-8 8 5.5-5.5 1.59 1.59-5.5 5.5H9z"></path>
          </svg>
          Brouillon
        </span>


        {/* Bouton favori (étoile) */}
        <button
          className={`header-nouvelle-facture-btn-favori ${favoriLocal ? 'active' : ''}`}
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
      <hr className="header-nouvelle-facture-separateur" />

    </div>
  );
};

export default HeaderNouvelleFacture;