import React from 'react';
import Header from './headerParametres'; // Import header parametres
import Sidebar from "../../assets/composants/Sidebar" // Import SideBar
import './Parametres.css'; // CSS de la page parametres



// Composant principal des Parametres
const Parametres: React.FC = () => {

    // Définition des onglets de navigations pour le header
    const Onglets = [
        { id: 'mon-profil', etiquette: 'Mon profil'},
        { id: 'entreprise', etiquette: 'Entreprise'},
        { id: 'preferences', etiquette: 'Préférences'},
        { id: 'securite', etiquette: 'Sécurité'},
        { id: 'plan', etiquette: 'Plan'}


    ];

    // Fonction appelée lorsqu'un onglet est sélectionné
    const changementOnglet = (tabId: string) => {
        console.log('Onglet remplacé par :', tabId);
        // [Ajouter la logique pour filtrer les documents selon l'onglet]
    };




    return (
        <div className="page-conteneur">
            {/* [Importation de la SideBar ici] */}
            <Sidebar />


            <div className="page-contenu">
                {/* Header */}
                <Header
                    titre="Paramètres"                          // changer le titre de la page
                    onglets={Onglets}                           // Onglets à afficher
                    ongletActif="mon-profil"                    // ID de l'onglet actif par défaut
                    surChangementOnglet={changementOnglet}      // callback pour changement d'onglet
                    afficherBasculeFiltre={true}                // affiche le bouton bascule filtre
                    texteBoutonNouvelElement="Nouveau Document" // Texte du bouton
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

export default Parametres;