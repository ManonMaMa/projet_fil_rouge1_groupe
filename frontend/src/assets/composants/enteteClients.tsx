import React from 'react';
import './enteteClients.css';



const EnTeteClients: React.FC = () => {
  return (
    <div className="entete-clients">


      {/* Date */}
      <div className="entete-clients__cellule">
        <span className="entete-clients__label">Nom / Société</span>
      </div>

      {/* Numéro */}
      <div className="entete-clients__cellule">
        <span className="entete-clients__label">Email</span>
      </div>

      {/* Client / Fournisseur */}
      <div className="entete-clients__cellule">
        <span className="entete-clients__label">Téléphone</span>
      </div>

      {/* Échéance */}
      <div className="entete-clients__cellule">
        <span className="entete-clients__label">Facture en cours</span>
      </div>

      {/* Montant TTC */}
      <div className="entete-clients__cellule entete-clients__cellule--droite">
        <span className="entete-clients__label">Solde dù</span>
      </div>

      {/* Statut */}
      <div className="entete-clients__cellule">
        <span className="entete-clients__label">Dernière activité</span>
      </div>

      {/* Actions — vide */}
      <div className="entete-clients__cellule entete-clients__cellule--actions" />
    </div>
  );
};

export default EnTeteClients;