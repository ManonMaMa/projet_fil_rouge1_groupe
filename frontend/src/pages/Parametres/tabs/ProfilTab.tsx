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
