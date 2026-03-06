import React, { useEffect, useState } from 'react';
import Header from './headerPrestation';
import Sidebar from "../../assets/composants/Sidebar";
import './Prestations.css';

interface Prestations {
    id_prestation: number;
    description_prestation: string;
    montant_prestation: number;
    id_user_fk: string;
}


const Prestations: React.FC = () => {

    const [prestations, setPrestations] = useState<Prestations[]>([]);

    useEffect(() => {
        const fetchPrestations = async () => {
            try {
                const id_user = "u001"; // Remplace par ton vrai id_user
                const response = await fetch(`http://localhost:8000/prestations?id_user_fk=${id_user}`);
                const data = await response.json();
                setPrestations(data);
            } catch (error) {
                console.error("Erreur lors du chargement des prestations :", error);
            }
        };

        fetchPrestations();
    }, []);

    const NouvellePrestation = () => {
        console.log("Créer une nouvelle prestation");
    };

    return (
        <div className="page-conteneur">
            <Sidebar />

            <div className="page-contenu">

                <Header
                    titre="Prestations"
                    afficherBasculeFiltre={true}
                    nouvelElement={NouvellePrestation}
                    texteBoutonNouvelElement="Nouvelle Prestation"
                />

                <div className="zone-contenu">

                    {prestations.length === 0 ? (
                        <p>Aucune prestation trouvée.</p>
                    ) : (
                        prestations.map((p) => (
                            <div key={p.id_prestation} className="prestation-item">
                                <p>{p.montant_prestation} €</p>
                                <p>{p.description_prestation}</p>
                            </div>
                        ))
                    )}

                </div>
            </div>
        </div>
    );
};

export default Prestations;
