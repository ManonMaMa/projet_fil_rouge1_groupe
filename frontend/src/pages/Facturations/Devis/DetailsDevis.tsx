import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import HeaderDetailsDevis from './HeaderDetailsDevis';
import Sidebar from "../../../assets/composants/Sidebar"
import Input from '../../../assets/composants/input';
import BoutonDevisAccepte from '../../../assets/composants/boutonDevisAccepte';
import BoutonDevisRefuse from '../../../assets/composants/boutonDevisRefuse';
import HistoriqueDetailsDevis from '../../../assets/composants/historiqueDetailsDevis';
import UnsavedChangesBar from "../../../assets/composants/UnsavedChangesBar";

import './DetailsDevis.css';

type DevisType = {
    id_devis: number;
    numero_devis: string;
    date_devis: string;
    montant_total_devis: number;
    id_client_fk: number;
    id_statut_fk: number;

    client?: {
        nom_client: string;
        prenom_client: string;
        entreprise_client: string;
        adresse_postale_client: string;
        email_client: string;
    };

    statut?: {
        nom_statut: string;
    };

    prestations?: {
        id_prestation_fk: number;
        duree_prestation: number;
        prestation?: {
            description_prestation: string;
            montant_prestation: number;
        };
    }[];
};


type User = {
    id_user: string
    entreprise_user: string
}



