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

    // Ajouter une ligne
    const ajouterLigne = () => {
        setLignes([
        ...lignes,
        { prestation: null, quantite: 1 }
        ]);
    };

    // Modifier la ligne
    const modifierLigne = (index: number, champ: string, valeur: any) => {
        const nouvellesLignes = [...lignes];
        nouvellesLignes[index][champ] = valeur;
        setLignes(nouvellesLignes);
    };

    // Calculs
    const totalHT = lignes.reduce((total, ligne) => {
        if (!ligne.prestation) return total;
        return total + (ligne.prestation.montant_prestation * ligne.quantite);
        }, 0);

        const tva = totalHT * 0.2;
        const totalTTC = totalHT + tva;

    // Création d'un devis     
    const creerDevis = async () => {
        const id_user = localStorage.getItem("id_user");

        if (!id_user) {
            alert("Utilisateur non connecté");
            return;
        }

        const devis = {
            numero_devis: "DEV-" + Date.now(),
            date_devis: new Date().toISOString().split("T")[0],
            montant_total_devis: totalTTC,
            id_client_fk: clientSelectionne?.id_client,
            id_user_fk: localStorage.getItem("id_user"),
            id_statut_fk: 1
        };

        const res = await fetch("http://localhost:8000/facturation/devis", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(devis)
        });

        if (!res.ok) {
            const error = await res.text();
            console.error("Erreur backend :", error);
            throw new Error("Erreur création devis");
        }

        const data = await res.json();
        console.log("✅ Devis créé :", data);

        navigate("/facturation/devis");

    };


    return (

        <div className="page-conteneur-nouvelle-facture">
        {/* Importation SideBar */}
        <Sidebar />

        <div className="page-contenu-nouvelle-facture">
            {/* HEADER */}
            <HeaderNouveauDevis
                surRetour={() => navigate("/facturation/devis")}
                surEmettre={creerDevis}
            />

            <div className="zone-contenu-nouvelle-facture">

            {/*  CLIENT */}
          <div className="ligne-1-nouvelle-facture">
            <div className="ligne-1-contenu-gauche-nouvelle-facture">
              <h2>Client</h2>
              <select
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

              <Input
                  label="Nom / Société"
                  value={
                      clientSelectionne?.entreprise_client ||
                      `${clientSelectionne?.nom_client || ""} ${clientSelectionne?.prenom_client || ""}`
                  }
                  readOnly
              />

              <Input
                  label="Adresse"
                  value={clientSelectionne?.adresse_postale_client || ""}
                  readOnly
              />

              <Input
                  label="Email"
                  value={clientSelectionne?.email_client || ""}
                  readOnly
              />

              <Input
                  label="Numéro Client"
                  value={clientSelectionne?.id_client || ""}
                  readOnly
              />
            </div>
          </div>

          {/*  DÉTAILS */}
          <div className="ligne-2-nouvelle-facture">

            <h2>Détails</h2>

            <EnTeteDetailsFactures />

            {lignes.map((ligne, index) => (
              <div key={index}>

                <select
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
                  type="number"
                  value={ligne.quantite}
                  onChange={(e) =>
                    modifierLigne(index, "quantite", Number(e.target.value))
                  }
                />

              </div>
            ))}

            {/* bouton */}
            <button onClick={ajouterLigne}>
              Ajouter une ligne
            </button>

            {/* Totaux */}
            <div>
              <p>Total HT : {totalHT.toFixed(2)} €</p>
              <p>TVA : {tva.toFixed(2)} €</p>
              <p>Total TTC : {totalTTC.toFixed(2)} €</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NouveauDevis;