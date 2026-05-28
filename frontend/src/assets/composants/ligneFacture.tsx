import React from 'react';
import './ligneFacture.css';


// Types de statut disponibles
type Statut = 'en_attente' | 'non_payee' | 'payee' | 'refuse' | 'accepte';


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


// Configuration des statuts
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

    refuse: {
        icone: (
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
            </svg>
        ),
        libelle: 'Refusé',
        classe: 'statut--annule',
    },

    accepte: {
        icone: (
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M9 15.59 4.71 11.3 3.3 12.71l5 5c.2.2.45.29.71.29s.51-.1.71-.29l11-11-1.41-1.41L9.02 15.59Z"></path>
            </svg>
        ),
        libelle: 'Accepté',
        classe: 'statut--paye',
    },

    non_payee: {
        icone: (
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
            </svg>
        ),
        libelle: 'Non payée',
        classe: 'statut--annule',
    },

    payee: {
        icone: (
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M9 15.59 4.71 11.3 3.3 12.71l5 5c.2.2.45.29.71.29s.51-.1.71-.29l11-11-1.41-1.41L9.02 15.59Z"></path>
            </svg>
        ),
        libelle: 'Payée',
        classe: 'statut--paye',
    },
};



const LigneFacture: React.FC<LigneFactureProps> = ({
    id = '',
    date,
    numero,
    clientFournisseur,
    echeance,
    montantTTC,
    statut,
}) => {
    const config = configStatuts[statut] ?? {
    icone: null,
    libelle: "Inconnu",
    classe: "statut--inconnu"
};

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
        </div>
    );
};

export default LigneFacture;

