import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import HeaderNouveauDevis from './HeaderNouveauDevis';
import Sidebar from "../../../assets/composants/Sidebar"
import Input from '../../../assets/composants/input';

import EnTeteDetailsFactures from '../../../assets/composants/enteteDetailsFactures';

import './NouveauDevis.css';

const NouveauDevis: React.FC = () => {
    const navigate = useNavigate();

    const [prestations, setPrestations] = useState<any[]>([]);
    const [lignes, setLignes] = useState<any[]>([]);
    const [clients, setClients] = useState<any[]>([]);
    const [clientSelectionne, setClientSelectionne] = useState<any>(null);

    useEffect(() => {
        const id_user = localStorage.getItem("id_user");
        if (!id_user) return;
        fetch(`http://localhost:8000/prestations`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setPrestations(data);
                } else {
                    console.error("Erreur API :", data);
                    setPrestations([]);
                }
            })
            .catch(err => console.error("Erreur fetch :", err));
    }, []);

    useEffect(() => {
        const id_user = localStorage.getItem("id_user");
        if (!id_user) return;
        fetch(`http://localhost:8000/clients/${id_user}`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setClients(data);
                } else {
                    setClients([]);
                }
            })
            .catch(err => console.error("Erreur clients :", err));
    }, []);

    const ajouterLigne = () => {
        setLignes([...lignes, { prestation: null, quantite: 1 }]);
    };

    const modifierLigne = (index: number, champ: string, valeur: any) => {
        const nouvellesLignes = [...lignes];
        nouvellesLignes[index][champ] = valeur;
        setLignes(nouvellesLignes);
    };

    const totalHT = lignes.reduce((total, ligne) => {
        if (!ligne.prestation) return total;
        return total + (ligne.prestation.montant_prestation * ligne.quantite);
    }, 0);

    const tva = totalHT * 0.2;
    const totalTTC = totalHT + tva;

    const creerDevis = async () => {
        const id_user = localStorage.getItem("id_user");
        if (!id_user) {
            alert("Utilisateur non connecté");
            return;
        }

        // 1️⃣ Création du devis
        const devis = {
            numero_devis: "DEV-" + Date.now(),
            date_devis: new Date().toISOString().split("T")[0],
            montant_total_devis: 0, // le backend recalculera
            id_client_fk: clientSelectionne?.id_client,
            id_user_fk: id_user,
            id_statut_fk: 1
        };

        const res = await fetch("http://localhost:8000/facturation/devis", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(devis)
        });

        if (!res.ok) {
            console.error(await res.text());
            alert("Erreur création devis");
            return;
        }

        const devisCree = await res.json();
        console.log("Devis créé :", devisCree);

        // 2️⃣ Ajout des prestations une par une
        for (const ligne of lignes) {
            if (!ligne.prestation) continue;

            await fetch(`http://localhost:8000/facturation/devis/${devisCree.id_devis}/prestations`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id_prestation: ligne.prestation.id_prestation,
                    duree: ligne.quantite
                })
            });
        }

        // 3️⃣ Redirection
        navigate("/facturation/devis");
    };


    return (
        <div className="page-conteneur-nouvelle-facture">
            <Sidebar />

            <div className="page-contenu-nouvelle-facture">
                <HeaderNouveauDevis
                    surRetour={() => navigate("/facturation/devis")}
                    surEmettre={creerDevis}
                />

                <div className="zone-contenu-nouvelle-facture">

                    {/* CLIENT */}
                    <div className="ligne-1-nouvelle-facture">
                        <div className="ligne-1-contenu-gauche-nouvelle-facture">
                            <div className="titre-section-nouvelle-facture">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path>
                                </svg>
                                <h2>Client</h2>
                            </div>

                            <div className="input-information-client-nouvelle-facture">
                                <div className="client-ligne-1">
                                    <div className="select-wrapper-devis">
                                        <span className="select-label-devis">Sélectionner un client</span>
                                        <select
                                            className="select-field-devis"
                                            onChange={(e) => {
                                                const client = clients.find(
                                                    c => c.id_client === Number(e.target.value)
                                                );
                                                setClientSelectionne(client);
                                            }}
                                        >
                                            <option value="">Choisir un client</option>
                                            {clients.map(c => (
                                                <option key={c.id_client} value={c.id_client}>
                                                    {c.nom_client} {c.prenom_client}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="client-ligne-1">
                                    <Input
                                        label="Nom / Société"
                                        value={
                                            clientSelectionne?.entreprise_client ||
                                            `${clientSelectionne?.nom_client || ""} ${clientSelectionne?.prenom_client || ""}`
                                        }
                                        readOnly
                                    />
                                </div>
                                <div className="client-ligne-2">
                                    <Input label="Adresse" value={clientSelectionne?.adresse_postale_client || ""} readOnly />
                                    <Input label="Email" value={clientSelectionne?.email_client || ""} readOnly />
                                </div>
                                <div className="client-ligne-3">
                                    <Input label="Numéro Client" value={clientSelectionne?.id_client || ""} readOnly />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DÉTAILS */}
                    <div className="ligne-2-nouvelle-facture">
                        <div className="titre-section-nouvelle-facture">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.67 2.61c-.81-.81-2.14-.81-2.95 0L3.38 15.95c-.13.13-.22.29-.26.46l-1.09 4.34c-.08.34.01.7.26.95.19.19.45.29.71.29.08 0 .16 0 .24-.03l4.34-1.09c.18-.04.34-.13.46-.26L21.38 7.27c.81-.81.81-2.14 0-2.95L19.66 2.6ZM6.83 19.01l-2.46.61.61-2.46 9.96-9.94 1.84 1.84zM19.98 5.86 18.2 7.64 16.36 5.8l1.78-1.78s.09-.03.12 0l1.72 1.72s.03.09 0 .12"></path>
                            </svg>
                            <h2>Détails</h2>
                        </div>

                        <div className="input-information-details-nouvelle-facture">
                            <EnTeteDetailsFactures />

                            {lignes.map((ligne, index) => (
                                <div key={index} className="ligne-detail-devis">
                                    <select
                                        className="select-field-devis select-prestation-devis"
                                        onChange={(e) => {
                                            const prestation = prestations.find(
                                                p => p.id_prestation === Number(e.target.value)
                                            );
                                            modifierLigne(index, "prestation", prestation);
                                        }}
                                    >
                                        <option>Choisir une prestation</option>
                                        {Array.isArray(prestations) && prestations.map(p => (
                                            <option key={p.id_prestation} value={p.id_prestation}>
                                                {p.description_prestation} - {p.montant_prestation}€
                                            </option>
                                        ))}
                                    </select>

                                    <input
                                        className="input-quantite-devis"
                                        type="number"
                                        value={ligne.quantite}
                                        onChange={(e) =>
                                            modifierLigne(index, "quantite", Number(e.target.value))
                                        }
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="input-information-details-2-nouvelle-facture">
                            <div>
                                <button className="nouvelle-facture-ajouter-ligne" onClick={ajouterLigne}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3 13h8v8h2v-8h8v-2h-8V3h-2v8H3z"></path>
                                    </svg>
                                    Ajouter une ligne
                                </button>
                            </div>

                            <div className="totaux-devis">
                                <div className="total-ht-nouvelle-facture">
                                    <p>Total HT</p>
                                    <p>{totalHT.toFixed(2)} €</p>
                                </div>
                                <div className="total-tva-nouvelle-facture">
                                    <p>TVA (20%)</p>
                                    <p>{tva.toFixed(2)} €</p>
                                </div>
                                <div className="total-ttc-devis">
                                    <p>Total TTC</p>
                                    <p>{totalTTC.toFixed(2)} €</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NouveauDevis;
