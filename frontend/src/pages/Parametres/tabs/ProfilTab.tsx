import React, { useState, useEffect } from "react";
import Input from "../../../assets/composants/input";
import UnsavedChangesBar from "../../../assets/composants/UnsavedChangesBar";
import "./ProfilTab.css"

const ProfilTab = ({ user }: any) => {

    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: ""
    })

    const [savedData, setSavedData] = useState({
        nom: "",
        prenom: "",
        email: ""
    })

    // Remplir avec user
    useEffect(() => {
        if (user) {
            const mapped = {
                nom: user.nom || "",
                prenom: user.prenom || "",
                email: user.email || ""
            }

            setFormData(mapped)
            setSavedData(mapped)
        }
    }, [user])

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // Détection modification
    const isDirty =
        JSON.stringify(formData) !== JSON.stringify(savedData)

    // SAVE (API)
    const handleSave = async () => {
        try {
            await fetch("http://localhost:8000/user/update", {
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

            setSavedData(formData)
        } catch (err) {
            console.error(err)
        }
    }

    // RESET
    const handleReset = () => {
        setFormData(savedData)
    }

    if (!user) return <p>Chargement...</p>

    return (
        <>
            <div className="contenu-profil">
                <p className="derniere-modification-profil">
                    Dernière modification
                </p>

                <div className="zone-information-profil">
                    <h2>Mon profil</h2>

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