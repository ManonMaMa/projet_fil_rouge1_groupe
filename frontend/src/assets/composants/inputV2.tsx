import React, { InputHTMLAttributes } from 'react'; // Imort React et le type des propriétés possibles
import './inputV2.css'; // Import css

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { // Définir les propriétés que le composant peut recevoir
  label?: string; // Propriété optionnelle pour afficher un label
}

const InputV2: React.FC<InputProps> = ({ label, id, ...props }) => { // Créer le composant input et récupère les props (label, ide et reste)
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-'); // Utilise l'ID donnée ou créer à partir du label

  return (
    <div className="input-wrapper-v2">
      {label && ( // Si label existe : l'afficher
        <label className="input-label-v2" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId} // Id de l'input (pour relier le label)
        className="input-field-v2"
        {...props} // Transmet toutes les autres propriétés
      />
    </div>
  );
};

export default InputV2;