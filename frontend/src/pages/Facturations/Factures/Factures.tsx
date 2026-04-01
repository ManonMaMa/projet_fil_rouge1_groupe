import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../../../assets/composants/headerFactures';
import Sidebar from "../../../assets/composants/Sidebar"
import './Factures.css'; // CSS de la page facture
import LigneFacture from '../../../assets/composants/ligneFacture';
import EnTeteFactures from '../../../assets/composants/enteteFactures';


// Composant principal des Factures
const Factures: React.FC = () => {

  const navigate = useNavigate();

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
    navigate("/facturation/factures/nouvelle");
  };



  return (
    <div className="page-conteneur-facture">
      {/* [Importation de la SideBar ici] */}
      <Sidebar />


      <div className="page-contenu-facture">
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
        <div className="zone-contenu-factures">


          {/* Section de la première année */}
          <div className="section-annee">
            <h2 className="titre-annee">2026</h2>
            {/* liste des factures ici */}
            <EnTeteFactures />

            {/* 1ere facture */}
            <LigneFacture
              id="1"
              date="01/01/2026"
              numero="1910-86"
              clientFournisseur="Victor Albert"
              echeance="31/01/2026"
              montantTTC="1 150 €"
              statut="en_attente"
              surFavoris={(id) => console.log('Voir', id)}
              surOptions={(id) => console.log('Options', id)}
            />

            {/* 2eme facture */}
            <LigneFacture
              id="2"
              date="05/01/2026"
              numero="1826-92"
              clientFournisseur="Alain Jean"
              echeance="12/02/2026"
              montantTTC="550 €"
              statut="annule"
              surFavoris={(id) => console.log('Voir', id)}
              surOptions={(id) => console.log('Options', id)}
            />

            {/* 3eme facture */}
            <LigneFacture
              id="3"
              date="05/01/2026"
              numero="1826-92"
              clientFournisseur="Dupont Camille"
              echeance="12/02/2026"
              montantTTC="550 €"
              statut="paye"
              surFavoris={(id) => console.log('Voir', id)}
              surOptions={(id) => console.log('Options', id)}
            />

            <LigneFacture
              id="4"
              date="01/01/2026"
              numero="1910-86"
              clientFournisseur="Victor Albert"
              echeance="31/01/2026"
              montantTTC="1 150 €"
              statut="en_attente"
              surFavoris={(id) => console.log('Voir', id)}
              surOptions={(id) => console.log('Options', id)}
            />

            <LigneFacture
              id="5"
              date="05/01/2026"
              numero="1826-92"
              clientFournisseur="Alain Jean"
              echeance="12/02/2026"
              montantTTC="550 €"
              statut="paye"
              surFavoris={(id) => console.log('Voir', id)}
              surOptions={(id) => console.log('Options', id)}
            />

            <LigneFacture
              id="6"
              date="05/01/2026"
              numero="1826-92"
              clientFournisseur="Alain Jean"
              echeance="12/02/2026"
              montantTTC="550 €"
              statut="annule"
              surFavoris={(id) => console.log('Voir', id)}
              surOptions={(id) => console.log('Options', id)}
            />
          </div>





          {/* Section de la deuxième année */}
          <div className="section-annee">
            <h2 className="titre-annee">2025</h2>
            {/* Liste des factures ici */}
            <EnTeteFactures />

            {/* 1ere facture */}
            <LigneFacture
              id="1"
              date="01/01/2026"
              numero="1910-86"
              clientFournisseur="Victor Albert"
              echeance="31/01/2026"
              montantTTC="1 150 €"
              statut="paye"
              surFavoris={(id) => console.log('Voir', id)}
              surOptions={(id) => console.log('Options', id)}
            />

            {/* 2eme facture */}
            <LigneFacture
              id="2"
              date="05/01/2026"
              numero="1826-92"
              clientFournisseur="Alain Jean"
              echeance="12/02/2026"
              montantTTC="550 €"
              statut="paye"
              surFavoris={(id) => console.log('Voir', id)}
              surOptions={(id) => console.log('Options', id)}
            />

            {/* 3eme facture */}
            <LigneFacture
              id="3"
              date="05/01/2026"
              numero="1826-92"
              clientFournisseur="Dupont Camille"
              echeance="12/02/2026"
              montantTTC="550 €"
              statut="paye"
              surFavoris={(id) => console.log('Voir', id)}
              surOptions={(id) => console.log('Options', id)}
            />

            <LigneFacture
              id="4"
              date="01/01/2026"
              numero="1910-86"
              clientFournisseur="Victor Albert"
              echeance="31/01/2026"
              montantTTC="1 150 €"
              statut="annule"
              surFavoris={(id) => console.log('Voir', id)}
              surOptions={(id) => console.log('Options', id)}
            />

            <LigneFacture
              id="5"
              date="05/01/2026"
              numero="1826-92"
              clientFournisseur="Alain Jean"
              echeance="12/02/2026"
              montantTTC="550 €"
              statut="paye"
              surFavoris={(id) => console.log('Voir', id)}
              surOptions={(id) => console.log('Options', id)}
            />

            <LigneFacture
              id="6"
              date="05/01/2026"
              numero="1826-92"
              clientFournisseur="Alain Jean"
              echeance="12/02/2026"
              montantTTC="550 €"
              statut="paye"
              surFavoris={(id) => console.log('Voir', id)}
              surOptions={(id) => console.log('Options', id)}
            />


            <LigneFacture
              id="7"
              date="05/01/2026"
              numero="1826-92"
              clientFournisseur="Alain Jean"
              echeance="12/02/2026"
              montantTTC="550 €"
              statut="paye"
              surFavoris={(id) => console.log('Voir', id)}
              surOptions={(id) => console.log('Options', id)}
            />

            <LigneFacture
              id="8"
              date="05/01/2026"
              numero="1826-92"
              clientFournisseur="Alain Jean"
              echeance="12/02/2026"
              montantTTC="550 €"
              statut="paye"
              surFavoris={(id) => console.log('Voir', id)}
              surOptions={(id) => console.log('Options', id)}
            />

            <LigneFacture
              id="9"
              date="05/01/2026"
              numero="1826-92"
              clientFournisseur="Alain Jean"
              echeance="12/02/2026"
              montantTTC="550 €"
              statut="paye"
              surFavoris={(id) => console.log('Voir', id)}
              surOptions={(id) => console.log('Options', id)}
            />

            <LigneFacture
              id="10"
              date="05/01/2026"
              numero="1826-92"
              clientFournisseur="Alain Jean"
              echeance="12/02/2026"
              montantTTC="550 €"
              statut="paye"
              surFavoris={(id) => console.log('Voir', id)}
              surOptions={(id) => console.log('Options', id)}
            />

            <LigneFacture
              id="11"
              date="05/01/2026"
              numero="1826-92"
              clientFournisseur="Alain Jean"
              echeance="12/02/2026"
              montantTTC="550 €"
              statut="paye"
              surFavoris={(id) => console.log('Voir', id)}
              surOptions={(id) => console.log('Options', id)}
            />

            <LigneFacture
              id="12"
              date="05/01/2026"
              numero="1826-92"
              clientFournisseur="Alain Jean"
              echeance="12/02/2026"
              montantTTC="550 €"
              statut="paye"
              surFavoris={(id) => console.log('Voir', id)}
              surOptions={(id) => console.log('Options', id)}
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Factures;