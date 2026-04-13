import React from 'react';
import './ligneClient.css';


interface LigneClientProps {
    id?: string;
    nom_societe: string;
    email: string;
    telephone: string;
    facture_en_cours: string;
    solde_du: string;
    derniere_activite: string;
    surOptions?: (id: string) => void;
}

// Icône nouvelle facture
const Icônenouvellefacture = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
        fill="currentColor" viewBox="0 0 24 24" >
        <path d="M13 10h-2v3H8v2h3v3h2v-3h3v-2h-3z"></path><path d="m19.94 7.68-.03-.09a.8.8 0 0 0-.2-.29l-5-5c-.09-.09-.19-.15-.29-.2l-.09-.03a.8.8 0 0 0-.26-.05c-.02 0-.04-.01-.06-.01H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12s-.01-.04-.01-.06c0-.09-.02-.17-.05-.26ZM6 20V4h7v4c0 .55.45 1 1 1h4v11z"></path>
    </svg>
);

// Icône œil
const Icôneoeil = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
        fill="currentColor" viewBox="0 0 24 24" >
        <path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path><path d="M12 19c7.63 0 9.93-6.62 9.95-6.68.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68s-9.93 6.61-9.95 6.67c-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68Zm0-12c5.35 0 7.42 3.85 7.93 5-.5 1.16-2.58 5-7.93 5s-7.42-3.84-7.93-5c.5-1.16 2.58-5 7.93-5"></path>
    </svg>
);

// Icône trois points
const IcôneTroisPoints = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
        fill="currentColor" viewBox="0 0 24 24" >
        <path d="M12 10a2 2 0 1 0 0 4 2 2 0 1 0 0-4m0 6a2 2 0 1 0 0 4 2 2 0 1 0 0-4m0-12a2 2 0 1 0 0 4 2 2 0 1 0 0-4"></path>
    </svg>
);


const LigneClient: React.FC<LigneClientProps> = ({
    id = '',
    nom_societe,
    email,
    telephone,
    facture_en_cours,
    solde_du,
    derniere_activite,
    surOptions,
}) => {

    return (
        <div className={`ligne-clients 'ligne-clients--selectionnee' : ''}`}>

            {/* Nom / societe */}
            <div className="ligne-clients__cellule ligne-clients__cellule--nom_societe">
                <span className="ligne-clients__texte ligne-clients__texte--gras">{nom_societe}</span>
            </div>

            {/* Email */}
            <div className="ligne-clients__cellule ligne-clients__cellule--email">
                <span className="ligne-clients__texte">{email}</span>
            </div>

            {/* Téléphone */}
            <div className="ligne-clients__cellule ligne-clients__cellule--telephone">
                <span className="ligne-clients__texte">{telephone}</span>
            </div>

            {/* Facture en cours */}
            <div className="ligne-clients__cellule ligne-clients__cellule--facture_en_cours">
                <span className="ligne-facture__texte">{facture_en_cours}</span>
            </div>

            {/* Solde dû */}
            <div className="ligne-clients__cellule ligne-clients__cellule--solde_du">
                <span className="ligne-facture__texte">{solde_du}</span>
            </div>

            {/* Dernière activité */}
            <div className="ligne-clients__cellule ligne-clients__cellule--derniere_activite">
                <span className="ligne-clients__texte">{derniere_activite}</span>
            </div>


            {/* Actions */}
            <div className="ligne-clients__cellule ligne-clients__cellule--actions">
                <button
                    className="ligne-clients__action-btn"
                    title="Voir le client"
                    aria-label="Voir le client"
                >
                    <Icônenouvellefacture />
                </button>

                <button
                    className="ligne-clients__action-btn"
                    title="Voir le client"
                    aria-label="Voir le client"
                >
                    <Icôneoeil />
                </button>

                <button
                    className="ligne-clients__action-btn"
                    onClick={() => surOptions?.(id)}
                    title="Plus d'options"
                    aria-label="Plus d'options"
                >
                    <IcôneTroisPoints />
                </button>
            </div>
        </div>
    );
};

export default LigneClient;

