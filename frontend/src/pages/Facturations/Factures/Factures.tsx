// -------------------------------- IMPORT -------------------------------- //
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import HeaderFactures from './headerFactures';
import Sidebar from "../../../assets/composants/Sidebar"
import EnTeteFactures from '../../../assets/composants/enteteFactures';
import LigneFacture from '../../../assets/composants/ligneFacture';
import './Factures.css';
// ------------------------------------------------------------------------ //



// -------------------------- COMPOSANT PRINCIPAL ------------------------- // 
const Factures: React.FC = () => {

  const navigate = useNavigate();
  const [factures, setFactures] = useState<any[]>([]);
  const id_user = localStorage.getItem("id_user");

  // ✅ FETCH API
  useEffect(() => {
    const fetchFactures = async () => {
      try {
        if (!id_user) return;

        const res = await fetch(`http://localhost:8000/facturation/factures?id_user=${id_user}`);
        const data = await res.json();

        console.log("📄 FACTURES API :", data);

        setFactures(data);

      } catch (err) {
        console.error("❌ Erreur chargement factures :", err);
      }
    };

    fetchFactures();
  }, [id_user]);


  // --------- Définition des onglets du header ----------
  const ongletsFactures = [
    { id: 'tous', etiquette: 'Tous', compteur: 48 },
    { id: 'recents', etiquette: 'Récents', compteur: 5 },
    { id: 'favoris', etiquette: 'Favoris', compteur: 3 }
  ];
  // -----------------------------------------------------


  // --------- Définition du changement d'onglet ---------
  const changementOnglet = (tabId: string) => {
    console.log('Onglet facture remplacé par :', tabId);
    // TODO : implémenter le filtrage des factures
  };
  // -----------------------------------------------------


  // ----- Navigation vers la création d'une facture -----
  const CreerNouvelleFacture = () => {
    console.log('créer une nouvelle facture');
    navigate("/facturation/factures/nouvelle");
  };
  // -----------------------------------------------------


  // ------ Navigation vers le détail d'une facture ------
  const DetailsFactures = (id: string) => {
    console.log("Voir les détails d'une factures");
    navigate(`/facturation/factures/details/${id}`);
  };
  // -----------------------------------------------------



  return (
    <div className="page-conteneur-facture">

      <Sidebar />

      <div className="page-contenu-facture">

        {/* ---------------------- Header ----------------------- */}
        <HeaderFactures
          titre="Factures"                                    // Titre de la page
          ongletsFactures={ongletsFactures}                   // Onglets à afficher
          ongletActif="tous"                                  // ID de l'onglet actif par défaut
          surChangementOnglet={changementOnglet}              // callback pour changement d'onglet
          afficherBasculeFiltre={true}                        // affiche le bouton bascule filtre
          CreerNouvelleFacture={CreerNouvelleFacture}         // callback pour créer une nouvelle facture
          texteBoutonCreerNouvelleFacture="Nouvelle Facture"  // Texte du bouton
        />
        {/* ----------------------------------------------------- */}



        {/* ----------------- Contenu principal ----------------- */}
        <div className="zone-contenu-factures">


          {/* 2026 */}
          <div className="section-annee-factures">

            {/* ---------------- En-tête du tableau ----------------- */}
            <EnTeteFactures />
            {/* ----------------------------------------------------- */}


            {/* ----------------- Lignes cliquables ----------------- */}
            {/* <h2 className="titre-annee-factures">2026</h2> */}
            
            {/* ✅ LISTE DYNAMIQUE */}
            {factures.map((f) => (
              <div
                key={f.id_facture}
                onClick={() => DetailsFactures(f.id_facture)}
                style={{ cursor: "pointer" }}
              >
                <LigneFacture
                  id={f.id_facture}
                  date={f.date_facture}
                  numero={f.numero_facture}
                  clientFournisseur={f.client?.nom_client}
                  echeance={f.date_echeance || "—"}
                  montantTTC={f.montant_total_facture + " €"}
                  statut={f.statut || "en_attente"}
                  surFavoris={(id) => console.log('Favoris', id)}
                  surOptions={(id) => console.log('Options', id)}
                />
              </div>


            ))}



          </div>
        </div>
        {/* ----------------------------------------------------- */}

      </div>
    </div>
  );
};
// ------------------------------------------------------------------------ //  


export default Factures;