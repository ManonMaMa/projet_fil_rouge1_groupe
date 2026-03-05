import React from "react";
import Input from "../../../assets/composants/input";
import "./ProfilTab.css"

const ProfilTab: React.FC = () => {

    return (
        <>
            <div className="contenu-profil">
                {/* Dernière modification */}
                <p className="derniere-modification-profil">Dernière modifications le <span>24 janvier 2025</span></p>

                {/* Zone identité entreprise */}
                <div className="zone-information-profil">
                    <h2 className="titre-section-profil">Mon profil</h2>
                    <div className="titre-section-profil">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                fill="currentColor" viewBox="0 0 24 24" className="logo-titre">
                                <path d="M6 22h12c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2h-1V7c0-2.76-2.24-5-5-5S7 4.24 7 7v2H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2M9 7c0-1.65 1.35-3 3-3s3 1.35 3 3v2H9zm-3 4h12v9h-5v-2.28c.59-.35 1-.99 1-1.72 0-1.1-.9-2-2-2s-2 .9-2 2a2 2 0 0 0 1 1.72V20H6z"></path>
                            </svg>
                            <h2>Mon profil</h2>
                        </div>
                    <div className="input-information-profil">
                    <Input label="Nom de l'entreprise" type="" placeholder="" />
                    <Input label="Nom" type="" placeholder="Dupond" />
                    <Input label="Prénom" type="" placeholder="Jean" />
                    <Input label="Mail" type="" placeholder="exemple@gmail.com" />
                    <Input label="Langue" type="" placeholder="" />
                    <Input label="Fuseau horaire" type="" placeholder="" />
                    </div>
                </div>

            </div>

        </>
    );

};

export default ProfilTab;
