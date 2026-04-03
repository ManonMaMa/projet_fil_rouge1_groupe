import React, { useState, useEffect, useRef } from "react";
import Input from "../../../assets/composants/input";
import InputV2 from "../../../assets/composants/inputV2";
import UnsavedChangesBar from "../../../assets/composants/UnsavedChangesBar";
import "./EntrepriseTab.css";

const EntrepriseTab = ({ user }: any) => {

    const [formData, setFormData] = useState({
        entreprise: "",
        email: "",
        tel: "",
        adresse_postale: "",
        code_postal: "",
        ville: "",
        pays: ""
    });

    const [savedData, setSavedData] = useState(formData);

    const [logoSrc, setLogoSrc] = useState<string | null>(null);
    const [savedLogo, setSavedLogo] = useState<string | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    // Mapping user -> form
    useEffect(() => {
        if (user) {
            const mapped = {
                entreprise: user.entreprise || "",
                email: user.email || "",
                tel: user.tel || "",
                adresse_postale: user.adresse_postale || "",
                code_postal: user.code_postal || "",
                ville: user.ville || "",
                pays: user.pays || ""
            };

            setFormData(mapped);
            setSavedData(mapped);
        }
    }, [user]);

    // Change input
    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Logo
    const handleImport = () => fileInputRef.current?.click();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => setLogoSrc(ev.target?.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleSupprimer = () => {
        setLogoSrc(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    // Detect changes
    const isDirty =
        JSON.stringify(formData) !== JSON.stringify(savedData) ||
        logoSrc !== savedLogo;

    // SAVE
    const handleSave = async () => {
        try {
            await fetch("http://localhost:8000/user/update", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    entreprise_user: formData.entreprise,
                    email_user: formData.email,
                    tel_user: formData.tel,
                    adresse_postale_user: formData.adresse_postale,
                    code_postal_user: formData.code_postal,
                    ville_user: formData.ville,
                    pays_user: formData.pays
                })
            });

            setSavedData(formData);
            setSavedLogo(logoSrc);
        } catch (err) {
            console.error(err);
        }
    };

    // RESET
    const handleReset = () => {
        setFormData(savedData);
        setLogoSrc(savedLogo);
    };

    if (!user) return <p>Chargement...</p>;

    return (
        <>
            <div className="contenu-entreprise">

                <p className="derniere-modification-entreprise">
                    Dernière modification
                </p>

                {/* IDENTITÉ */}
                <div className="zone-identite-entreprise">
                    <h2>Identité de l'entreprise</h2>

                    <div className="zone-logo">
                        <div className="logo-cercle">
                            {logoSrc ? (
                                <img src={logoSrc} className="logo-image" />
                            ) : (
                                <span>Logo</span>
                            )}
                        </div>

                        <input
                            ref={fileInputRef}
                            type="file"
                            hidden
                            onChange={handleFileChange}
                        />

                        <button onClick={handleImport}>
                            {logoSrc ? "Modifier" : "Importer un logo"}
                        </button>

                        {logoSrc && (
                            <button onClick={handleSupprimer}>
                                Supprimer
                            </button>
                        )}
                    </div>

                    <InputV2
                        label="Nom de l'entreprise"
                        name="entreprise"
                        value={formData.entreprise}
                        onChange={handleChange}
                    />
                </div>

                {/* INFOS */}
                <div className="zone-historique-securite">
                    <h2>Informations légales</h2>

                    <Input
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.fr"
                    />

                    <Input
                        label="Téléphone"
                        name="tel"
                        value={formData.tel}
                        onChange={handleChange}
                        placeholder="06 00 00 00 00"
                    />

                    <Input
                        label="Adresse"
                        name="adresse_postale"
                        value={formData.adresse_postale}
                        onChange={handleChange}
                        placeholder="24 Rue de Paris"
                    />

                    <Input
                        label="Code postal"
                        name="code_postal"
                        value={formData.code_postal}
                        onChange={handleChange}
                        placeholder="75000"
                    />

                    <Input
                        label="Ville"
                        name="ville"
                        value={formData.ville}
                        onChange={handleChange}
                        placeholder="Paris"
                    />

                    <Input
                        label="Pays"
                        name="pays"
                        value={formData.pays}
                        onChange={handleChange}
                        placeholder="France"
                    />
                </div>
            </div>

            <UnsavedChangesBar
                visible={isDirty}
                onSave={handleSave}
                onReset={handleReset}
            />
        </>
    );
};

export default EntrepriseTab;