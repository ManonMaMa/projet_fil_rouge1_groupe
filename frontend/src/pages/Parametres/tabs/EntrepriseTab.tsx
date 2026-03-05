import React from "react";
import Input from "../../../assets/composants/input";
import "./EntrepriseTab.css"

const ProfilTab: React.FC = () => {

    return (
        <>
            <div className="contenu-entreprise">
                {/* Dernière modification */}
                <p className="derniere-modification-entreprise">Dernière modifications le <span>24 janvier 2025</span></p>

                {/* Titre section */}
                <h2 className="Titre-section-entreprise">Identité de l'entreprise</h2>

                {/* Zone input */}
                <div className="zone-input-entreprise">
                    <Input label="Nom" type="" placeholder="Dupond" />
                    <Input label="Prénom" type="" placeholder="Jean" />
                    <Input label="Mail" type="" placeholder="exemple@gmail.com" />
                    <Input label="Langue" type="" placeholder="" />
                    <Input label="Fuseau horaire" type="" placeholder="" />
                </div>
            </div>

        </>
    );

};

export default ProfilTab;


















