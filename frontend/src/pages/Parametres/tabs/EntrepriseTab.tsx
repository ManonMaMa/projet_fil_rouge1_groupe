import React, { useState, useEffect, useRef } from "react";
import Input from "../../../assets/composants/input";
import UnsavedChangesBar from "../../../assets/composants/UnsavedChangesBar";
import ErreurConnexion from "../../../assets/composants/erreurConnexion";
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

    if (!user) return <ErreurConnexion loginHref="connexion" homeHref="/connexion" />;

    return (
        <>
            <div className="contenu-entreprise">
                <p className="derniere-modification-profil">Dernière modifications le <span>08 Juin 2025</span></p>


                {/* IDENTITÉ */}
                <div className="zone-identite-entreprise">

                    <div className="titre-section-securite">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="M20 6h-4V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v17c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V8c0-1.1-.9-2-2-2m0 14H4V4h10v3c0 .55.45 1 1 1h5z"></path><path d="M10 6h2v2h-2zM6 6h2v2H6zm0 4h2v2H6zm4 0h2v2h-2zm6 0h2v2h-2zm-6 4h2v2h-2zm-4 0h2v2H6zm10 0h2v2h-2z"></path>
                        </svg>
                        <h2>Identité de l'entreprise</h2>
                    </div>

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

                        <button onClick={handleImport} className="btn-modifier-logo">
                            {logoSrc ? "Modifier" : "Importer un logo"}
                        </button>

                        {logoSrc && (
                            <button onClick={handleSupprimer}>
                                Supprimer
                            </button>
                        )}
                    </div>

                    <Input
                        label="Nom de l'entreprise"
                        name="entreprise"
                        value={formData.entreprise}
                        onChange={handleChange}
                    />
                </div>



                <div className="zone-information-legal-profil">

                    <div className="titre-section-securite">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" viewBox="0 0 24 24" className="logo-titre">
                            <path d="M6 22h12c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2h-1V7c0-2.76-2.24-5-5-5S7 4.24 7 7v2H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2M9 7c0-1.65 1.35-3 3-3s3 1.35 3 3v2H9zm-3 4h12v9h-5v-2.28c.59-.35 1-.99 1-1.72 0-1.1-.9-2-2-2s-2 .9-2 2a2 2 0 0 0 1 1.72V20H6z"></path>
                        </svg>
                        <h2>Informations légales</h2>
                    </div>

                    <div className="information-profil">
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
                    <p className="derniere-modification-profil">* Les informations peuvent être mises à jour en modifiant directement les champs correspondants.</p>
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