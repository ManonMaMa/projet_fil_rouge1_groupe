import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../../assets/composants/Sidebar";
import Input from '../../../assets/composants/input';
import BoutonFacturePayee from '../../../assets/composants/boutonFacturePayee';
import BoutonFactureRefuse from '../../../assets/composants/boutonFactureRefuse';
import HeaderDetailsFactures from "../Factures/HeaderDetailsFactures"; // tu peux renommer plus tard

import "./DetailsFactures.css";

type FactureType = {
    id_facture: number;
    numero_facture: string;
    date_facture: string;
    echeance_facture: string;
    montant_total_facture: number;
    id_client_fk: number;

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

const DetailsFacture: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [facture, setFacture] = useState<FactureType | null>(null);
    const [user, setUser] = useState<User | null>(null);


    const fetchFacture = async () => {
        try {
            if (!id) return;

            const res = await fetch(`http://localhost:8000/facturation/factures/details/${id}`);
            const data = await res.json();

            console.log("📄 FACTURE API:", data);

            setFacture(data);

        } catch (err) {
            console.error("❌ Erreur chargement facture :", err);
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
        fetchFacture();
        fetchUser();
    }, [id]);

    if (!facture) return <p>Chargement...</p>;

    return (
        <div className="page-conteneur">
            <Sidebar />

            <div className="page-contenu">

                <HeaderDetailsFactures
                    titre="Facture"
                    sousTitre={facture.numero_facture}
                    statut={facture.statut?.nom_statut}
                    surRetour={() => navigate("/facturation/factures")}
                />

                <div className="zone-contenu-details-factures">

                    {/* Contenu Gauche - Aperçu Facture */}
                    <div className="details-factures-gauche">
                        <div className="apercu-facture">
                            <div className="apercu-entete">
                                <div className="apercu-logo-zone">
                                    <div className="apercu-logo-cercle" />
                                    <span className="apercu-logo-label">{user?.entreprise_user || "Votre entreprise"}</span>
                                </div>
                                <div className="apercu-badge-facture">FACTURE</div>
                            </div>

                            <div className="apercu-meta">
                                <div className="apercu-meta-bloc">
                                    <span className="apercu-meta-label">Numéro</span>
                                    <span className="apercu-meta-valeur">{facture.numero_facture}</span>
                                </div>
                                <div className="apercu-meta-bloc">
                                    <span className="apercu-meta-label">Émission</span>
                                    <span className="apercu-meta-valeur">{facture.date_facture}</span>
                                </div>
                                <div className="apercu-meta-bloc">
                                    <span className="apercu-meta-label">Échéance</span>
                                    <span className="apercu-meta-valeur">{facture.echeance_facture}</span>
                                </div>
                            </div>

                            <div className="apercu-separateur" />

                            <div className="apercu-client">
                                <span className="apercu-section-label">Facturé à</span>
                                <p className="apercu-client-nom">
                                    {facture.client?.entreprise_client ||
                                        `${facture.client?.nom_client || ""} ${facture.client?.prenom_client || ""}`}
                                </p>
                                <p className="apercu-client-detail">{facture.client?.adresse_postale_client}</p>
                                <p className="apercu-client-detail">{facture.client?.email_client}</p>
                            </div>

                            <div className="apercu-separateur" />

                            <div className="apercu-lignes">
                                <div className="apercu-ligne-header">
                                    <span>Description</span>
                                    <span>Total</span>
                                </div>
                                {facture.prestations && facture.prestations.length > 0 ? (
                                    facture.prestations.slice(0, 4).map((p, i) => {
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
                                {facture.prestations && facture.prestations.length > 4 && (
                                    <p className="apercu-plus">+{facture.prestations.length - 4} ligne(s)…</p>
                                )}
                            </div>

                            <div className="apercu-total-bande">
                                <span className="apercu-total-label">TOTAL HT</span>
                                <span className="apercu-total-montant">
                                    {(facture.prestations?.reduce((acc, p) => {
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


                    {/* Contenu Droite - Détails Facture */}
                    <div className="details-factures-droite">

                        {/* Client */}
                        <div className="details-factures-droite-client">
                            <div className="titre-section-details-devis">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" viewBox="0 0 24 24" />
                                <h2 style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                                    Statut :
                                </h2>
                            </div>

                            <div className="ligne-1">
                                <BoutonFacturePayee
                                    onClick={async () => {
                                        if (!id) return;
                                        await fetch(`http://localhost:8000/facturation/factures/${id}/payee`, {
                                            method: "POST"
                                        });
                                        fetchFacture(); // recharge les données
                                        navigate(`/facturation/factures`);
                                    }}
                                />

                                <BoutonFactureRefuse
                                    onClick={async () => {
                                        if (!id) return;
                                        await fetch(`http://localhost:8000/facturation/factures/${id}/nonpayee`, {
                                            method: "POST"
                                        });
                                        fetchFacture(); // recharge les données
                                        navigate(`/facturation/factures`);
                                    }}
                                />
                            </div>
                            <div className="titre-section-client">
                                <h2>Client</h2>
                            </div>

                            <div className="ligne-1">
                                <Input
                                    label="Nom / Société"
                                    value={
                                        facture.client?.entreprise_client ||
                                        `${facture.client?.nom_client || ""} ${facture.client?.prenom_client || ""}`
                                    }
                                    readOnly style={{ cursor: "default" }}
                                />
                                <Input label="Référence client" value={facture.id_client_fk.toString()} readOnly style={{ cursor: "default" }} />
                            </div>

                            <div className="ligne-2">
                                <Input label="Adresse" value={facture.client?.adresse_postale_client || ""} readOnly style={{ cursor: "default" }} />
                                <Input label="Email" value={facture.client?.email_client || ""} readOnly style={{ cursor: "default" }} />
                            </div>
                        </div>

                        {/* Facture */}
                        <div className="details-factures-droite-factures">
                            <div className="titre-section-factures">
                                <h2>Facture</h2>
                            </div>

                            <div className="ligne-1">
                                <Input label="Numéro" value={facture.numero_facture} readOnly style={{ cursor: "default" }} />
                                <Input label="Date d'émission" value={facture.date_facture} readOnly style={{ cursor: "default" }} />
                            </div>

                            <div className="ligne-2">
                                <Input label="Date d'échéance" value={facture.echeance_facture} readOnly style={{ cursor: "default" }} />
                                <Input label="Montant HT" value={facture.montant_total_facture.toString()} readOnly style={{ cursor: "default" }} />
                            </div>
                        </div>

                        {/* Prestations */}
                        <div className="details-factures-droite-factures">
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

                                {facture.prestations && facture.prestations.length > 0 ? (
                                    facture.prestations.map((p, index) => {
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
                                        {(facture.prestations?.reduce((acc, p) => {
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
        </div>
    );
};


export default DetailsFacture;
