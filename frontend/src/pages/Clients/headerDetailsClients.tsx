import React, { useState } from 'react';
import './headerDetailsClients.css';


// ------------------------------ Propriétés du composant Header ------------------------------
interface ProprieteHeaderDetailsClients {
    titre?: string;                        // Titre affiché 
    surRetourClients?: () => void;                // Callback bouton retour
    surApercu?: () => void;                // Callback bouton aperçu
    surEnregistrerBrouillon?: () => void;  // Callback enregistrer en brouillon
    surEmettre?: () => void;               // Callback émettre la facture
    estFavori?: boolean;                   // État favori
    surBasculesFavori?: () => void;        // Callback bascule favori
}


// ------------------------------ Composant principal ------------------------------
const HeaderDetailsClients: React.FC<ProprieteHeaderDetailsClients> = ({
    titre = '',
    surRetourClients,
    surEmettre,

}) => {




    return (
        <div className="header-details-clients-contenu">

            {/* ------------------------------ SECTION 1 : Retour à la liste ------------------------------ */}
            <button className="header-details-clients-retour" onClick={surRetourClients} aria-label="Retour à la liste">
                {/* Chevron gauche */}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                    fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M14.29 6.29 8.59 12l5.7 5.71 1.42-1.42-4.3-4.29 4.3-4.29z"></path>
                </svg>
                Retour à la liste
            </button>
            {/* ------------------------------------------------------------------------------------------- */}



            {/* ------------------------- SECTION 2 : Titre + actions principales ------------------------- */}
            <div className="header-details-clients-top">

                {/* Titre de la facture */}
                <h1 className="header-details-clients-titre">{titre}</h1>

                {/* Actions de droite */}
                <div className="header-details-clients-actions">

                    {/* Bouton Favoris */}
                    <button
                        className={`header-details-clients-btn-favori`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="m4.83 12.49 2.04 1.83-.83 2.9-1 3.5c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02l3-2L12 18.19l2.45 1.63 3 2a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1-3.5-.83-2.9 2.04-1.83 2.5-2.25c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-3.15-.25-2.56-.2-2.47-5.46a.998.998 0 0 0-1.82 0L8.61 8.05l-2.56.2-3.15.25c-.4.03-.74.3-.87.68s-.02.8.28 1.06l2.5 2.25Zm1.39-2.25 2.52-.2.62-.05.59-.05.84-1.86 1.2-2.66 1.2 2.66.84 1.86.59.05.62.05 2.52.2.83.07-.77.69-2.5 2.25-.46.42.17.6 1.25 4.38-3.74-2.49-.55-.37-.55.37-3.74 2.49 1.25-4.38.17-.6-.46-.42L6.16 11l-.77-.69z"></path>
                        </svg>
                    </button>


                    {/* Bouton Modifier */}
                    <button
                        className={`header-details-clients-btn-modifier`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="M19.67 2.61c-.81-.81-2.14-.81-2.95 0L3.38 15.95c-.13.13-.22.29-.26.46l-1.09 4.34c-.08.34.01.7.26.95.19.19.45.29.71.29.08 0 .16 0 .24-.03l4.34-1.09c.18-.04.34-.13.46-.26L21.38 7.27c.81-.81.81-2.14 0-2.95L19.66 2.6ZM6.83 19.01l-2.46.61.61-2.46 9.96-9.94 1.84 1.84zM19.98 5.86 18.2 7.64 16.36 5.8l1.78-1.78s.09-.03.12 0l1.72 1.72s.03.09 0 .12"></path>
                        </svg>
                    </button>


                    {/* Bouton Nouvelle facture */}
                    <button className="header-details-clients-btn-nouvelle" onClick={surEmettre}
                        aria-label="Émettre la facture">
                        {/* Icône émettre */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="M3 13h8v8h2v-8h8v-2h-8V3h-2v8H3z"></path>
                        </svg>
                        Nouvelle facture
                    </button>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------- */}



            {/* ----------------------------------- SECTION 3 : Statut ------------------------------------ */}
            <div className="header-details-clients-sous-titre">

                {/* Badge statut brouillon */}
                <span className="header-details-clients-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                        fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M9 15.59 4.71 11.3 3.3 12.71l5 5c.2.2.45.29.71.29s.51-.1.71-.29l11-11-1.41-1.41L9.02 15.59Z"></path>
                    </svg>
                    Actif
                </span>
            </div>
            {/* ------------------------------------------------------------------------------------------- */}


            {/* Séparateur */}
            <hr className="header-details-clients-separateur" />
        </div>
    );
};

export default HeaderDetailsClients;