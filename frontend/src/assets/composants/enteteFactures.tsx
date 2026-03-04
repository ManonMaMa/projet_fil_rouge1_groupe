import React from 'react';
import './enteteFactures.css';

// Composant d'en-tête fixe pour la liste des factures
const EnTeteFactures: React.FC = () => {
  return (
    <div className="entete-factures">
      {/* Colonne checkbox — vide */}
      <div className="entete-factures__cellule entete-factures__cellule--checkbox" />

      {/* Date */}
      <div className="entete-factures__cellule">
        <span className="entete-factures__label">Date</span>
      </div>

      {/* Numéro */}
      <div className="entete-factures__cellule">
        <span className="entete-factures__label">Numéro</span>
      </div>

      {/* Client / Fournisseur */}
      <div className="entete-factures__cellule">
        <span className="entete-factures__label">Client / Fournisseur</span>
      </div>

      {/* Échéance */}
      <div className="entete-factures__cellule">
        <span className="entete-factures__label">Échéance</span>
      </div>

      {/* Montant TTC */}
      <div className="entete-factures__cellule entete-factures__cellule--droite">
        <span className="entete-factures__label">Montant TTC</span>
      </div>

      {/* Statut */}
      <div className="entete-factures__cellule">
        <span className="entete-factures__label">Statut</span>
      </div>

      {/* Actions — vide */}
      <div className="entete-factures__cellule entete-factures__cellule--actions" />
    </div>
  );
};

export default EnTeteFactures;