import React from 'react';
import './enteteDetailsFactures.css';

const EnTeteDetailsFactures: React.FC = () => {
  return (
    <div className="entete-details-factures">
      {/* Colonne checkbox — vide */}
      <div className="entete-details-factures__cellule entete-details-factures__cellule--checkbox" />

      {/* Description */}
      <div className="entete-details-factures__cellule">
        <span className="entete-factures__label">Description</span>
      </div>

      {/* Quantité */}
      <div className="entete-details-factures__cellule">
        <span className="entete-details-factures__label">Quantité</span>
      </div>

      {/* Prix */}
      <div className="entete-details-factures__cellule">
        <span className="entete-details-factures__label">Prix</span>
      </div>

      {/* TVA */}
      <div className="entete-details-factures__cellule">
        <span className="entete-factures__label">TVA (%)</span>
      </div>

      {/* Total */}
      <div className="entete-details-factures__cellule entete-details-factures__cellule--droite">
        <span className="entete-details-factures__label">Total</span>
      </div>

      {/* Actions — vide */}
      <div className="entete-details-factures__cellule entete-details-factures__cellule--actions" />
    </div>
  );
};

export default EnTeteDetailsFactures;