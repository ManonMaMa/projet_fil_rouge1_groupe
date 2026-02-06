import React from 'react';
import Header from './headerFinances'; // Import header finance
import Sidebar from "../../assets/composants/Sidebar" // Import SideBar
import './Finances.css'; // CSS de la page finances



// Composant principal des Finances
const Finances: React.FC = () => {

    // Définition des onglets de navigations pour le header
    const Onglets = [
        { id: 'tous', etiquette: 'Tous', compteur: 45 },
        { id: 'recents', etiquette: 'Récents', compteur: 5 },
        { id: 'favoris', etiquette: 'Favoris', compteur: 3 }
    ];

    // Fonction appelée lorsqu'un onglet est sélectionné
    const changementOnglet = (tabId: string) => {
        console.log('Onglet remplacé par :', tabId);
        // [Ajouter la logique pour filtrer les Finances selon l'onglet]
    };

    // Fonction déclanchée pour créer une nouvelle activité
    const NouvelleFacture = () => {
        console.log('Ajouter une nouvelle activité');
        // [Ajouter la logique pour créer une nouvelle activité --> ouvre une fenêtre à droite pour ajouter une activité]
    };



    return (
        <div className="page-conteneur">
            {/* [Importation de la SideBar ici] */}
            <Sidebar />


            <div className="page-contenu">
                {/* Header */}
                <Header
                    titre="Finances"                           // changer le titre de la page
                    onglets={Onglets}                           // Onglets à afficher
                    ongletActif="tous"                          // ID de l'onglet actif par défaut
                    surChangementOnglet={changementOnglet}      // callback pour changement d'onglet
                    afficherBasculeFiltre={true}                // affiche le bouton bascule filtre
                    nouvelElement={NouvelleFacture}             // callback pour créer une nouvelle facture
                    texteBoutonNouvelElement="Nouvelle Activité" // Texte du bouton
                />



                {/* Zone principale du contenu de la page ici */}
                <div className="zone-contenu">

                    {/* Section de la première année */}
                    <div className="section-annee">
                        <h2 className="titre-annee">2026</h2>
                        {/* liste des devis ici */}
    
                    </div>

                    {/* Section de la duexième année */}
                    <div className="section-annee">
                        <h2 className="titre-annee">2025</h2>
                        {/* Liste des devis ici */}
    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Finances;