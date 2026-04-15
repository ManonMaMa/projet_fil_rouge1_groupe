import React from 'react';
import { useNavigate } from "react-router-dom";
import HeaderDetailsClients from './headerDetailsClients';
import Sidebar from "../../assets/composants/Sidebar"
import BeneficesClient from '../../assets/composants/beneficesClient';
import FacturesEmises from '../../assets/composants/facturesEmises';
import FacturesPayees from '../../assets/composants/facturesPayees';
import FacturesAttentes from '../../assets/composants/facturesAttentes';

import Input from '../../assets/composants/input';
import LigneFacture from '../../assets/composants/ligneFacture';
import HistoriqueDetailsDevis from '../../assets/composants/historiqueDetailsDevis';
import './DetailsClients.css';



// Composant principal des Finances
const DetailsClients: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="page-conteneur-details-clients">
            <Sidebar />

            <div className="page-contenu-details-clients">
                {/* Header */}
                <HeaderDetailsClients
                    titre="Détails Client"                              // Titre de la page
                    surRetourClients={() => navigate("/clients")}
                />




                <div className="zone-contenu-details-clients">

                    {/* ----------------------------------------- SECTION GAUCHE --------------------------------------- */}
                    <div className="details-clients-gauche">

                        {/* APERÇU */}
                        <div className="section-details-clients">
                            <h2 className="titre-section-details-clients">Aperçu</h2>

                            <div className="apercu-details-clients">
                                <BeneficesClient
                                    label="Bénéfices"
                                    amount="8 000 €"
                                />
                                <FacturesEmises count={10} amount="10 000 €" />
                                <FacturesPayees count={8} amount="8 000 €" />
                                <FacturesAttentes count={2} amount="2 000 €" />
                            </div>
                        </div>


                        {/* INFORMATIONS */}
                        <div className="section-details-clients">
                            <h2 className="titre-section-details-clients">Informations</h2>

                            <div className="ligne-input-informations-details-clients">
                                <Input label="Nom" type="" placeholder="" />
                                <Input label="Prénom" type="" placeholder="" />
                                <Input label="Société" type="" placeholder="" />
                            </div>

                            <div className="ligne-input-informations-details-clients">
                                <Input label="Email" type="" placeholder="" />
                                <Input label="Téléphone" type="" placeholder="" />
                                <Input label="Adrese" type="" placeholder="" />
                            </div>

                            <div className="ligne-input-informations-details-clients">
                                <div className="details-clients-informations-left">
                                    <Input label="Ville" type="" placeholder="" />
                                </div>

                                <div className="details-clients-informations-right">
                                    <Input label="Note" type="" placeholder="" />
                                </div>
                            </div>
                        </div>


                        {/* FACTURES */}
                        <div className="section-details-clients">
                            <h2 className="titre-section-details-clients">Factures</h2>
                            <LigneFacture
                                id="1"
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
                                id="1"
                                date="01/01/2025"
                                numero="1910-86"
                                clientFournisseur="Victor Albert"
                                echeance="31/01/2025"
                                montantTTC="1 150 €"
                                statut="annule"
                                surFavoris={(id) => console.log('Voir', id)}
                                surOptions={(id) => console.log('Options', id)}
                            />
                        </div>


                        {/* DEVIS */}
                        <div className="section-details-clients">
                            <h2 className="titre-section-details-clients">Devis</h2>
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
                                id="1"
                                date="01/01/2026"
                                numero="1910-86"
                                clientFournisseur="Victor Albert"
                                echeance="31/01/2026"
                                montantTTC="1 150 €"
                                statut="annule"
                                surFavoris={(id) => console.log('Voir', id)}
                                surOptions={(id) => console.log('Options', id)}
                            />
                        </div>
                    </div>
                    {/* ------------------------------------------------------------------------------------------------ */}


                    <div className="separateur"></div>


                    {/* ----------------------------------------- SECTION DROITE --------------------------------------- */}
                    <div className="details-clients-droite">

                        {/* ACTIVITÉ */}
                        <div className="section-details-clients">
                            <h2 className="titre-section-details-clients">Activité</h2>

                            <div className="activite-details-clients">
                                <HistoriqueDetailsDevis
                                    title="Préparer les devis clients - Terminé"
                                    description="Lundi 1 Janvier 2026 à 09:12"
                                    count={1}
                                />
                                <HistoriqueDetailsDevis
                                    title="Préparer les devis clients - création tâche"
                                    description="Vendredi 28 Décembre 2026 à 16:20"
                                    count={1}
                                />
                            </div>
                        </div>
                    </div>
                    {/* ------------------------------------------------------------------------------------------------ */}


                </div>
            </div>
        </div>
    );
};

export default DetailsClients;