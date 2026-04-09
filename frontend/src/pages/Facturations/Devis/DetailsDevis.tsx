import React from 'react';
import { useNavigate } from "react-router-dom";
import HeaderDetailsDevis from './HeaderDetailsDevis';
import Sidebar from "../../../assets/composants/Sidebar"
import Input from '../../../assets/composants/input';
import BoutonDevisAccepte from '../../../assets/composants/boutonDevisAccepte';
import BoutonDevisRefuse from '../../../assets/composants/boutonDevisRefuse';
import HistoriqueDetailsDevis from '../../../assets/composants/historiqueDetailsDevis';
import './DetailsDevis.css'; // CSS de la page nouvelle facture



// Composant principal de la nouvelle facture
const detailsDevis: React.FC = () => {
    const navigate = useNavigate();

    return (

        <div className="page-conteneur">
            {/* Importation SideBar */}
            <Sidebar />

            <div className="page-contenu">
                {/* Importation Header */}


                <HeaderDetailsDevis
                    titre="Devis"
                    sousTitre="1910-90"
                    surRetour={() => navigate("/facturation/devis")}
                />

                {/* Zone principale du contenu de la page ici */}
                <div className="zone-contenu-details-devis">

                    <div className="details-devis-gauche">

                    </div>



                    <div className="details-devis-droite">
                        {/* Statut */}
                        <div className="details-devis-droite-statut">
                            <div className="titre-section-statut">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" viewBox="0 0 24 24" >
                                    <path d="M17 13c-1.1 0-2-.9-2-2v-.36c0-.47.15-.91.43-1.23a4.49 4.49 0 0 0 .96-3.88c-.35-1.66-1.7-3.03-3.35-3.4-1.37-.31-2.77 0-3.85.86s-1.7 2.14-1.7 3.52c0 1.08.39 2.12 1.1 2.94.26.3.4.73.4 1.2v.36c0 1.1-.9 2-2 2-2.21 0-4 1.79-4 4v1c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-1c0-2.21-1.79-4-4-4ZM5 17c0-1.1.9-2 2-2 2.21 0 4-1.79 4-4v-.36c0-.96-.32-1.85-.89-2.51a2.503 2.503 0 0 1 .33-3.59c.61-.49 1.38-.65 2.16-.48.9.21 1.64.96 1.84 1.87.17.8-.02 1.57-.53 2.17-.59.69-.91 1.59-.91 2.53v.36c0 2.21 1.79 4 4 4 1.1 0 2 .9 2 2H5Zm-2 3h18v2H3z"></path>
                                </svg>
                                <h2>Statut</h2>
                            </div>
                            <div className="ligne-1">
                                <BoutonDevisAccepte
                                    onClick={() => {
                                        console.log('Bouton (devis) - Marquer comme accepté cliqué');
                                    }}
                                />


                                <BoutonDevisRefuse
                                    onClick={() => {
                                        console.log('Bouton (devis) - Marquer comme accepté cliqué');
                                    }}
                                />
                            </div>

                        </div>



                        {/* Client */}
                        <div className="details-devis-droite-client">
                            <div className="titre-section-client">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" viewBox="0 0 24 24" >
                                    <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path>
                                </svg>
                                <h2>Client</h2>
                            </div>
                            <div className="ligne-1">
                                <Input label="Nom / Société" type="" placeholder="" />
                                <Input label="Référence client" type="" placeholder="" />
                            </div>

                            <div className="ligne-2">
                                <Input label="Adresse" type="" placeholder="" />
                                <Input label="Email" type="" placeholder="" />
                            </div>
                        </div>



                        {/* Devis */}
                        <div className="details-devis-droite-devis">
                            <div className="titre-section-devis">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" viewBox="0 0 24 24" >
                                    <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M5 20V8h14V6v14z"></path><path d="M12 13h5v5h-5z"></path>
                                </svg>
                                <h2>Devis</h2>
                            </div>
                            <div className="ligne-1">
                                <Input label="Numéro" type="" placeholder="" />
                                <Input label="Date d'émission" type="" placeholder="" />
                            </div>

                            <div className="ligne-2">
                                <Input label="Date d'échéance" type="" placeholder="" />
                                <Input label="Montant HT" type="" placeholder="" />
                            </div>

                            <div className="ligne-3">
                                <Input label="TVA" type="" placeholder="" />
                                <Input label="Montant TTC" type="" placeholder="" />
                            </div>
                        </div>



                        {/* Historique */}
                        <div className="details-devis-droite-historique">
                            <div className="titre-section-historique">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" viewBox="0 0 24 24" >
                                    <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M5 20V8h14V6v14z"></path><path d="M12 13h5v5h-5z"></path>
                                </svg>
                                <h2>Historique</h2>
                            </div>
                            <div className="ligne-1">
                                <HistoriqueDetailsDevis
                                    title="En attente de payement"
                                    description="Lundi 01 Janvier 2026 à 10:32"
                                    count={2}
                                />
                            </div>

                            <div className="ligne-2">
                                <HistoriqueDetailsDevis
                                    title="Envoyé par mail"
                                    description="Vendredi 28 Décembre 2026 à 09:14"
                                    count={1}
                                />
                            </div>
                        </div>



                    </div>











                </div>
            </div>
        </div>

    );
};

export default detailsDevis;