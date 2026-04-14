import React from 'react';
import Header from './headerFinances'; // Import header finance
import Sidebar from "../../assets/composants/Sidebar" // Import SideBar
import BeneficesClient from '../../assets/composants/beneficesClient';
import FacturesEmises from '../../assets/composants/facturesEmises';
import FacturesPayees from '../../assets/composants/facturesPayees';
import FacturesAttentes from '../../assets/composants/facturesAttentes';
import './Finances.css'; // CSS de la page finances



// Composant principal des Finances
const Finances: React.FC = () => {
    return (
        <div className="page-conteneur-finance">
            <Sidebar />


            <div className="page-contenu-finance">
                {/* Header */}
                <Header
                    titre="Finances"                                // changer le titre de la page
                    // nouvelElement={}                 // callback pour créer
                    texteBoutonNouvelElement="Ajouter une activité" // Texte du bouton
                />



                {/* Zone principale du contenu de la page ici */}
                <div className="zone-contenu-finance">

                    {/* ---------- Partie Gauche ---------- */}
                    <div className="finance-gauche">
                        <div className="section">
                            <h2 className="titre-section">Aperçu</h2>

                            <div className="essai">
                                <BeneficesClient
                                    label="Bénéfices"
                                    amount="8 000 €"

                                />

                                <FacturesEmises count={10} amount="10 000 €" />

                                <FacturesPayees count={8} amount="8 000 €" />

                                <FacturesAttentes count={2} amount="2 000 €" />


                            </div>


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