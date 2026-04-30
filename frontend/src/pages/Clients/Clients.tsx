import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from './headerClient'; // Import header client
import Sidebar from "../../assets/composants/Sidebar" // Import SideBar
import EnTeteClients from '../../assets/composants/enteteClients';
import LigneClient from '../../assets/composants/ligneClient';
import './Clients.css'; // CSS de la page client

// Composant principal des Clients
const Clients: React.FC = () => {

    const navigate = useNavigate();

    const [clients, setClients] = useState<any[]>([]);

    // FETCH CLIENTS
    useEffect(() => {
        const fetchClients = async () => {
            try {
                const id_user = localStorage.getItem("id_user");
                if (!id_user) return;

                const response = await fetch(`http://localhost:8000/clients/${id_user}`);

                if (!response.ok) {
                    throw new Error("Erreur récupération clients");
                }

                const data = await response.json();
                setClients(data);

            } catch (error) {
                console.error(error);
            }
        };

        fetchClients();
    }, []);


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
    const DetailsClients = (id: number) => {
        console.log("Voir les détails d'un client");
        navigate(`/clients/details/${id}`);
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



                {/* ----------------- Contenu principal ----------------- */}
                <div className="zone-contenu-clients">


                    <div className="section-annee-clients">

                        {/* ---------------- En-tête du tableau ----------------- */}
                        <EnTeteClients />
                        {/* ----------------------------------------------------- */}


                        {/* ----------------- Lignes cliquables ----------------- */}
                        {/* <h2 className="titre-annee-clients">2026</h2> */}

                        {clients.map((client) => (
                            <div
                                key={client.id_client}
                                onClick={() => DetailsClients(client.id_client)}
                                style={{ cursor: "pointer" }}
                            >
                                <LigneClient
                                    id={client.id_client}
                                    nom_societe={
                                        client.entreprise_client ||
                                        `${client.nom_client} ${client.prenom_client}`
                                    }
                                    email={client.email_client}
                                    telephone={client.tel_client}
                                    facture_en_cours="0"
                                    solde_du="0 €"
                                    derniere_activite="—"
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

export default Clients;