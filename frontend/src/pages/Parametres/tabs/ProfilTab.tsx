import React, { useState, useRef, useEffect, useCallback } from "react";
import Input from "../../../assets/composants/input";
import UnsavedChangesBar from "../../../assets/composants/UnsavedChangesBar";
import "./ProfilTab.css"

// Valeurs initiales
const INITIAL_FORM = {
    nom: "",
    prenom: "",
    mail: "",
    langue: "",
    fuseau: "",
};

const ProfilTab = ({ user }: any) => {

    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: ""
    })

    useEffect(() => {
    if (user) {
        const mappedUser = {
            nom: user.nom,
            prenom: user.prenom,
            email: user.email_user
        }

        setFormData({
            nom: mappedUser.nom || "",
            prenom: mappedUser.prenom || "",
            email: mappedUser.email || ""
        })
    }
}, [user])

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    if (!user) return <p>Chargement...</p>

    // Etat actuel
    const [formValues, setFormValues] = useState(INITIAL_FORM);

    // Etat sauvegardé
    const [savedValues, setSavedValues] = useState(INITIAL_FORM);

    // Détection modification
    const isDirty =
        JSON.stringify(formValues) !== JSON.stringify(savedValues);

    // Gestion changement input
    const handleChange = useCallback(
        (field: keyof typeof INITIAL_FORM) =>
            (e: React.ChangeEvent<HTMLInputElement>) => {
                setFormValues(prev => ({
                    ...prev,
                    [field]: e.target.value
                }));
            },
        []
    );

    // Save
    const handleSave = () => {
        setSavedValues(formValues);
        // appel API ici
    };

    // Reset
    const handleReset = () => {
        setFormValues(savedValues);
    };

    return (
        <div className="contenu-profil">
            <p className="derniere-modification-profil">
                Dernière modifications le <span>24 janvier 2025</span>
            </p>

            <div className="zone-information-profil">
                <h2>Mon profil</h2>

                <div className="input-information-profil">
                    <Input
                        label="Nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Dupont"
                    />

                    <Input
                        label="Prénom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        placeholder="Jean"
                    />

                    <Input
                        label="Mail"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="exemple@gmail.com"
                    />

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

                        <Input
                            label="Nom"
                            placeholder="Dupond"
                            value={formValues.nom}
                            onChange={handleChange("nom")}
                        />

                        <Input
                            label="Prénom"
                            placeholder="Jean"
                            value={formValues.prenom}
                            onChange={handleChange("prenom")}
                        />

                        <Input
                            label="Mail"
                            placeholder="exemple@gmail.com"
                            value={formValues.mail}
                            onChange={handleChange("mail")}
                        />

                        <Input
                            label="Langue"
                            value={formValues.langue}
                            onChange={handleChange("langue")}
                        />

                        <Input
                            label="Fuseau horaire"
                            value={formValues.fuseau}
                            onChange={handleChange("fuseau")}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

            {/* Barre de modifications non enregistrées - Pop Up */}
            <UnsavedChangesBar
                visible={isDirty}
                onSave={handleSave}
                onReset={handleReset}
            />

        </>
    );

};

export default ProfilTab;
