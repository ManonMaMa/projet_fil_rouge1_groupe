import { useState, useEffect } from "react";
import Input from "../../../assets/composants/input";
import "./ProfilTab.css"

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

                </div>
            </div>
        </div>
    )
}

export default ProfilTab;