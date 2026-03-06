import React, { useEffect, useState } from 'react';
import Header from './headerPrestation';
import Sidebar from "../../assets/composants/Sidebar";
import './Prestations.css';

interface Prestations {
    id: number;
    prix: number;
    description: string;
    id_user: string;
}

const Prestations: React.FC = () => {

    const [prestations, setPrestations] = useState<Prestations[]>([]);
    const [ongletActif, setOngletActif] = useState("tous");

    const Onglets = [
        { id: 'tous', etiquette: 'Tous', compteur: prestations.length },
        { id: 'à faire', etiquette: 'À faire', compteur: 5 },
        { id: 'en cours', etiquette: 'En cours', compteur: 3 },
    ];

    useEffect(() => {
        const fetchPrestations = async () => {
            try {
                const id_user = "123"; // Remplace par ton vrai id_user
                const response = await fetch(`http://localhost:8000/prestations?id_user=${id_user}`);
                const data = await response.json();
                setPrestations(data);
            } catch (error) {
                console.error("Erreur lors du chargement des prestations :", error);
            }
        };

        fetchPrestations();
    }, []);

    const changementOnglet = (tabId: string) => {
        setOngletActif(tabId);
    };

    const NouvellePrestation = () => {
        console.log("Créer une nouvelle prestation");
    };

    return (
        <div className="page-conteneur">
            <Sidebar />

            <div className="page-contenu">

                <Header
                    titre="Prestations"
                    onglets={Onglets}
                    ongletActif={ongletActif}
                    surChangementOnglet={changementOnglet}
                    afficherBasculeFiltre={true}
                    nouvelElement={NouvellePrestation}
                    texteBoutonNouvelElement="Nouvelle Prestation"
                />

                <div className="zone-contenu">

                    {prestations.length === 0 ? (
                        <p>Aucune prestation trouvée.</p>
                    ) : (
                        prestations.map((p) => (
                            <div key={p.id} className="prestation-item">
                                <p>{p.prix} €</p>
                                {p.description && (
                                    <p className="description">{p.description}</p>
                                )}
                            </div>
                        ))
                    )}

                </div>
            </div>
        </div>
    );
};

export default Prestations;
