import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import HeaderNouveauClient from './headerNouveauClient';
import Sidebar from '../../assets/composants/Sidebar';
import Input from '../../assets/composants/input';
import TextArea from '../../assets/composants/textArea';
import './nouveauClient.css'; // CSS de la page nouveau client

const NouveauClient: React.FC = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nom_client: "",
        prenom_client: "",
        email_client: "",
        tel_client: "",
        entreprise_client: "",
        adresse_postale_client: "",
        code_postal_client: "",
        ville_client: "",
        pays_client: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        console.log("✏️ Champ modifié :", name, value);

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // 🔥 RECUP USER SAFE
    const getUserId = () => {
        const id = localStorage.getItem("id_user");

        console.log("👤 ID USER brut localStorage :", id);

        if (!id) {
            console.error("❌ ERREUR : id_user manquant dans localStorage");
            return null;
        }

        return id;
    };

    const handleCreateClient = async () => {
        console.log("📦 FormData envoyé :", formData);

        const id_user_fk = getUserId();

        if (!id_user_fk) {
            alert("Erreur : utilisateur non connecté");
            return;
        }

        const payload = {
            ...formData,
            id_user_fk
        };

        console.log("📤 PAYLOAD FINAL :", payload);

        try {
            const response = await fetch("http://localhost:8000/client", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

        const data = await response.json();

        console.log("✅ Client créé :", data);

            navigate("/clients");

        } catch (err) {
            console.error("❌ Erreur création client :", err);
        }
    };

    return (

        <div className="page-conteneur">
            <Sidebar />

            <div className="page-contenu">
                <HeaderNouveauClient
                    surRetour={() => navigate("/clients")}
                    surEmettre={handleCreateClient}
                />

                {/* Zone principale du contenu de la page ici */}
                <div className="zone-contenu">

                    {/* Ligne 1 */}
                    <div className="ligne-1-nouveau-client">

                        {/* Section Gauche */}
                        <div className="ligne-1-contenu-gauche">
                            <div className="titre-section-nouveau-client">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" viewBox="0 0 24 24" >
                                    <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path>
                                </svg>
                                <h2>Informations</h2>
                            </div>

                            <div className="input-information-client">
                                <div className="client-ligne-1">
                                    <Input label="Type de client" type="" placeholder="" />
                                </div>
                                <div className="client-ligne-2">
                                    <Input label="Nom *" name="nom_client" value={formData.nom_client} onChange={handleChange} type="" placeholder="" />
                                    <Input label="Prénom *" name="prenom_client" value={formData.prenom_client} onChange={handleChange} type="" placeholder="" />
                                </div>
                                <div className="client-ligne-3">
                                    <Input label="Société" name="entreprise_client" value={formData.entreprise_client} onChange={handleChange} type="" placeholder="" />
                                </div>
                            </div>
                        </div>



                        {/* Section Droite */}
                        <div className="ligne-1-contenu-droite">
                            <div className="titre-section-nouveau-client">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" viewBox="0 0 24 24" >
                                    <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M5 20V8h14V6v14z"></path><path d="M12 13h5v5h-5z"></path>
                                </svg>
                                <h2>Contact</h2>
                            </div>

                            <div className="input-information-contact">
                                <div className="client-ligne-1">
                                    <Input label="Email" name="email_client" value={formData.email_client} onChange={handleChange} type="" placeholder="" />
                                    <Input label="Téléphone" name="tel_client" value={formData.tel_client} onChange={handleChange} type="" placeholder="" />
                                </div>
                                <div className="client-ligne-2">
                                    <Input label="Adresse Postale" name="adresse_postale_client" value={formData.adresse_postale_client} onChange={handleChange} type="" placeholder="75 rue de l'impasse" />
                                    <Input label="Code Postal" name="code_postal_client" value={formData.code_postal_client} onChange={handleChange} type="" placeholder="75000" />
                                </div>
                                <div className="client-ligne-3">
                                    <Input label="Ville" name="ville_client" value={formData.ville_client} onChange={handleChange} type="" placeholder="Paris" />
                                    <Input label="Pays" name="pays_client" value={formData.pays_client} onChange={handleChange} type="" placeholder="France" />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Ligne 2 */}
                    <div className="ligne-2-nouveau-client">
                        {/* Section Gauche */}
                        <div className="nouveau-client-gauche">
                            <div className="titre-section-nouveau-client">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" viewBox="0 0 24 24" >
                                    <path d="M19.67 2.61c-.81-.81-2.14-.81-2.95 0L3.38 15.95c-.13.13-.22.29-.26.46l-1.09 4.34c-.08.34.01.7.26.95.19.19.45.29.71.29.08 0 .16 0 .24-.03l4.34-1.09c.18-.04.34-.13.46-.26L21.38 7.27c.81-.81.81-2.14 0-2.95L19.66 2.6ZM6.83 19.01l-2.46.61.61-2.46 9.96-9.94 1.84 1.84zM19.98 5.86 18.2 7.64 16.36 5.8l1.78-1.78s.09-.03.12 0l1.72 1.72s.03.09 0 .12"></path>
                                </svg>
                                <h2>Divers</h2>
                            </div>

                            <div className="input-information-client">
                                <div className="client-ligne-1">
                                    <Input label="Statut" type="" placeholder="" />
                                    <Input label="Date de création" type="" placeholder="" />
                                </div>
                                <div className="client-ligne-2">
                                    <TextArea label="Note interne" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default NouveauClient;