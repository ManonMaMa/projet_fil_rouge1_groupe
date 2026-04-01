import React, { useState } from 'react';
import './headerFinances.css'; // Import CSS du header



interface Onglet {
  id: string;         // Identifiant de l'onglet
  etiquette: string;  // Libellé affiché
  compteur?: number;  // Compteur (nombre d'éléments)
}


// ------------------------- Propriété du composant Header --------------------------
interface ProprieteHeader {
  titre: string;                                    // Titre du header (Page)
  // onglets?: Onglet[];                               // Liste d'onglets
  // ongletActif?: string;                             // ID de l'onglet actif
  // surChangementOnglet?: (ongletID: string) => void; // Callback lors du changement d'onglets
  // afficherBasculeFiltre?: boolean;                  // Affiche ou non le bouton de filtres
  nouvelElement?: () => void;                       // Callback pour le bouton "Nouvel élément"
  texteBoutonNouvelElement?: string;  
}


// -------------------------------- Composant Header --------------------------------
const Header: React.FC<ProprieteHeader> = ({
  titre,
  // onglets = [],                                 // Valeur par défaut : tableau vide
  // ongletActif = onglets[0]?.id || '',           // Onglet actif par défaut
  // surChangementOnglet,
  // afficherBasculeFiltre = true,                 // Affichage du bouton filtre par défaut
  nouvelElement,
  texteBoutonNouvelElement = 'Nouvelle Activité' // Libellé par défaut du bouton d'action
}) => {


  // // État local pour suivre l'onglet actuellement selectionné
  // const [ongletCourant, setOngletCourant] = useState(ongletActif);

  // // État local pour afficher / masquer la barre de filtres
  // const [afficherFiltres, setAfficherFiltres] = useState(false);


  // // Gestion du clic sur un onglet
  // const gererClicOnglet = (ongletID: string) => {
  //   setOngletCourant(ongletID);

  //   // Appel du callback parent si fourni
  //   if (surChangementOnglet) {
  //     surChangementOnglet(ongletID);
  //   }
  // };


  // // Bascule l'affichage des filtres
  // const basculerFiltres = () => {
  //   setAfficherFiltres(!afficherFiltres);
  // };



  return (
    // Container principal du header
    <div className="header-contenu">

      {/* ----------------- SECTION 1 : Barre supérieure - Titre + actions ---------------- */}
      <div className="header-top">
        <h1 className="header-titre">{titre}</h1>
        
          
          {/* Bouton création nouvelle activité */}
          {nouvelElement && (
            <button className="nouvelle-activité-btn" onClick={nouvelElement}>
              <span className="plus-icon">+</span>
              {texteBoutonNouvelElement}
            </button>
          )}
        </div>
      </div>







  );
};

export default Header;