import React from 'react';
import './ligneFacture.css';

// Types de statut disponibles
type Statut = 'en_attente' | 'annule' | 'paye';

// Interface des props du composant
interface LigneFactureProps {
    id?: string;
    date: string;
    numero: string;
    clientFournisseur: string;
    echeance: string;
    montantTTC: string;
    statut: Statut;
    selectionne?: boolean;
    surFavoris?: (id: string) => void;
    surOptions?: (id: string) => void;
}

// Configuration des statuts (icône SVG, libellé, classe CSS)
const configStatuts: Record<Statut, { icone: React.ReactNode; libelle: string; classe: string }> = {
    en_attente: {
        icone: (
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path><path d="M13 6h-2v6c0 .18.05.35.13.5l3 5.2 1.73-1-2.87-4.96V6.01Z"></path>
            </svg>
        ),
        libelle: 'En attente',
        classe: 'statut--en-attente',
    },

    annule: {
        icone: (
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
            </svg>
        ),
        libelle: 'Annulé',
        classe: 'statut--annule',
    },

    paye: {
        icone: (
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M9 15.59 4.71 11.3 3.3 12.71l5 5c.2.2.45.29.71.29s.51-.1.71-.29l11-11-1.41-1.41L9.02 15.59Z"></path>
            </svg>
        ),
        libelle: 'Payé',
        classe: 'statut--paye',
    },
};

// Icône œil
const IcôneFavoris = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
        fill="currentColor" viewBox="0 0 24 24" >
        <path d="m4.83 12.49 2.04 1.83-.83 2.9-1 3.5c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02l3-2L12 18.19l2.45 1.63 3 2a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1-3.5-.83-2.9 2.04-1.83 2.5-2.25c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-3.15-.25-2.56-.2-2.47-5.46a.998.998 0 0 0-1.82 0L8.61 8.05l-2.56.2-3.15.25c-.4.03-.74.3-.87.68s-.02.8.28 1.06l2.5 2.25Zm1.39-2.25 2.52-.2.62-.05.59-.05.84-1.86 1.2-2.66 1.2 2.66.84 1.86.59.05.62.05 2.52.2.83.07-.77.69-2.5 2.25-.46.42.17.6 1.25 4.38-3.74-2.49-.55-.37-.55.37-3.74 2.49 1.25-4.38.17-.6-.46-.42L6.16 11l-.77-.69z"></path>
    </svg>
);

// Icône trois points
const IcôneTroisPoints = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
        fill="currentColor" viewBox="0 0 24 24" >
        <path d="M12 10a2 2 0 1 0 0 4 2 2 0 1 0 0-4m0 6a2 2 0 1 0 0 4 2 2 0 1 0 0-4m0-12a2 2 0 1 0 0 4 2 2 0 1 0 0-4"></path>
    </svg>
);

// Composant LigneFacture
const LigneFacture: React.FC<LigneFactureProps> = ({
    id = '',
    date,
    numero,
    clientFournisseur,
    echeance,
    montantTTC,
    statut,
    surFavoris,
    surOptions,
}) => {
    const config = configStatuts[statut];

    return (
        <div className={`ligne-facture 'ligne-facture--selectionnee' : ''}`}>
            {/* Checkbox */}
            <div className="ligne-facture__cellule ligne-facture__cellule--checkbox">
                <div
                    className={`ligne-facture__checkbox 'ligne-facture__checkbox--coche' : ''}`}
                >
                </div>
            </div>

            {/* Date */}
            <div className="ligne-facture__cellule ligne-facture__cellule--date">
                <span className="ligne-facture__texte">{date}</span>
            </div>

            {/* Numéro */}
            <div className="ligne-facture__cellule ligne-facture__cellule--numero">
                <span className="ligne-facture__texte">{numero}</span>
            </div>

            {/* Client / Fournisseur */}
            <div className="ligne-facture__cellule ligne-facture__cellule--client">
                <span className="ligne-facture__texte ligne-facture__texte--gras">{clientFournisseur}</span>
            </div>

            {/* Échéance */}
            <div className="ligne-facture__cellule ligne-facture__cellule--echeance">
                <span className="ligne-facture__texte">{echeance}</span>
            </div>

            {/* Montant TTC */}
            <div className="ligne-facture__cellule ligne-facture__cellule--montant">
                <span className="ligne-facture__texte">{montantTTC}</span>
            </div>

            {/* Statut */}
            <div className="ligne-facture__cellule ligne-facture__cellule--statut">
                <span className={`ligne-facture__statut ${config.classe}`}>
                    <span className="ligne-facture__statut-icone">{config.icone}</span>
                    <span className="ligne-facture__statut-libelle">{config.libelle}</span>
                </span>
            </div>

            {/* Actions */}
            <div className="ligne-facture__cellule ligne-facture__cellule--actions">
                <button
                    className="ligne-facture__action-btn"
                    onClick={() => surFavoris?.(id)}
                    title="Voir la facture"
                    aria-label="Voir la facture"
                >
                    <IcôneFavoris />
                </button>

                <button
                    className="ligne-facture__action-btn"
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

export default LigneFacture;

