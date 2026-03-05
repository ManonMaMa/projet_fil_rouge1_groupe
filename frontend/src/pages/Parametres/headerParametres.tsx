import React from 'react';
import './headerParametres.css'; // Import CSS du header



interface Onglet {
  id: string;         // Identifiant de l'onglet
  etiquette: string;  // Libellé affiché
  compteur?: number;  // Compteur (nombre d'éléments)
}


// ------------------------- Propriété du composant Header --------------------------
interface ProprieteHeader {
  titre: string;                                    // Titre du header (Page)
  onglets?: Onglet[];                               // Liste d'onglets
  ongletActif?: string;                             // ID de l'onglet actif
  surChangementOnglet?: (ongletID: string) => void; // Callback lors du changement d'onglets
  afficherBasculeFiltre?: boolean;                  // Affiche ou non le bouton de filtres
  nouvelElement?: () => void;                       // Callback pour le bouton "Nouvel élément"
  texteBoutonNouvelElement?: string;  
}


// -------------------------------- Composant Header --------------------------------
const Header: React.FC<ProprieteHeader> = ({
  titre,
  onglets = [],                                 // Valeur par défaut : tableau vide
  ongletActif = onglets[0]?.id || '',           // Onglet actif par défaut
  surChangementOnglet,

}) => {


  return (
    // Container principal du header
    <div className="header-contenu">

      {/* ----------------- SECTION 1 : Barre supérieure - Titre + actions ---------------- */}
      <div className="header-top">
        <h1 className="header-titre">{titre}</h1>
      </div>
      {/* --------------------------------------------------------------------------------- */}



      {/* ------------------------------ SECTION 2 : Onglets ------------------------------ */}
      {onglets.length > 0 && (
        <div className="header-onglets">
          <div className="onglets-list">
            {onglets.map((onglets) => (
              <button
                key={onglets.id}
                className={`onglets-button ${ongletActif === onglets.id ? 'active' : ''}`}
                onClick={() => surChangementOnglet?.(onglets.id)}
              >
                {onglets.etiquette}

                {/* Bulle compteur */}
                {onglets.compteur !== undefined && (
                  <span className="tab-count">{onglets.compteur}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* --------------------------------------------------------------------------------- */}
    </div>
  );
};

export default Header;