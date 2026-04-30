// -------------------------------- IMPORT -------------------------------- //
import React, { useEffect, useState } from 'react';
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

  // ---------------------- STATE DES DEVIS ---------------------- //
  const [devis, setDevis] = useState<any[]>([]);
  const id_user = localStorage.getItem("id_user");
  // ------------------------------------------------------------- //


  // ---------------------- CHARGEMENT API ----------------------- //
  useEffect(() => {
    const fetchDevis = async () => {
      try {
        const response = await fetch(`http://localhost:8000/facturation/devis?id_user=${id_user}`);
        const data = await response.json();
        setDevis(data);
      } catch (error) {
        console.error("Erreur lors du chargement des devis :", error);
      }
    };

    fetchDevis();
  }, []);
  // ------------------------------------------------------------- //

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
    navigate("/facturation/devis/nouveau");
  }
  // -----------------------------------------------------


  // ------- Navigation vers le détail d'un devis --------
  const DetailsDevis = (id:number) => {
    navigate(`/facturation/devis/details/${id}`);
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


          <div className="section-annee-devis">

            {/* ---------------- En-tête du tableau ----------------- */}
            <EnTeteFactures />
            {/* ----------------------------------------------------- */}


            {/* ----------------- Lignes cliquables ----------------- */}
            {/* <h2 className="titre-annee-devis">2026</h2> */}
          
            {devis.map((d) => (
              <div
                key={d.id_devis}
                onClick={() => DetailsDevis(d.id_devis)}
                style={{ cursor: "pointer" }}
              >
                <LigneFacture
                  id={d.id_devis}
                  date={d.date_devis}
                  numero={d.numero_devis}
                  clientFournisseur={d.client?.nom_client}
                  echeance="—"
                  montantTTC={d.montant_total_devis + " €"}
                  statut={d.statut?.nom_statut}
                  surFavoris={(id) => console.log('Favoris', id)}
                  surOptions={(id) => console.log('Options', id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
// ------------------------------------------------------------------------ //  


export default Devis;