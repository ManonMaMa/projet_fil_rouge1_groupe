import React from "react";
import Input from "../../../assets/composants/input";
import InputV2 from "../../../assets/composants/inputV2";
import "./EntrepriseTab.css"
import InputPasswordActuel from "../../../assets/composants/inputPasswordActuel";


const ProfilTab: React.FC = () => {

    return (
        <>
            <div className="contenu-entreprise">

                <div className="contenu-1">
                    {/* Dernière modification */}
                    <p className="derniere-modification-entreprise">Dernière modifications le <span>08 Juin 2025</span></p>
                </div>

                <div className="contenu-2">
                    {/* Zone Identité Entreprise */}
                    <div className="zone-identite-entreprise">
                        <div className="titre-section-securite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                fill="currentColor" viewBox="0 0 24 24" >
                                <path d="M20 6h-4V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v17c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V8c0-1.1-.9-2-2-2m0 14H4V4h10v3c0 .55.45 1 1 1h5z"></path><path d="M10 6h2v2h-2zM6 6h2v2H6zm0 4h2v2H6zm4 0h2v2h-2zm6 0h2v2h-2zm-6 4h2v2h-2zm-4 0h2v2H6zm10 0h2v2h-2z"></path>
                            </svg>
                            <h2>Identité de l'entreprise</h2>
                        </div>

                        <div className="input-information-securite">
                            <div className="mdp-actuel">
                                <InputV2 label="Nom de l'entreprise" type="" placeholder="" />
                            </div>

                        </div>
                    </div>

                    {/* Zone Historique Activité */}
                    <div className="zone-historique-securite">
                        <div className="titre-section-securite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                fill="currentColor" viewBox="0 0 24 24" >
                                <path d="m19.94 7.68-.03-.09a.8.8 0 0 0-.2-.29l-5-5c-.09-.09-.19-.15-.29-.2l-.09-.03a.8.8 0 0 0-.26-.05c-.02 0-.04-.01-.06-.01H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12s-.01-.04-.01-.06c0-.09-.02-.17-.05-.26ZM6 20V4h7v4c0 .55.45 1 1 1h4v11z"></path><path d="M8 11h8v2H8zm0 4h8v2H8zm0-8h3v2H8z"></path>
                            </svg>
                            <h2>Informations légales</h2>
                        </div>

                        <div className="input-information-legale-1">
                            <Input label="Email" type="" placeholder="example@email.fr" />
                            <Input label="Téléphone" type="" placeholder="06 60 06 60 06" />
                            <Input label="Numéro" type="" placeholder="24" />
                            <Input label="Rue" type="" placeholder="rue de l'impasse" />
                            <Input label="Code postal" type="" placeholder="73000" />
                            <Input label="Ville" type="" placeholder="Chambéry" />
                            <Input label="Pays" type="" placeholder="France" />
                        </div>


                    </div>

                </div>

            </div>

        </>
    );

};

export default ProfilTab;


















