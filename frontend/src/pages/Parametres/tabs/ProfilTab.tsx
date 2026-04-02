import React from "react";
import Input from "../../../assets/composants/input";
import "./ProfilTab.css"

const ProfilTab = ({ user }: any) => {

    if (!user) {
        return <p>Chargement...</p>
    }

    return (
        <>
            <div className="contenu-profil">
                {/* Dernière modification */}
                <p className="derniere-modification-profil">Dernière modifications le <span>24 janvier 2025</span></p>

                {/* Zone identité entreprise */}
                <div className="zone-information-profil">
                    <div className="titre-section-profil">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path>
                        </svg>
                        <h2>Mon profil</h2>
                    </div>
                    <div className="input-information-profil">
                        <Input label="Nom" type="" placeholder={user.nom || ""} />
                        <Input label="Prénom" type="" placeholder={user.prenom || ""} />
                        <Input label="Mail" type="" placeholder={user.email || ""} />
                        <Input label="Langue" type="" placeholder={user.langue || ""} />
                        <Input label="Fuseau horaire" type="" placeholder={user.timezone || ""} />
                    </div>
                </div>

            </div>

        </>
    );

};

export default ProfilTab;
