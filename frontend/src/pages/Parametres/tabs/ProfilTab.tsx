import React from "react";
import Input from "../../../assets/composants/input";

const ProfilTab: React.FC = () => {

    return (
        <>
            <h1>Profil</h1>
            <Input label="Nom" type="" placeholder="Dupond" />
            <Input label="Prénom" type="" placeholder="Jean" />
            <Input label="Mail" type="" placeholder="exemple@gmail.com" />
            <Input label="Langue" type="" placeholder="" />
            <Input label="Fuseau horaire" type="" placeholder="" />
        </>
    );

};

export default ProfilTab;












