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
        <div className="page-conteneur-finance">
            <Sidebar />


            <div className="page-contenu-finance">
                {/* Header */}
                <Header
                    titre="Finances"                                // changer le titre de la page
                    nouvelElement={NouvelleFacture}                 // callback pour créer une nouvelle facture
                    texteBoutonNouvelElement="Ajouter une activité" // Texte du bouton
                />



                {/* Zone principale du contenu de la page ici */}
                <div className="zone-contenu-finance">

                    {/* ---------- Partie Gauche ---------- */}
                    <div className="finance-gauche">
                        <div className="section">
                            <h2 className="titre-section">Aperçu</h2>
                            <p>contenu</p>

                        </div>

                        <div className="section">
                            <h2 className="titre-section">Graphique</h2>
                            <p>contenu</p>

                        </div>

                        <div className="section">
                            <h2 className="titre-section">Factures</h2>
                            <p>contenu</p>

                        </div>
                    </div>



                    <div className="separateur"></div>



                    {/* ---------- Partie Droite ---------- */}
                    <div className="finance-droite">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Finances;