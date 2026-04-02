import React, { useState, useEffect } from 'react';
import Header from './headerParametres'; // Import header parametres
import Sidebar from "../../assets/composants/Sidebar" // Import SideBar

import ProfilTab from './tabs/ProfilTab';
import EntrepriseTab from './tabs/EntrepriseTab';
import PreferencesTab from './tabs/PreferencesTab';
import SecuriteTab from './tabs/SecuriteTab';
import PlanTab from './tabs/PlanTab';

import './Parametres.css'; // CSS de la page parametres



// Composant principal des Parametres
const Parametres: React.FC = () => {

    const [user, setUser] = useState<any>(null)
    const [ongletActif, setOngletActif] = useState('mon-profil');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token")

                if (!token) return 

                const response = await fetch(`http://localhost:8000/user/${token}`)

                if (!response.ok){
                    throw new Error("Erreur récupération utilisateur.")
                }

                const data = await response.json()
                setUser(data)

            } catch (error) {
                console.error(error)
            }
        }

        fetchUser()
    }, [])

    // Définition des onglets de navigations pour le header
    const Onglets = [
        { id: 'mon-profil', etiquette: 'Mon profil'},
        { id: 'entreprise', etiquette: 'Entreprise'},
        { id: 'preferences', etiquette: 'Préférences'},
        { id: 'securite', etiquette: 'Sécurité'},
        { id: 'plan', etiquette: 'Plan'}
    ];


    const renderContenu = () => {

        switch(ongletActif) {
            case 'mon-profil':
                return <ProfilTab user={user} />;
            case 'entreprise':
                return <EntrepriseTab />;
            case 'preferences':
                return <PreferencesTab  />;
            case 'securite':
                return <SecuriteTab  />;
            case 'plan':
                return <PlanTab />;
            default:
                return null;
        }
    };



    return (
        <div className="page-conteneur">
            {/* Import SideBar */}
            <Sidebar />


            <div className="page-contenu">
                {/* Header */}
                <Header
                    titre="Paramètres"                          // changer le titre de la page
                    onglets={Onglets}                           // Onglets à afficher
                    ongletActif={ongletActif}                   // ID de l'onglet actif par défaut
                    surChangementOnglet={setOngletActif  }      // callback pour changement d'onglet
                />



                {/* Zone principale du contenu de la page ici */}
                <div className="zone-contenu">
                    {renderContenu()}
                </div>
            </div>
        </div>
    );
};

export default Parametres;