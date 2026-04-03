import React from "react";
import "./UnsavedChangesBar.css";

interface UnsavedChangesBarProps {
    visible: boolean;
    onSave: () => void;
    onReset: () => void;
}

const UnsavedChangesBar: React.FC<UnsavedChangesBarProps> = ({ visible, onSave, onReset }) => {
    return (
        <div className={`unsaved-bar ${visible ? "unsaved-bar--visible" : ""}`}>
            <span className="unsaved-bar__message">
                Attention, pensez à enregistrer vos informations !
            </span>
            <div className="unsaved-bar__actions">
                <button className="unsaved-bar__btn-reset" onClick={onReset}>
                    Réinitialiser
                </button>
                <button className="unsaved-bar__btn-save" onClick={onSave}>
                    Enregistrer les modifications
                </button>
            </div>
        </div>
    );
};

export default UnsavedChangesBar;