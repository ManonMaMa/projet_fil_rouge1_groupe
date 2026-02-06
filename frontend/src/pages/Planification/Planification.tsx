import React from 'react';
import Header from './headerPlanification'; // Import header documents
import Sidebar from "../../assets/composants/sidebar" // Import SideBar
import './planification.css'; // CSS de la page planification



// Composant principal des Documents
const Devis: React.FC = () => {

    // Définition des onglets de navigations pour le header
    const Onglets = [
        { id: 'tous', etiquette: 'Tous', compteur: 45 },
        { id: 'à faire', etiquette: 'À faire', compteur: 5 },
        { id: 'en cours', etiquette: 'En cours', compteur: 3 },
    ];

    // Fonction appelée lorsqu'un onglet est sélectionné
    const changementOnglet = (tabId: string) => {
        console.log('Onglet remplacé par :', tabId);
        // [Ajouter la logique pour filtrer les tableaux selon l'onglet]
    };

    // Fonction déclanchée pour créer un nouveau tableau
    const NouvelleFacture = () => {
        console.log('Créer un nouveau tableau');
        // [Ajouter la logique pour créer un nouveau tableau]
    };



    return (
        <div className="page-conteneur">
            {/* [Importation de la SideBar ici] */}
            <Sidebar />


            <div className="page-contenu">
                {/* Header */}
                <Header
                    titre="Planification"                       // changer le titre de la page
                    onglets={Onglets}                           // Onglets à afficher
                    ongletActif="tous"                          // ID de l'onglet actif par défaut
                    surChangementOnglet={changementOnglet}      // callback pour changement d'onglet
                    afficherBasculeFiltre={true}                // affiche le bouton bascule filtre
                    nouvelElement={NouvelleFacture}             // callback pour créer une nouvelle facture
                    texteBoutonNouvelElement="Nouveau Tableau"  // Texte du bouton
                />



                {/* Zone principale du contenu de la page ici */}
                <div className="zone-contenu">

                    {/* Section de la première année */}
                    <div className="section-annee">
                        <h2 className="titre-annee">2026</h2>
                        {/* liste des documents ici */}
                        <p>Devis 1</p>
                        <p>Devis 2</p>
                        <p>Devis 3</p>
                        <p>Devis 4</p>
                        <p>Devis 5</p>
                        <p>Devis 6</p>
                        <p>Devis 7</p>
                    </div>

                    {/* Section de la duexième année */}
                    <div className="section-annee">
                        <h2 className="titre-annee">2025</h2>
                        {/* Liste des documents ici */}
                        <p>Devis 1</p>
                        <p>Devis 2</p>
                        <p>Devis 3</p>
                        <p>Devis 4</p>
                        <p>Devis 5</p>
                        <p>Devis 6</p>
                        <p>Devis 7</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Devis;