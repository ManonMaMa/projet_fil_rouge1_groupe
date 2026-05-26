import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import HeaderDetailsClients from './headerDetailsClients';
import Sidebar from "../../assets/composants/Sidebar"
import BeneficesClient from '../../assets/composants/beneficesClient';
import FacturesEmises from '../../assets/composants/facturesEmises';
import FacturesPayees from '../../assets/composants/facturesPayees';
import FacturesAttentes from '../../assets/composants/facturesAttentes';
import UnsavedChangesBar from "../../assets/composants/UnsavedChangesBar";


import Input from '../../assets/composants/input';
import LigneFacture from '../../assets/composants/ligneFacture';
import HistoriqueDetailsDevis from '../../assets/composants/historiqueDetailsDevis';
import './DetailsClients.css';

type ClientType = {
    id_client: number;
    nom_client: string;
    prenom_client: string;
    email_client: string;
    tel_client: string;
    entreprise_client: string;
    adresse_postale_client: string;
    ville_client: string;
};

// Composant principal des Finances
const DetailsClients: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [client, setClient] = useState<ClientType | null>(null);
    const [formData, setFormData] = useState<ClientType | null>(null);
    const [savedData, setSavedData] = useState<ClientType | null>(null);

    const fetchClient = async () => {
        try {
            if (!id) return;

            const id_user = localStorage.getItem("id_user");

            console.log("👤 id_user:", id_user);
            console.log("🆔 client id:", id);

            const response = await fetch(
                `http://localhost:8000/client/${id}?id_user=${id_user}`
            );

            if (!response.ok) {
                throw new Error("Erreur récupération client");
            }

            const data = await response.json();

            console.log("👤 CLIENT API :", data);

            setClient(data);
            setFormData(data);
            setSavedData(data);

        } catch (error) {
            console.error("❌ Erreur fetch client :", error);
        }
    };

    useEffect(() => {
        fetchClient();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev!,
            [name]: value
        }));
    };

        // Détection modification
    const isDirty =
        JSON.stringify(formData) !== JSON.stringify(savedData)

    // SAVE (API)
    const handleSave = async () => {
        try {
            if (!id || !formData) return;

            const response = await fetch(
                `http://localhost:8000/client/update/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            if (!response.ok) {
                throw new Error("Erreur update client");
            }

            console.log("✅ Client mis à jour");

            await fetchClient(); // refresh
        } catch (err) {
            console.error("❌ Erreur update :", err);
        }
    };

    // RESET
    const handleReset = () => {
            setFormData(savedData);
        };

    if (!formData) return <p>Chargement...</p>;

    return (
        <div className="page-conteneur-details-clients">
            <Sidebar />

            <div className="page-contenu-details-clients">
                {/* Header */}
                <HeaderDetailsClients
                    titre="Détails Client"                              // Titre de la page
                    surRetourClients={() => navigate("/clients")}
                />




                <div className="zone-contenu-details-clients">

                    {/* ----------------------------------------- SECTION GAUCHE --------------------------------------- */}
                    <div className="details-clients-gauche">

                        {/* APERÇU */}
                        <div className="section-details-clients">
                            <h2 className="titre-section-details-clients">Aperçu</h2>

                            <div className="apercu-details-clients">
                                <BeneficesClient
                                    label="Bénéfices"
                                    amount="8 000 €"
                                />
                                <FacturesEmises count={10} amount="10 000 €" />
                                <FacturesPayees count={8} amount="8 000 €" />
                                <FacturesAttentes count={2} amount="2 000 €" />
                            </div>
                        </div>


                        {/* INFORMATIONS */}
                        <div className="section-details-clients">
                            <h2 className="titre-section-details-clients">Informations</h2>

                            <div className="ligne-input-informations-details-clients">
                                <Input label="Nom" name="nom_client" value={formData.nom_client} onChange={handleChange}  type="" placeholder="" />
                                <Input label="Prénom" name="prenom_client" value={formData.prenom_client} onChange={handleChange} type="" placeholder="" />
                                <Input label="Société" name="entreprise_client" value={formData.entreprise_client} onChange={handleChange}  type="" placeholder="" />
                            </div>

                            <div className="ligne-input-informations-details-clients">
                                <Input label="Email" name="email_client" value={formData.email_client} onChange={handleChange}  type="" placeholder="" />
                                <Input label="Téléphone" name="tel_client" value={formData.tel_client} onChange={handleChange}  type="" placeholder="" />
                                <Input label="Adrese" name="adresse_postale_client" value={formData.adresse_postale_client} onChange={handleChange}  />
                            </div>

                            <div className="ligne-input-informations-details-clients">
                                <div className="details-clients-informations-left">
                                    <Input label="Ville" name="ville_client" value={formData.ville_client} onChange={handleChange} type="" placeholder="" />
                                </div>

                                <div className="details-clients-informations-right">
                                    <Input label="Note" value="" type="" placeholder="" />
                                </div>
                            </div>
                        </div>


                        {/* FACTURES */}
                        <div className="section-details-clients">
                            <h2 className="titre-section-details-clients">Factures</h2>
                            <LigneFacture
                                id="1"
                                date="01/01/2026"
                                numero="1910-86"
                                clientFournisseur="Victor Albert"
                                echeance="31/01/2026"
                                montantTTC="1 150 €"
                                statut="en_attente"
                                surFavoris={(id) => console.log('Voir', id)}
                                surOptions={(id) => console.log('Options', id)}
                            />

                            <LigneFacture
                                id="1"
                                date="01/01/2026"
                                numero="1910-86"
                                clientFournisseur="Victor Albert"
                                echeance="31/01/2026"
                                montantTTC="1 150 €"
                                statut="payee"
                                surFavoris={(id) => console.log('Voir', id)}
                                surOptions={(id) => console.log('Options', id)}
                            />

                            <LigneFacture
                                id="1"
                                date="01/01/2025"
                                numero="1910-86"
                                clientFournisseur="Victor Albert"
                                echeance="31/01/2025"
                                montantTTC="1 150 €"
                                statut="non_payee"
                                surFavoris={(id) => console.log('Voir', id)}
                                surOptions={(id) => console.log('Options', id)}
                            />
                        </div>


                        {/* DEVIS */}
                        <div className="section-details-clients">
                            <h2 className="titre-section-details-clients">Devis</h2>
                            <LigneFacture
                                id="1"
                                date="01/01/2026"
                                numero="1910-86"
                                clientFournisseur="Victor Albert"
                                echeance="31/01/2026"
                                montantTTC="1 150 €"
                                statut="payee"
                                surFavoris={(id) => console.log('Voir', id)}
                                surOptions={(id) => console.log('Options', id)}
                            />

                            <LigneFacture
                                id="1"
                                date="01/01/2026"
                                numero="1910-86"
                                clientFournisseur="Victor Albert"
                                echeance="31/01/2026"
                                montantTTC="1 150 €"
                                statut="non_payee"
                                surFavoris={(id) => console.log('Voir', id)}
                                surOptions={(id) => console.log('Options', id)}
                            />
                        </div>
                    </div>
                    {/* ------------------------------------------------------------------------------------------------ */}


                    <div className="separateur"></div>


                    {/* ----------------------------------------- SECTION DROITE --------------------------------------- */}
                    <div className="details-clients-droite">

                        {/* ACTIVITÉ */}
                        <div className="section-details-clients">
                            <h2 className="titre-section-details-clients">Activité</h2>

                            <div className="activite-details-clients">
                                <HistoriqueDetailsDevis
                                    title="Préparer les devis clients - Terminé"
                                    description="Lundi 1 Janvier 2026 à 09:12"
                                    count={1}
                                />
                                <HistoriqueDetailsDevis
                                    title="Préparer les devis clients - création tâche"
                                    description="Vendredi 28 Décembre 2026 à 16:20"
                                    count={1}
                                />
                            </div>
                        </div>
                    </div>
                    {/* ------------------------------------------------------------------------------------------------ */}


                </div>
            </div>
            {/* Barre de modifications non enregistrées - Pop Up */}
            <UnsavedChangesBar
                visible={isDirty}
                onSave={handleSave}
                onReset={handleReset}
            />

        </div>
    );
};

export default DetailsClients;