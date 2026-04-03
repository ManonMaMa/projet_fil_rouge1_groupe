import React, { useState, useEffect, useRef } from "react";
import Input from "../../../assets/composants/input";
import InputV2 from "../../../assets/composants/inputV2";
import "./EntrepriseTab.css"

const EntrepriseTab = ({ user }: any) => {

    const [formData, setFormData] = useState({
        entreprise: "",
        email: "",
        tel: "",
        adresse_postale: "",
        code_postal: "",
        ville: "",
        pays: ""
    })

    const [logoSrc, setLogoSrc] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Remplir les champs avec user
useEffect(() => {
    if (user) {
        const mappedUser = {
            entreprise: user.entreprise_user,
            email: user.email_user,
            tel: user.tel_user,
            adresse_postale: user.adresse_postale_user,
            code_postal: user.code_postal_user,
            ville: user.ville_user,
            pays: user.pays_user
        }

        setFormData({
            entreprise: mappedUser.entreprise || "",
            email: mappedUser.email || "",
            tel: mappedUser.tel || "",
            adresse_postale: mappedUser.adresse_postale || "",
            code_postal: mappedUser.code_postal || "",
            ville: mappedUser.ville || "",
            pays: mappedUser.pays || ""
        })
    }
}, [user])

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleImport = () => {
        fileInputRef.current?.click();
    };

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

    if (!user) return <p>Chargement...</p>

    return (
        <div className="contenu-entreprise">

            <div className="contenu-1">
                <p className="derniere-modification-entreprise">
                    Dernière modifications le <span>08 Juin 2025</span>
                </p>
            </div>

            <div className="contenu-2">

                {/* IDENTITÉ */}
                <div className="zone-identite-entreprise">
                    <h2>Identité de l'entreprise</h2>

                    {/* LOGO */}
                    <div className="zone-logo">
                        <div className="logo-cercle">
                            {logoSrc ? (
                                <img src={logoSrc} alt="Logo entreprise" className="logo-image" />
                            ) : (
                                <span>Logo</span>
                            )}
                        </div>

                        <div className="logo-boutons">
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                style={{ display: "none" }}
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
                    </div>

                    {/* INPUT ENTREPRISE */}
                    <InputV2
                        label="Nom de l'entreprise"
                        name="entreprise"
                        value={formData.entreprise}
                        onChange={handleChange}
                        placeholder="Mon entreprise"
                    />
                </div>

                {/* INFORMATIONS LÉGALES */}
                <div className="zone-historique-securite">
                    <h2>Informations légales</h2>

                    <div className="input-information-legale-1">

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
                            label="Rue"
                            name="adresse_postale"
                            value={formData.adresse_postale}
                            onChange={handleChange}
                            placeholder="Rue de Paris"
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

            </div>
        </div>
    );
};

export default EntrepriseTab;