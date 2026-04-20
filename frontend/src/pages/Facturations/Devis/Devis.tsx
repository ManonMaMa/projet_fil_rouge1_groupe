// -------------------------------- IMPORT -------------------------------- //
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderDevis from './headerDevis';
import Sidebar from "../../../assets/composants/Sidebar"
import EnTeteFactures from '../../../assets/composants/enteteFactures';
import LigneFacture from '../../../assets/composants/ligneFacture';
import './Devis.css';
// ------------------------------------------------------------------------ //



// -------------------------- COMPOSANT PRINCIPAL ------------------------- // 
const Devis: React.FC = () => {

  const navigate = useNavigate();

  // --------- Définition des onglets du header ----------
  const ongletsDevis = [
    { id: 'tous', etiquette: 'Tous', compteur: 45 },
    { id: 'recents', etiquette: 'Récents', compteur: 5 },
    { id: 'favoris', etiquette: 'Favoris', compteur: 3 }
  ];
  // -----------------------------------------------------


  // --------- Définition du changement d'onglet ---------
  const changementOnglet = (tabId: string) => {
    console.log('Onglet devis remplacé par :', tabId);
    // TODO : implémenter le filtrage des devis
  };
  // -----------------------------------------------------


  // ------ Navigation vers la création d'un devis -------
  const CreerNouveauDevis = () => {
    console.log("Créer un nouveau devis");
    // TODO : implémenter la route
  }
  // -----------------------------------------------------


  // ------- Navigation vers le détail d'un devis --------
  const DetailsDevis = () => {
    console.log("Voir les détails d'un devis");
    navigate("/facturation/Devis/details");
  };
  // -----------------------------------------------------



  return (
    <div className="page-conteneur-devis">

      <Sidebar />

      <div className="page-contenu-devis">

        {/* ---------------------- Header ----------------------- */}
        <HeaderDevis
          titre="Devis"                                 // Titre de la page
          ongletsDevis={ongletsDevis}                   // Onglets à afficher
          ongletActif="tous"                            // ID de l'onglet actif par défaut
          surChangementOnglet={changementOnglet}        // callback pour changement d'onglet
          afficherBasculeFiltre={true}                  // affiche le bouton bascule filtre
          CreerNouveauDevis={CreerNouveauDevis}         // callback pour créer un nouveau devis
          texteBoutonCreerNouveauDevis="Nouveau Devis"  // Texte du bouton
        />
        {/* ----------------------------------------------------- */}



        {/* ----------------- Contenu principal ----------------- */}
        <div className="zone-contenu-devis">


          {/* 2026 */}
          <div className="section-annee-devis">
            <h2 className="titre-annee-devis">2026</h2>

            {/* ---------------- En-tête du tableau ----------------- */}
            <EnTeteFactures />
            {/* ----------------------------------------------------- */}


            {/* ----------------- Lignes cliquables ----------------- */}
            <button
              onClick={DetailsDevis}
            >
              <LigneFacture
                id="1"
                date="01/01/2026"
                numero="1910-86"
                clientFournisseur="Victor Albert"
                echeance="31/01/2026"
                montantTTC="1 150 €"
                statut="en_attente"
                surFavoris={(id) => console.log('Favoris', id)}
                surOptions={(id) => console.log('Options', id)}
              />
            </button>


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
            {/* ----------------------------------------------------- */}
          </div>



          {/* 2025 */}
          <div className="section-annee-devis">
            <h2 className="titre-annee-devis">2025</h2>

            {/* ---------------- En-tête du tableau ----------------- */}
            <EnTeteFactures />
            {/* ----------------------------------------------------- */}


            {/* ----------------- Lignes cliquables ----------------- */}
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
            {/* ----------------------------------------------------- */}

          </div>
        </div>
        {/* ----------------------------------------------------- */}

      </div>
    </div>
  );
};
// ------------------------------------------------------------------------ //  


export default Devis;