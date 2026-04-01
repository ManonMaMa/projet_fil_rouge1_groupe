import React from 'react';
import './deconnecterSessions.css';

interface DeconnecterSessions {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const DeconnecterSessions: React.FC<DeconnecterSessions> = ({
  label = 'Déconnecter toutes les sessions',
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type="button"
      className="disconnect-btn"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default DeconnecterSessions;