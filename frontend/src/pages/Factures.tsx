import React from 'react';
import Header from '../assets/composants/headerFactures';
import './Factures.css'; // CSS de la page facture



// Composant principal des Factures
const Factures: React.FC = () => {

  // Définition des onglets de navigations pour le header
  const Onglets = [
    { id: 'tous', etiquette: 'Tous', compteur: 48 },
    { id: 'recents', etiquette: 'Récents', compteur: 5 },
    { id: 'favoris', etiquette: 'Favoris', compteur: 3 }
  ];

  // Fonction appelée lorsqu'un onglet est sélectionné
  const changementOnglet = (tabId: string) => {
    console.log('Onglet remplacé par :', tabId);
    // [Ajouter la logique pour filtrer les factures selon l'onglet]
  };

  // Fonction déclanchée pour créer une nouvelle facture
  const NouvelleFacture = () => {
    console.log('créer une nouvelle facture');
    // [Ajouter la logique pour créer une facture --> envoie vers page de création de facture]
  };



  return (
    <div className="page-conteneur">
      {/* [Importation de la SideBar ici] */}
      
      
      <div className="page-contenu">
        {/* Header */}
        <Header
          titre="Factures"                            // changer le titre de la page
          onglets={Onglets}                           // Onglets à afficher
          ongletActif="tous"                          // ID de l'onglet actif par défaut
          surChangementOnglet={changementOnglet}      // callback pour changement d'onglet
          afficherBasculeFiltre={true}                // affiche le bouton bascule filtre
          nouvelElement={NouvelleFacture}             // callback pour créer une nouvelle facture
          texteBoutonNouvelElement="Nouvelle Facture" // Texte du bouton
        />
        


        {/* Zone principale du contenu de la page ici */}
        <div className="zone-contenu">

            {/* Section de la première année */}
            <div className="section-annee">
                <h2 className="titre-annee">2026</h2>
                {/* liste des factures ici */}
                <p>Facture 1</p>
                <p>Facture 2</p>
                <p>Facture 3</p>
                <p>Facture 4</p>
                <p>Facture 5</p>
                <p>Facture 6</p>
                <p>Facture 7</p>
            </div>
          
            {/* Section de la duexième année */}
            <div className="section-annee">
                <h2 className="titre-annee">2025</h2>
                {/* Liste des factures ici */}
                <p>Facture 1</p>
                <p>Facture 2</p>
                <p>Facture 3</p>
                <p>Facture 4</p>
                <p>Facture 5</p>
                <p>Facture 6</p>
                <p>Facture 7</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Factures;