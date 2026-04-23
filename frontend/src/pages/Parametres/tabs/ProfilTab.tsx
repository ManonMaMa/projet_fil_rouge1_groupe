import React, { useState, useEffect } from "react";
import Input from "../../../assets/composants/input";
import UnsavedChangesBar from "../../../assets/composants/UnsavedChangesBar";
import ErreurConnexion from "../../../assets/composants/erreurConnexion";
import "./ProfilTab.css"

type User = {
    id_user: string
    nom: string
    prenom: string
    email: string
}

type FormData = {
    nom: string
    prenom: string
    email: string
}

const ProfilTab = ({ user, refreshUser }: { user: User | null, refreshUser: () => void }) => {

    const [formData, setFormData] = useState<FormData>({
        nom: "",
        prenom: "",
        email: ""
    })

    const [savedData, setSavedData] = useState<FormData>({
        nom: "",
        prenom: "",
        email: ""
    })

    useEffect(() => {
        if (user) {
            const mapped: FormData = {
                nom: user.nom || "",
                prenom: user.prenom || "",
                email: user.email || ""
            }

            setFormData(mapped)
            setSavedData(mapped)
        }
    }, [user])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        } as FormData))
    }


    // Détection modification
    const isDirty =
        JSON.stringify(formData) !== JSON.stringify(savedData)

    // SAVE (API)
    const handleSave = async () => {
        try {
            await fetch(`http://localhost:8000/user/update/${user?.id_user}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nom_user: formData.nom,
                    prenom_user: formData.prenom,
                    email_user: formData.email
                })
            })

            await refreshUser()
            setSavedData(formData)
        } catch (err) {
            console.error(err)
        }
    }

    // RESET
    const handleReset = () => {
        setFormData(savedData)
    }

    if (!user) return <ErreurConnexion loginHref="connexion" homeHref="/connexion" />;

    return (
        <>
            <div className="contenu-profil">
                <p className="derniere-modification-profil">Dernière modifications le <span>08 Juin 2025</span></p>


                <div className="zone-information-profil">

                    <div className="titre-section-securite">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" viewBox="0 0 24 24" className="logo-titre">
                            <path d="M6 22h12c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2h-1V7c0-2.76-2.24-5-5-5S7 4.24 7 7v2H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2M9 7c0-1.65 1.35-3 3-3s3 1.35 3 3v2H9zm-3 4h12v9h-5v-2.28c.59-.35 1-.99 1-1.72 0-1.1-.9-2-2-2s-2 .9-2 2a2 2 0 0 0 1 1.72V20H6z"></path>
                        </svg>
                        <h2>Mon Profil</h2>
                    </div>

                    <div className="information-profil">
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
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="exemple@gmail.com"
                    />
                    </div>
                </div>

                <p className="derniere-modification-profil">* Les informations peuvent être mises à jour en modifiant directement les champs correspondants.</p>
            </div>


            {/* Barre de modifications non enregistrées - Pop Up */}
            <UnsavedChangesBar
                visible={isDirty}
                onSave={handleSave}
                onReset={handleReset}
            />
        </>
    )
}

export default ProfilTab;