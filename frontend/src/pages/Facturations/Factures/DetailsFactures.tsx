import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../../assets/composants/Sidebar";
import Input from '../../../assets/composants/input';
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

    prestations?: {
        id_prestation_fk: number;
        duree_prestation: number;
        prestation?: {
            description_prestation: string;
            montant_prestation: number;
        };
    }[];
};

const DetailsFacture: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [facture, setFacture] = useState<FactureType | null>(null);

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

    useEffect(() => {
        fetchFacture();
    }, [id]);

    if (!facture) return <p>Chargement...</p>;

    return (
        <div className="page-conteneur">
            <Sidebar />

            <div className="page-contenu">

                <HeaderDetailsFactures
                    titre="Facture"
                    sousTitre={facture.numero_facture}
                    surRetour={() => navigate("/facturation/factures")}
                />

                <div className="zone-contenu-details-devis">

                    <div className="details-devis-gauche">
                    </div>

                    <div className="details-devis-droite">

                        {/* Client */}
                        <div className="details-devis-droite-client">
                            <div className="titre-section-details-devis">
                                <h2>Client</h2>
                            </div>

                            <div className="ligne-1">
                                <Input
                                    label="Nom / Société"
                                    value={
                                        facture.client?.entreprise_client ||
                                        `${facture.client?.nom_client || ""} ${facture.client?.prenom_client || ""}`
                                    }
                                    readOnly
                                />
                                <Input label="Référence client" value={facture.id_client_fk.toString()} readOnly />
                            </div>

                            <div className="ligne-2">
                                <Input label="Adresse" value={facture.client?.adresse_postale_client || ""} readOnly />
                                <Input label="Email" value={facture.client?.email_client || ""} readOnly />
                            </div>
                        </div>

                        {/* Facture */}
                        <div className="details-devis-droite-devis">
                            <div className="titre-section-details-devis">
                                <h2>Facture</h2>
                            </div>

                            <div className="ligne-1">
                                <Input label="Numéro" value={facture.numero_facture} readOnly />
                                <Input label="Date d'émission" value={facture.date_facture} readOnly />
                            </div>

                            <div className="ligne-2">
                                <Input label="Date d'échéance" value={facture.echeance_facture} readOnly />
                                <Input label="Montant HT" value={facture.montant_total_facture.toString()} readOnly />
                            </div>
                        </div>

                        {/* Prestations */}
                        <div className="details-devis-droite-devis">
                            <div className="titre-section-details-devis">
                                <h2>Prestations</h2>
                            </div>

                            <div className="table-prestations">
                                <div className="table-header">
                                    <span>Description</span>
                                    <span>Durée</span>
                                    <span>Prix unitaire</span>
                                    <span>Total ligne</span>
                                </div>

                                {facture.prestations?.map((p, index) => {
                                    const prix = p.prestation?.montant_prestation || 0;
                                    const totalLigne = prix * p.duree_prestation;

                                    return (
                                        <div key={index} className="table-row">
                                            <span>{p.prestation?.description_prestation || "—"}</span>
                                            <span>{p.duree_prestation}</span>
                                            <span>{prix.toFixed(2)} €</span>
                                            <span>{totalLigne.toFixed(2)} €</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsFacture;
