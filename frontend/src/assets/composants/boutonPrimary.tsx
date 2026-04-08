import React from 'react';
import './boutonPrimary.css';

interface BoutonPrimaryProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const BoutonPrimary: React.FC<BoutonPrimaryProps> = ({
  label = 'Bouton',
  onClick,
  disabled = false,
  className = '',
}) => {
  return (
    <button
      type="button"
      className={`custom-primary-btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default BoutonPrimary;