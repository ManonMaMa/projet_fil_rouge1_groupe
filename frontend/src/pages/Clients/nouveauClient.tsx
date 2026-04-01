import React from 'react';
import { useNavigate } from "react-router-dom";
import HeaderNouveauClient from './headerNouveauClient';
import Sidebar from '../../assets/composants/Sidebar';
import Input from '../../assets/composants/input';
import InputV2 from '../../assets/composants/inputV2';
import './nouveauClient.css'; // CSS de la page nouveau client



// Composant principal de la nouvelle facture
const nouveauClient: React.FC = () => {
    const navigate = useNavigate();

    return (

        <div className="page-conteneur">
            <Sidebar />

            <div className="page-contenu">
                <HeaderNouveauClient
                    surRetour={() => navigate("/clients")}
                />

                {/* Zone principale du contenu de la page ici */}
                <div className="zone-contenu">

                    {/* Ligne 1 */}
                    <div className="ligne-1-nouveau-client">

                        {/* Section Gauche */}
                        <div className="nouveau-client-gauche">
                            <div className="titre-section-nouveau-client">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" viewBox="0 0 24 24" >
                                    <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path>
                                </svg>
                                <h2>Informations</h2>
                            </div>

                            <div className="input-information-client">
                                <div className="client-ligne-1">
                                    <InputV2 label="Type de client" type="" placeholder="" />
                                </div>
                                <div className="client-ligne-2">
                                    <Input label="Nom *" type="" placeholder="" />
                                    <Input label="Prénom *" type="" placeholder="" />
                                </div>
                                <div className="client-ligne-3">
                                    <InputV2 label="Société" type="" placeholder="" />
                                </div>
                            </div>
                        </div>



                        {/* Section Droite */}
                        <div className="nouveau-client-droite">
                            <div className="titre-section-nouveau-client">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" viewBox="0 0 24 24" >
                                    <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M5 20V8h14V6v14z"></path><path d="M12 13h5v5h-5z"></path>
                                </svg>
                                <h2>Contact</h2>
                            </div>

                            <div className="input-information-contact">
                                <div className="client-ligne-1">
                                    <InputV2 label="Type de client" type="" placeholder="" />
                                </div>
                                <div className="client-ligne-1">
                                    <InputV2 label="Type de client" type="" placeholder="" />
                                </div>
                                <div className="client-ligne-1">
                                    <InputV2 label="Type de client" type="" placeholder="" />
                                </div>
                                <Input label="Email *" type="" placeholder="" />
                                <Input label="Téléphone" type="" placeholder="" />
                                <Input label="Rue" type="" placeholder="" />
                                <Input label="Code Postal" type="" placeholder="" />
                                <Input label="Ville" type="" placeholder="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default nouveauClient;