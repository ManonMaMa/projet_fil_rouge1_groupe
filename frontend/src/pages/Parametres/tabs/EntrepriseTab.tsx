import React from "react";
import Input from "../../../assets/composants/input";
import "./EntrepriseTab.css"

const ProfilTab: React.FC = () => {

    return (
        <>
            <div className="contenu-entreprise">
                {/* Dernière modification */}
                <p className="derniere-modification-entreprise">Dernière modifications le <span>24 janvier 2025</span></p>


                {/* Zone identité entreprise */}
                <div className="zone-identite-entreprise">
                    <h2 className="titre-section-entreprise">Identité de l'entreprise</h2>
                    <Input label="Nom de l'entreprise" type="" placeholder="" />
                </div>


                {/* Zone informations légales */}
                <div className="zone-information-entreprise">
                    <h2 className="titre-section-entreprise">Informations légales</h2>
                    <div className="input-information-entreprise">
                        <Input label="Email" type="" placeholder="exemple@gmail.com" />
                        <Input label="Téléphone" type="" placeholder="06 60 06 60 06" />
                        <Input label="Numéro" type="" placeholder="24" />
                        <Input label="Rue" type="" placeholder="rue de l'impasse" />
                        <Input label="Code postal" type="" placeholder="73000" />
                        <Input label="Ville" type="" placeholder="Chambéry" />
                        <Input label="Pays" type="" placeholder="France" />
                    </div>
                </div>
            </div>

        </>
    );

};

export default ProfilTab;


















