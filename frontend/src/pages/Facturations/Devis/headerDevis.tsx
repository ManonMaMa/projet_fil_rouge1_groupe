// -------------------------------- IMPORT -------------------------------- //
import React, { useState } from 'react';
import './headerDevis.css';
// ------------------------------------------------------------------------ //



interface Onglet {
  id: string;         // ID de l'onglet
  etiquette: string;  // Texte affiché
  compteur?: number;  // Compteur
}

// --------------------- Propriété du composant Header -------------------- //
interface ProprieteHeaderDevis {
  titre: string;                                    // Titre du header (Page)
  ongletsDevis?: Onglet[];                          // Liste des onglets
  ongletActif?: string;                             // Onglet sléctionné au départ
  surChangementOnglet?: (ongletID: string) => void; // Foinction appelée quand on change d'onglets
  afficherBasculeFiltre?: boolean;                  // Affiche ou non le bouton de filtres
  CreerNouveauDevis?: () => void;                   // Fonction pour créer un devis
  texteBoutonCreerNouveauDevis?: string;            // Texte du bouton
}
// ------------------------------------------------------------------------ //



// -------------------------- COMPOSANT PRINCIPAL ------------------------- // 
const HeaderDevis: React.FC<ProprieteHeaderDevis> = ({
  titre,
  ongletsDevis = [],                                // Si rien : tableau vide
  ongletActif = ongletsDevis[0]?.id || '',          // Premier onglet actif par défaut
  surChangementOnglet,
  afficherBasculeFiltre = true,                     // Affichage du bouton filtre par défaut
  CreerNouveauDevis,
  texteBoutonCreerNouveauDevis = ''                 // Texte vide par défaut du bouton d'action
}) => {


  // Garder en mémoire l'onglet sélectionné
  const [ongletCourant, setOngletCourant] = useState(ongletActif);

  // Garder en mémoire si la barre des filtres est visible
  const [afficherFiltres, setAfficherFiltres] = useState(false);

  // Gestion du clic sur un onglet
  const gererClicOnglet = (ongletID: string) => {
    setOngletCourant(ongletID); // changer l'onglet actif

    // Appelle la fonction parent si elle existe
    if (surChangementOnglet) {
      surChangementOnglet(ongletID);
    }
  };

  // Afficher / Cacher les filtres
  const basculerFiltres = () => {
    setAfficherFiltres(!afficherFiltres);
  };



  return (
    <div className="header-devis-contenu">

      {/* ----------------- SECTION 1 : Barre supérieure - Titre + actions ---------------- */}
      <div className="header-devis-top">
        <h1 className="header-devis-titre">{titre}</h1>

        <div className="header-devis-actions">
          {/* Bouton filtre */}
          {afficherBasculeFiltre && (
            <button
              className={`header-devis-bouton-filtre ${afficherFiltres ? 'active' : ''}`} // actif si ouvert
              onClick={basculerFiltres} // toggle
              aria-label="Basculer filtres"
            >
              {/* Icône filtre */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M3 5h18v2H3zm2.5 6h13v2h-13zM8 17h8v2H8z"></path>
              </svg>
            </button>
          )}

          {/* Bouton créer devis */}
          {CreerNouveauDevis && (
            <button className="header-devis-nouveau-devis-btn" onClick={CreerNouveauDevis}>
              <span className="header-devis-plus-icon">+</span>
              {texteBoutonCreerNouveauDevis}
            </button>
          )}
        </div>
      </div>
      {/* --------------------------------------------------------------------------------- */}



      {/* ------------------------------ SECTION 2 : Onglets ------------------------------ */}
      {ongletsDevis.length > 0 && (
        <div className="header-devis-onglets">
          <div className="header-devis-onglets-list">
            {ongletsDevis.map((ongletsDevis) => ( // Boucle sur chaque onglet
              <button
                key={ongletsDevis.id}
                className={`header-devis-onglets-button ${ongletCourant === ongletsDevis.id ? 'active' : ''}`}
                onClick={() => gererClicOnglet(ongletsDevis.id)}
              >
                {ongletsDevis.etiquette} 

                {/* Bulle compteur */}
                {ongletsDevis.compteur !== undefined && (
                  <span className="header-devis-tab-count">{ongletsDevis.compteur}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* --------------------------------------------------------------------------------- */}



      {/* --------------------- SECTION 3 : Barre de filtres amovible --------------------- */}
      {afficherFiltres && (
        <div className="header-devis-filter-bar">

          {/* Barre de recherche */}
          <div className="header-devis-filter-search">
            {/* Icône */}
            <svg className="header-devis-search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M7 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM14 14l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

            <input
              type="text"
              placeholder="Rechercher..."
              className="header-devis-filter-search-input"
            />
          </div>



          {/* Boutons de filtres (Non fonctionnels)*/}
          <div className="header-devis-filter-controls">

            {/* ----- Date ----- */}
            <button className="header-devis-filter-btn">
              {/* Icône */}
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M5 20V8h14V6v14z"></path>
              </svg>
              Date
              {/* Chevron */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
              </svg>
            </button>


            {/* ----- Type ----- */}
            <button className="header-devis-filter-btn">
              {/* Icône */}
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M7 10h10v2H7zm0 4h7v2H7z"></path><path d="M19 3h-2c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1H5c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 17H5V5h2v2h10V5h2z"></path>
              </svg>
              Type
              {/* Chevron */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
              </svg>
            </button>


            {/* ----- Statut ----- */}
            <button className="header-devis-filter-btn">
              {/* Icône */}
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M13.71 3.29A1 1 0 0 0 13 3H4c-.55 0-1 .45-1 1v9c0 .27.11.52.29.71l8 8c.2.2.45.29.71.29s.51-.1.71-.29l9-9a.996.996 0 0 0 0-1.41zM12 19.58l-7-7V4.99h7.59l7 7z"></path><path d="M9 7c-1.11 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"></path>
              </svg>
              Statut
              {/* Chevron */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
              </svg>
            </button>


            {/* ----- Montant ----- */}
            <button className="header-devis-filter-btn">
              {/* Icône */}
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M7.51 18.35c1.63 1.71 3.8 2.65 6.11 2.65s4.48-.94 6.11-2.65l-1.45-1.38c-1.25 1.31-2.9 2.03-4.66 2.03s-3.41-.72-4.66-2.03c-.55-.58-.99-1.25-1.31-1.97h4.36v-2H7.08c-.04-.33-.07-.66-.07-1s.03-.67.07-1h4.93V9H7.65c.32-.72.76-1.39 1.31-1.97C10.21 5.72 11.86 5 13.62 5s3.41.72 4.66 2.03l1.45-1.38C18.1 3.94 15.93 3 13.62 3s-4.48.94-6.11 2.65C6.59 6.61 5.92 7.75 5.5 9H3v2h2.06c-.03.33-.06.66-.06 1s.02.67.06 1H3v2h2.5a9 9 0 0 0 2.01 3.35"></path>
              </svg>
              Montant
              {/* Chevron */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
              </svg>
            </button>
          </div>
          {/* --------------------------------------------------------------------------------- */}



          {/* Actions */}
          <div className="header-devis-filter-actions">
            <button className="header-devis-btn-secondary">Réinitialiser</button>
            <button className="header-devis-btn-primary">Appliquer</button>
          </div>
        </div>
      )}
    </div>
  );
};
// ------------------------------------------------------------------------ //  


export default HeaderDevis;