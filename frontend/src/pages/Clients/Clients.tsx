import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from './headerClient'; // Import header client
import Sidebar from "../../assets/composants/Sidebar" // Import SideBar
import EnTeteClients from '../../assets/composants/enteteClients';
import LigneClient from '../../assets/composants/ligneClient';
import './Clients.css'; // CSS de la page client



// Composant principal des Clients
const Clients: React.FC = () => {

    const navigate = useNavigate();

    // Définition des onglets de navigations pour le header
    const Onglets = [
        { id: 'tous', etiquette: 'Tous', compteur: 45 },
        { id: 'recents', etiquette: 'Récents', compteur: 5 },
        { id: 'favoris', etiquette: 'Favoris', compteur: 3 }
    ];

    // Fonction appelée lorsqu'un onglet est sélectionné
    const changementOnglet = (tabId: string) => {
        console.log('Onglet remplacé par :', tabId);
        // [Ajouter la logique pour filtrer les clients selon l'onglet]
    };

    // Fonction déclanchée pour créer un nouveau client
    const NouvelleFacture = () => {
        console.log('Créer un nouveau client');
        navigate("/clients/nouveau");
        // [Ajouter la logique pour créer un nouveau client]
    };

    // Fonction déclanchée pour voir les détails d'un client
    const DetailsClients = () => {
        console.log("Voir les détails d'un client");
        navigate("/clients/details");
    };


    return (
        <div className="page-conteneur-clients">
            {/* [Importation de la SideBar ici] */}
            <Sidebar />


            <div className="page-contenu-clients">
                {/* Header */}
                <Header
                    titre="Clients"                           // changer le titre de la page
                    onglets={Onglets}                         // Onglets à afficher
                    ongletActif="tous"                        // ID de l'onglet actif par défaut
                    surChangementOnglet={changementOnglet}    // callback pour changement d'onglet
                    afficherBasculeFiltre={true}              // affiche le bouton bascule filtre
                    nouvelElement={NouvelleFacture}           // callback pour créer une nouvelle facture
                    texteBoutonNouvelElement="Nouveau Client" // Texte du bouton
                />



                {/* Zone principale du contenu de la page ici */}
                <div className="zone-contenu-clients">


                    {/* Section de la première année */}
                    <div className="section-annee">
                        <h2 className="titre-annee">2026</h2>
                        <EnTeteClients />

                        {/* 1er client */}
                        <button
                            onClick={DetailsClients}
                        >
                            <LigneClient
                                id="1"
                                nom_societe="Bernard Guy"
                                email="bernardguy@gmail.com"
                                telephone="06 67 78 89 90"
                                facture_en_cours="5218-90"
                                solde_du="1 150 €"
                                derniere_activite="07/12/2025 €"
                                surOptions={(id) => console.log('Options', id)}
                            />
                        </button>
                    </div>


                    {/* Section de la deuxième année */}
                    <div className="section-annee">
                        <h2 className="titre-annee">2025</h2>
                        <EnTeteClients />


                        <LigneClient
                            id="2"
                            nom_societe="Delois Alain"
                            email="deloisalain@gmail.com"
                            telephone="06 67 78 89 90"
                            facture_en_cours="5218-90"
                            solde_du="1 150 €"
                            derniere_activite="1 150 €"
                            surOptions={(id) => console.log('Options', id)}
                        />

                        <LigneClient
                            id="3"
                            nom_societe="Dupuis Gille"
                            email="dupuisgille@gmail.com"
                            telephone="06 67 78 89 90"
                            facture_en_cours="5218-90"
                            solde_du="1 150 €"
                            derniere_activite="1 150 €"
                            surOptions={(id) => console.log('Options', id)}
                        />

                        <LigneClient
                            id="4"
                            nom_societe="Moreau Marie"
                            email="moreaumarie@gmail.com"
                            telephone="06 67 78 89 90"
                            facture_en_cours="5218-90"
                            solde_du="1 150 €"
                            derniere_activite="1 150 €"
                            surOptions={(id) => console.log('Options', id)}
                        />





                    </div>
                </div>
            </div>
        </div >
    );
};

export default Clients;