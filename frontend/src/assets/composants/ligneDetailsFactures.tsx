import React from 'react';
import './ligneDetailsFactures.css';


interface LigneDetailsFacturesProps {
    id?: string;
    description: string;
    quantite: string;
    prix: string;
    tva: string;
    total: string;
    selectionne?: boolean;
    surOptions?: (id: string) => void;
}


// Icône grille points
const IconeGrillePoints = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
        fill="currentColor" viewBox="0 0 24 24">
        <path d="M5 3a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4M5 10a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4M5 17a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7.33 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4" />
    </svg>
);

// Icône trois points
const IconeCroix = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
        fill="currentColor" viewBox="0 0 24 24" >
        <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
    </svg>
);


const LigneDetailsFactures: React.FC<LigneDetailsFacturesProps> = ({
    id = '',
    description,
    quantite,
    prix,
    tva,
    total,
    surOptions,
}) => {

    return (
        <div className={`ligne-details-facture 'ligne-details-facture--selectionnee' : ''}`}>
            {/* Checkbox */}
            <div className="ligne-details-facture__cellule ligne-details-facture__action-btn">
                <IconeGrillePoints />
            </div>

            {/* Date */}
            <div className="ligne-details-facture__cellule ligne-details-facture__cellule--date">
                <span className="ligne-details-facture__texte ligne-details-facture__texte--gras">{description}</span>
            </div>

            {/* Numéro */}
            <div className="ligne-details-facture__cellule ligne-details-facture__cellule--numero">
                <span className="ligne-details-facture__texte">{quantite}</span>
            </div>

            {/* Client / Fournisseur */}
            <div className="ligne-details-facture__cellule ligne-details-facture__cellule--client">
                <span className="ligne-details-facture__texte ligne-details-facture__texte">{prix} €</span>
            </div>

            {/* Échéance */}
            <div className="ligne-details-facture__cellule ligne-details-facture__cellule--echeance">
                <span className="ligne-details-facture__texte">{tva} %</span>
            </div>

            {/* Montant TTC */}
            <div className="ligne-details-facture__cellule ligne-details-facture__cellule--montant">
                <span className="ligne-details-facture__texte ligne-details-facture__texte--gras">{total} €</span>
            </div>

            {/* Actions */}
            <div className="ligne-details-facture__cellule ligne-details-facture__cellule--actions">


                <button
                    className="ligne-details-facture__action-btn"
                    onClick={() => surOptions?.(id)}
                    title="Plus d'options"
                    aria-label="Plus d'options"
                >
                    <IconeCroix />
                </button>
            </div>
        </div>
    );
};

export default LigneDetailsFactures;

