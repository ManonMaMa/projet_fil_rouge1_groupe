import React, { useState } from 'react';
import './HeaderDetailsDevis.css';


// ------------------------------ Propriétés du composant Header ------------------------------
interface ProprieteHeaderDetailsDevis {
    titre?: string;                        // Titre affiché 
    sousTitre?: String;
    surRetour?: () => void;                // Callback bouton retour
    surApercu?: () => void;                // Callback bouton aperçu
    surEnregistrerBrouillon?: () => void;  // Callback enregistrer en brouillon
    surEmettreDevis?: () => void;               // Callback émettre la facture
    estFavori?: boolean;                   // État favori
    surBasculesFavori?: () => void;        // Callback bascule favori
}


// ------------------------------ Composant principal ------------------------------
const HeaderDetailsDevis: React.FC<ProprieteHeaderDetailsDevis> = ({
    titre = 'Devis',
    sousTitre = '',
    surRetour,
    surEmettreDevis,
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
        <div className="header-details-devis-contenu">

            {/* ------------------------------ SECTION 1 : Retour à la liste ------------------------------ */}
            <button className="header-details-devis-retour" onClick={surRetour} aria-label="Retour à la liste">
                {/* Chevron gauche */}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                    fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M14.29 6.29 8.59 12l5.7 5.71 1.42-1.42-4.3-4.29 4.3-4.29z"></path>
                </svg>
                Retour à la liste
            </button>
            {/* ------------------------------------------------------------------------------------------- */}


            {/* ------------------------- SECTION 2 : Titre + actions principales ------------------------- */}
            <div className="header-details-devis-top">

                {/* Titre + Référence */}
                <div className="header-details-devis-titre-container">
                    <h1 className="header-details-devis-titre">
                        {titre}
                    </h1>

                    {sousTitre && (
                        <span className="header-details-devis-reference">
                            {sousTitre}
                        </span>
                    )}
                </div>

                

                {/* Actions de droite */}
                <div className="header-details-devis-actions">


                    {/* Bouton favori (étoile) */}
                    <button
                        className={`header-details-devis-btn-favori ${favoriLocal ? 'active' : ''}`}
                        onClick={() => {
                            console.log("Bouton ajouter aux favoris cliqué");
                            gererFavori
                        }}
                        aria-label={favoriLocal ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="m4.83 12.49 2.04 1.83-.83 2.9-1 3.5c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02l3-2L12 18.19l2.45 1.63 3 2a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1-3.5-.83-2.9 2.04-1.83 2.5-2.25c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-3.15-.25-2.56-.2-2.47-5.46a.998.998 0 0 0-1.82 0L8.61 8.05l-2.56.2-3.15.25c-.4.03-.74.3-.87.68s-.02.8.28 1.06l2.5 2.25Zm1.39-2.25 2.52-.2.62-.05.59-.05.84-1.86 1.2-2.66 1.2 2.66.84 1.86.59.05.62.05 2.52.2.83.07-.77.69-2.5 2.25-.46.42.17.6 1.25 4.38-3.74-2.49-.55-.37-.55.37-3.74 2.49 1.25-4.38.17-.6-.46-.42L6.16 11l-.77-.69z"></path>
                        </svg>
                    </button>



                    {/* Bouton envoyer */}
                    <button
                        className={`header-details-devis-btn-favori ${favoriLocal ? 'active' : ''}`}
                        onClick={() => {
                            console.log("Bouton envoyer le devis cliqué");
                        }}
                        aria-label={favoriLocal ? 'Retirer des favoris' : 'Ajouter aux favoris'}

                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="m2.6 10.42 7.64 3.34 3.34 7.64c.16.37.52.6.92.6h.05a1 1 0 0 0 .9-.69l5.5-17c.12-.36.02-.75-.24-1.01a.98.98 0 0 0-1.01-.24L2.69 8.55c-.4.13-.67.49-.69.9-.02.42.22.8.6.97m15.85-4.86-4.09 12.63-2.44-5.59c-.1-.23-.28-.41-.52-.52L5.81 9.64l12.63-4.09Z"></path>
                        </svg>
                    </button>



                    {/* Bouton Émettre le devis */}
                    <button className="header-details-devis-btn-emettre" onClick={surEmettreDevis}
                        aria-label="Émettre la devis">
                        {/* Icône émettre */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="M4 18h16v2H4zm7-15v7H7l5 6 5-6h-4V3z"></path>
                        </svg>
                        Émettre le devis
                    </button>

                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------- */}



            {/* --------- SECTION 3 : Statut + favori --------------------------------------- */}
            <div className="header-details-devis-sous-titre">

                {/* Badge statut brouillon */}
                <span className="header-details-devis-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                        fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M5 21h14c1.1 0 2-.9 2-2v-7h-2v7H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2"></path><path d="M7 13v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l9-9a.996.996 0 0 0 0-1.41l-3-3a.996.996 0 0 0-1.41 0l-9.01 8.99A1 1 0 0 0 7 13m10-7.59L18.59 7 17.5 8.09 15.91 6.5zm-8 8 5.5-5.5 1.59 1.59-5.5 5.5H9z"></path>
                    </svg>
                    Brouillon
                </span>
            </div>
            {/* ----------------------------------------------------------------------------- */}

            {/* Séparateur */}
            <hr className="header-details-devis-separateur" />

        </div>
    );
};

export default HeaderDetailsDevis;