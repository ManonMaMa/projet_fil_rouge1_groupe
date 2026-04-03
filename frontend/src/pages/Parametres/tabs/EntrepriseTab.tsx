// ------------------------------ Import ------------------------------
import React, { useState, useRef, useCallback } from "react";
import Input from "../../../assets/composants/input";
import UnsavedChangesBar from "../../../assets/composants/UnsavedChangesBar";
import "./EntrepriseTab.css";
// --------------------------------------------------------------------


// Valeurs initiales du formulaire
// Sert à vérifier si quelque chose a changé
const INITIAL_FORM = {
    nomEntreprise: "",
    email: "",
    telephone: "",
    numero: "",
    rue: "",
    codePostal: "",
    ville: "",
    pays: "",
};

const ProfilTab: React.FC = () => {

    // URL ou souce du logo actuel affiché
    const [logoSrc, setLogoSrc] = useState<string | null>(null);
    // Garder en mémoire le logo sauvegardé pour détecter les modifications
    const [initialLogo, setInitialLogo] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    // Valeur actuel
    const [formValues, setFormValues] = useState(INITIAL_FORM);
    const [savedValues, setSavedValues] = useState(INITIAL_FORM);

    // Détecter si des changements ont été faits
    const isDirty =
        JSON.stringify(formValues) !== JSON.stringify(savedValues) ||
        logoSrc !== initialLogo;

    const handleChange = useCallback(
        (field: keyof typeof INITIAL_FORM) =>
            (e: React.ChangeEvent<HTMLInputElement>) => {
                setFormValues((prev) => ({ ...prev, [field]: e.target.value }));
            },
        []
    );

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

    // Enregistrer : Sauvegarder l'état courant
    const handleSave = () => {
        setSavedValues(formValues);
        setInitialLogo(logoSrc);
        // [appel API ici]
    };

    // Réinitialiser : Revenir aux valeurs sauvegardées
    const handleReset = () => {
        setFormValues(savedValues);
        setLogoSrc(initialLogo);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    return (
        <>
            <div className="contenu-entreprise">

                <div className="contenu-1">
                    <p className="derniere-modification-entreprise">
                        Dernière modifications le <span>08 Juin 2025</span>
                    </p>
                </div>

                <div className="contenu-2">
                    {/* Zone Identité Entreprise */}
                    <div className="zone-identite-entreprise">
                        <div className="titre-section-entreprise">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 6h-4V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v17c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V8c0-1.1-.9-2-2-2m0 14H4V4h10v3c0 .55.45 1 1 1h5z"></path>
                                <path d="M10 6h2v2h-2zM6 6h2v2H6zm0 4h2v2H6zm4 0h2v2h-2zm6 0h2v2h-2zm-6 4h2v2h-2zm-4 0h2v2H6zm10 0h2v2h-2z"></path>
                            </svg>
                            <h2>Identité de l'entreprise</h2>
                        </div>

                        {/* Zone Logo */}
                        <div className="zone-logo">
                            <div className="logo-cercle">
                                {logoSrc ? (
                                    <img src={logoSrc} alt="Logo entreprise" className="logo-image" />
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M21 14V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h9v-2H5v-1.59l3-3 1.29 1.29c.39.39 1.02.39 1.41 0l5.29-5.29 3 3V14h2Zm-4.29-5.71a.996.996 0 0 0-1.41 0l-5.29 5.29-1.29-1.29a.996.996 0 0 0-1.41 0l-2.29 2.29V5h14v5.59L16.73 8.3Z"></path>
                                        <path d="M8.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M21 16h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path>
                                    </svg>
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
                                <button className="btn-modifier-logo" onClick={handleImport}>
                                    {logoSrc ? "Modifier" : "Importer un logo"}
                                </button>
                                {logoSrc && (
                                    <button className="btn-supprimer-logo" onClick={handleSupprimer}>
                                        Supprimer
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="input-information-entreprise">
                            <div className="mdp-actuel">
                                <Input
                                    label="Nom de l'entreprise"
                                    type=""
                                    placeholder=""
                                    value={formValues.nomEntreprise}
                                    onChange={handleChange("nomEntreprise")}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Zone Informations légales */}
                    <div className="zone-historique-securite">
                        <div className="titre-section-securite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path d="m19.94 7.68-.03-.09a.8.8 0 0 0-.2-.29l-5-5c-.09-.09-.19-.15-.29-.2l-.09-.03a.8.8 0 0 0-.26-.05c-.02 0-.04-.01-.06-.01H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12s-.01-.04-.01-.06c0-.09-.02-.17-.05-.26ZM6 20V4h7v4c0 .55.45 1 1 1h4v11z"></path>
                                <path d="M8 11h8v2H8zm0 4h8v2H8zm0-8h3v2H8z"></path>
                            </svg>
                            <h2>Informations légales</h2>
                        </div>

                        <div className="input-information-legale-1">
                            <Input label="Email" type="" placeholder="example@email.fr"
                                value={formValues.email} onChange={handleChange("email")} />

                            <Input label="Téléphone" type="" placeholder="06 60 06 60 06"
                                value={formValues.telephone} onChange={handleChange("telephone")} />

                            <Input label="Adresse" type="" placeholder="24 rue du puis"
                                value={formValues.numero} onChange={handleChange("numero")} />

                            <Input label="Code postal" type="" placeholder="73000"
                                value={formValues.codePostal} onChange={handleChange("codePostal")} />

                            <Input label="Ville" type="" placeholder="Chambéry"
                                value={formValues.ville} onChange={handleChange("ville")} />

                            <Input label="Pays" type="" placeholder="France"
                                value={formValues.pays} onChange={handleChange("pays")} />
                        </div>
                    </div>
                </div>
            </div>

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