import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import HeaderDetailsDevis from './HeaderDetailsDevis';
import Sidebar from "../../../assets/composants/Sidebar"
import Input from '../../../assets/composants/input';
import BoutonDevisAccepte from '../../../assets/composants/boutonDevisAccepte';
import BoutonDevisRefuse from '../../../assets/composants/boutonDevisRefuse';
import HistoriqueDetailsDevis from '../../../assets/composants/historiqueDetailsDevis';
import './DetailsDevis.css';

const DetailsDevis: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // 👈 ID du devis

    const [devis, setDevis] = useState<any>(null);

    useEffect(() => {
        const fetchDevis = async () => {
            try {
                const res = await fetch(`http://localhost:8000/facturation/devis/details/${id}`);
                const data = await res.json();
                setDevis(data);
            } catch (err) {
                console.error("Erreur chargement devis :", err);
            }
        };

        if (id) fetchDevis();
    }, [id]);

    return (

        <div className="page-conteneur">
            <Sidebar />

            <div className="page-contenu">

                <HeaderDetailsDevis
                    titre="Devis"
                    sousTitre={devis?.numero_devis || ""}
                    surRetour={() => navigate("/facturation/devis")}
                />

                <div className="zone-contenu-details-devis">

                    <div className="details-devis-gauche">
                    </div>

                    <div className="details-devis-droite">

                        {/* Statut */}
                        <div className="details-devis-droite-statut">
                            <div className="titre-section-details-devis">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" viewBox="0 0 24 24" />
                                <h2>Statut</h2>
                            </div>

                            <div className="ligne-1">
                                <BoutonDevisAccepte
                                    onClick={() => console.log('Devis accepté')}
                                />
                                <BoutonDevisRefuse
                                    onClick={() => console.log('Devis refusé')}
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
                                <Input label="Nom / Société" type="" placeholder="" />
                                <Input label="Référence client" type="" placeholder={devis?.id_client_fk?.toString() || ""} />
                            </div>

                            <div className="ligne-2">
                                <Input label="Adresse" type="" placeholder={devis?.client?.adresse_postale_client || ""} />
                                <Input label="Email" type="" placeholder={devis?.client?.email_client || ""} />
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
                                <Input label="Numéro" type="" placeholder={devis?.numero_devis || ""} />
                                <Input label="Date d'émission" type="" placeholder={devis?.date_devis || ""} />
                            </div>

                            <div className="ligne-2">
                                <Input label="Date d'échéance" type="" placeholder="" />
                                <Input label="Montant HT" type="" placeholder={devis?.montant_total_devis || ""} />
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

                    </div>
                </div>

            </div>
        </div>
    );
};

export default DetailsDevis;