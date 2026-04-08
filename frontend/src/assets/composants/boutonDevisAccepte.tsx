import React from 'react';
import './boutonDevisAccepte.css';

interface BoutonDevisAccepteProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const BoutonDevisAccepte: React.FC<BoutonDevisAccepteProps> = ({
  label = 'Bouton',
  onClick,
  disabled = false,
  className = '',
}) => {
  return (
    <button
      type="button"
      className={`custom-primary-btn-devis-accepte ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {/* SVG à gauche */}
      <span className="btn-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
          fill="currentColor" viewBox="0 0 24 24" >
          <path d="M9 15.59 4.71 11.3 3.3 12.71l5 5c.2.2.45.29.71.29s.51-.1.71-.29l11-11-1.41-1.41L9.02 15.59Z"></path>
        </svg>
      </span>

      <span>Marquer comme accepté</span>
    </button>
  );
};

export default BoutonDevisAccepte;