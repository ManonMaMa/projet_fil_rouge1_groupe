import React, { useEffect, useState } from "react";
import Header from "./headerDashboard";
import Sidebar from "../../assets/composants/Sidebar";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
    // 🔹 États pour les stats
    const [totalDevisAcceptes, setTotalDevisAcceptes] = useState(0);
    const [totalFacturesNonPayees, setTotalFacturesNonPayees] = useState(0);
    const [totalFacturesPayees, setTotalFacturesPayees] = useState(0);

    // 🔹 Chargement des stats
    const fetchStats = async () => {
        const userId = "u001"; // à remplacer par ton vrai user connecté

        try {
            const [dA, fNP, fP] = await Promise.all([
                fetch(`http://localhost:8000/facturation/stats/devis-acceptes?id_user=${userId}`).then(r => r.json()),
                fetch(`http://localhost:8000/facturation/stats/factures-non-payees?id_user=${userId}`).then(r => r.json()),
                fetch(`http://localhost:8000/facturation/stats/factures-payees?id_user=${userId}`).then(r => r.json())
            ]);

            setTotalDevisAcceptes(dA.total);
            setTotalFacturesNonPayees(fNP.total);
            setTotalFacturesPayees(fP.total);
        } catch (e) {
            console.error("Erreur chargement stats dashboard :", e);
        }
    };

    useEffect(() => {
        fetchStats();
    }, []);

    return (
        <div className="page-conteneur">
            {/* [Importation de la SideBar ici] */}
            <Sidebar />


            <div className="page-contenu">
                {/* Header */}
                <Header
                    titre="Dashboard"                           // changer le titre de la page
                />

                {/* Zone principale du contenu de la page ici */}
                <div className="zone-contenu">
                    <div className="dashboard-cards">
                        <div className="dashboard-card">
                            <h3>Devis acceptés</h3>
                            <p>{totalDevisAcceptes.toFixed(2)} €</p>
                        </div>

                        <div className="dashboard-card">
                            <h3>Factures non payées</h3>
                            <p>{totalFacturesNonPayees.toFixed(2)} €</p>
                        </div>

                        <div className="dashboard-card">
                            <h3>Factures payées</h3>
                            <p>{totalFacturesPayees.toFixed(2)} €</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