const DetailsDevis: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // 👈 ID du devis

    const [formData, setFormData] = useState<DevisType | null>(null);
    const [savedData, setSavedData] = useState<DevisType | null>(null);
    const [user, setUser] = useState<User | null>(null);


    const fetchDevis = async () => {
        try {
            if (!id) return;

            const res = await fetch(`http://localhost:8000/facturation/devis/details/${id}`);
            const data = await res.json();

            console.log("📄 DEVIS API:", data);

            setFormData(data);
            setSavedData(data);

        } catch (err) {
            console.error("❌ Erreur chargement devis :", err);
        }
    };

    const fetchUser = async () => {
        try {
            const userId = localStorage.getItem("id_user");
            if (!userId) return;

            const res = await fetch(`http://localhost:8000/utilisateur/${userId}`);
            const data = await res.json();

            console.log("👤 USER API:", data);
            setUser(data);

        } catch (err) {
            console.error("❌ Erreur chargement user :", err);
        }
    };


    useEffect(() => {
        fetchDevis();
        fetchUser();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev!,
            [name]: value
        }));
    };

    const isDirty =
        JSON.stringify(formData) !== JSON.stringify(savedData);

    const handleSave = async () => {
        try {
            if (!id || !formData) return;

            const res = await fetch(`http://localhost:8000/facturation/devis/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    numero_devis: formData.numero_devis,
                    date_devis: formData.date_devis,
                    montant_total_devis: formData.montant_total_devis,
                    id_client_fk: formData.id_client_fk
                })
            });

            if (!res.ok) throw new Error("Erreur update devis");

            console.log("✅ Devis mis à jour");

            await fetchDevis();

        } catch (err) {
            console.error("❌ Erreur update :", err);
        }
    };

    const handleReset = () => {
        setFormData(savedData);
    };

    if (!formData) return <p>Chargement...</p>;

    const handleConvertToFacture = async () => {
        if (!id) return;

        try {
            const res = await fetch(`http://localhost:8000/facturation/devis/${id}/convertir`, {
                method: "POST"
            });

            if (!res.ok) throw new Error("Erreur conversion devis → facture");

            const facture = await res.json();

            console.log("📄 Facture créée :", facture);

            navigate(`/facturation/factures/details/${facture.id_facture}`);

        } catch (err) {
            console.error("❌ Erreur conversion :", err);
        }
    };


    return (

        <div className="page-conteneur">
            <Sidebar />

            <div className="page-contenu">

                <HeaderDetailsDevis
                    titre="Devis"
                    sousTitre={formData.numero_devis}
                    statut={formData.statut?.nom_statut}
                    surRetour={() => navigate("/facturation/devis")}
                    surEmettreDevis={handleConvertToFacture}
                />

                <div className="zone-contenu-details-devis">

                    {/* Contenu Gauche - Aperçu Devis */}
                    <div className="details-devis-gauche">
                        <div className="apercu-devis">
                            <div className="apercu-entete">
                                <div className="apercu-logo-zone">
                                    <div className="apercu-logo-cercle" />
                                    <span className="apercu-logo-label">
                                        {user?.entreprise_user || "Votre entreprise"}
                                    </span>
                                </div>
                                <div className="apercu-badge-devis">DEVIS</div>
                            </div>

                            <div className="apercu-meta">
                                <div className="apercu-meta-bloc">
                                    <span className="apercu-meta-label">Numéro</span>
                                    <span className="apercu-meta-valeur">{formData.numero_devis}</span>
                                </div>
                                <div className="apercu-meta-bloc">
                                    <span className="apercu-meta-label">Émission</span>
                                    <span className="apercu-meta-valeur">{formData.date_devis}</span>
                                </div>
                                <div className="apercu-meta-bloc">
                                    <span className="apercu-meta-label">Statut</span>
                                    <span className="apercu-meta-valeur">
                                        {formData.id_statut_fk === 1 ? "En attente" :
                                            formData.id_statut_fk === 2 ? "Refusé" :
                                                formData.id_statut_fk === 3 ? "Accepté" : "—"}
                                    </span>
                                </div>
                            </div>

                            <div className="apercu-separateur" />

                            <div className="apercu-client">
                                <span className="apercu-section-label">Adressé à</span>
                                <p className="apercu-client-nom">
                                    {formData.client?.entreprise_client ||
                                        `${formData.client?.nom_client || ""} ${formData.client?.prenom_client || ""}`}
                                </p>
                                <p className="apercu-client-detail">{formData.client?.adresse_postale_client}</p>
                                <p className="apercu-client-detail">{formData.client?.email_client}</p>
                            </div>

                            <div className="apercu-separateur" />

                            <div className="apercu-lignes">
                                <div className="apercu-ligne-header">
                                    <span>Description</span>
                                    <span>Total</span>
                                </div>
                                {formData.prestations && formData.prestations.length > 0 ? (
                                    formData.prestations.slice(0, 4).map((p, i) => {
                                        const prix = p.prestation?.montant_prestation || 0;
                                        const total = prix * p.duree_prestation;
                                        return (
                                            <div key={i} className="apercu-ligne-item">
                                                <span className="apercu-ligne-desc">
                                                    {p.prestation?.description_prestation || "—"}
                                                </span>
                                                <span className="apercu-ligne-montant">{total.toFixed(2)} €</span>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <p className="apercu-vide">Aucune prestation</p>
                                )}
                                {formData.prestations && formData.prestations.length > 4 && (
                                    <p className="apercu-plus">+{formData.prestations.length - 4} ligne(s)…</p>
                                )}
                            </div>

                            <div className="apercu-total-bande">
                                <span className="apercu-total-label">TOTAL HT</span>
                                <span className="apercu-total-montant">
                                    {(formData.prestations?.reduce((acc, p) => {
                                        const prix = p.prestation?.montant_prestation || 0;
                                        return acc + prix * p.duree_prestation;
                                    }, 0) ?? 0).toFixed(2)} €
                                </span>
                            </div>

                            <div className="apercu-pied">
                                <div className="apercu-pied-ligne" />
                                <span className="apercu-pied-texte">Merci pour votre confiance</span>
                            </div>
                        </div>
                    </div>


                    {/* Contenu Droite - Détails Devis */}
                    <div className="details-devis-droite">

                        {/* Statut */}
                        <div className="details-devis-droite-statut">
                            <div className="titre-section-details-devis">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" viewBox="0 0 24 24" />
                                <h2 style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                                    Statut :
                                </h2>
                            </div>

                            <div className="ligne-1">
                                <BoutonDevisAccepte
                                    onClick={async () => {
                                        if (!id) return;
                                        await fetch(`http://localhost:8000/facturation/devis/${id}/accepter`, {
                                            method: "POST"
                                        });
                                        fetchDevis(); // recharge les données
                                        navigate(`/facturation/devis`);
                                    }}
                                />

                                <BoutonDevisRefuse
                                    onClick={async () => {
                                        if (!id) return;
                                        await fetch(`http://localhost:8000/facturation/devis/${id}/refuser`, {
                                            method: "POST"
                                        });
                                        fetchDevis(); // recharge les données
                                        navigate(`/facturation/devis`);
                                    }}
                                />

                            </div>
                        </div>

                        {/* Client */}
                        <div className="details-devis-droite-client">
                            <div className="titre-section-details-devis">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" viewBox="0 0 24 24" />
                                <h2>Client</h2>
                            </div>

                            <div className="ligne-1">
                                <Input label="Nom / Société" value={formData.client?.entreprise_client ||
                                    `${formData.client?.nom_client || ""} ${formData.client?.prenom_client || ""}`} readOnly type="" placeholder="" style={{ cursor: "default" }} />
                                <Input label="Référence client" value={formData.id_client_fk.toString()} readOnly style={{ cursor: "default" }} />
                            </div>

                            <div className="ligne-2">
                                <Input label="Adresse" value={formData.client?.adresse_postale_client || ""} readOnly style={{ cursor: "default" }} />
                                <Input label="Email" value={formData.client?.email_client || ""} readOnly style={{ cursor: "default" }} />
                            </div>
                        </div>

                        {/* Devis */}
                        <div className="details-devis-droite-devis">
                            <div className="titre-section-details-devis">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" viewBox="0 0 24 24" />
                                <h2>Devis</h2>
                            </div>

                            <div className="ligne-1">
                                <Input label="Numéro" name="numero_devis" value={formData.numero_devis} onChange={handleChange} />
                                <Input label="Date d'émission" name="date_devis" value={formData.date_devis} onChange={handleChange} />
                            </div>

                            <div className="ligne-2">
                                <Input label="Date d'échéance" type="" placeholder="" />
                                <Input label="Montant HT" name="montant_total_devis" value={formData.montant_total_devis.toString()} onChange={handleChange} />
                            </div>

                            <div className="ligne-3">
                                <Input label="TVA" type="" placeholder="" />
                                <Input label="Montant TTC" type="" placeholder="" />
                            </div>
                        </div>

                        {/* Historique */}
                        <div className="details-devis-droite-historique">
                            <div className="titre-section-historique">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" viewBox="0 0 24 24" />
                                <h2>Historique</h2>
                            </div>

                            <div className="ligne-1">
                                <HistoriqueDetailsDevis
                                    title="En attente de payement"
                                    description="Lundi 01 Janvier 2026 à 10:32"
                                    count={2}
                                />
                            </div>

                            <div className="ligne-2">
                                <HistoriqueDetailsDevis
                                    title="Envoyé par mail"
                                    description="Vendredi 28 Décembre 2026 à 09:14"
                                    count={1}
                                />
                            </div>
                        </div>

                        {/* Prestations */}
                        <div className="details-devis-droite-devis">
                            <div className="titre-section-details-devis">
                                <h2>Prestations</h2>
                            </div>

                            <div className="prestations-table-wrapper">
                                <div className="prestations-table-header">
                                    <span>Description</span>
                                    <span>Durée</span>
                                    <span>Prix unitaire</span>
                                    <span>Total</span>
                                </div>

                                {formData.prestations && formData.prestations.length > 0 ? (
                                    formData.prestations.map((p, index) => {
                                        const prix = p.prestation?.montant_prestation || 0;
                                        const totalLigne = prix * p.duree_prestation;

                                        return (
                                            <div key={index} className="prestations-table-row">
                                                <span className="prestation-description">{p.prestation?.description_prestation || "—"}</span>
                                                <span>{p.duree_prestation}h</span>
                                                <span>{prix.toFixed(2)} €</span>
                                                <span className="prestation-total-ligne">{totalLigne.toFixed(2)} €</span>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="prestations-table-empty">Aucune prestation associée</div>
                                )}

                                <div className="prestations-table-total">
                                    <span className="total-label">Total HT</span>
                                    <span className="total-montant">
                                        {(formData.prestations?.reduce((acc, p) => {
                                            const prix = p.prestation?.montant_prestation || 0;
                                            return acc + prix * p.duree_prestation;
                                        }, 0) ?? 0).toFixed(2)} €
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <UnsavedChangesBar
                visible={isDirty}
                onSave={handleSave}
                onReset={handleReset}
            />
        </div>
    );
};

export default DetailsDevis;