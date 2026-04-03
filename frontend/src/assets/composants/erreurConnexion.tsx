import React from "react";
import BoutonPrimary from "./boutonPrimary";
import "./erreurConnexion.css";

interface ErreurConnexionProps {
  /** URL de la page de connexion (défaut : "/login") */
  loginHref?: string;
  /** URL de la page d'accueil (défaut : "/") */
  homeHref?: string;
}

const ErreurConnexion: React.FC<ErreurConnexionProps> = ({
  loginHref = "/login",
  homeHref = "/",
}) => {
  return (
    <div className="erreur-connexion">

      {/* Illustration 404 */}
      <div className="erreur-connexion__illustration">

        {/* 4 gauche */}
        <svg width="90" height="110" viewBox="0 0 90 110" fill="none" aria-hidden="true">
          <path
            d="M60 10 L10 75 L70 75 M60 10 L60 100"
            stroke="#141414"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* 0 avec visage */}
        <div className="erreur-connexion__zero">
          <svg width="90" height="110" viewBox="0 0 90 110" fill="none" aria-hidden="true">
            <ellipse cx="45" cy="55" rx="36" ry="44" stroke="#141414" strokeWidth="10" />
          </svg>

          <div className="erreur-connexion__eye erreur-connexion__eye--left">
            <div className="erreur-connexion__pupil" />
            <div className="erreur-connexion__tear" />
          </div>

          <div className="erreur-connexion__eye erreur-connexion__eye--right">
            <div className="erreur-connexion__pupil" />
            <div className="erreur-connexion__tear" />
          </div>
        </div>

        {/* 4 droite */}
        <svg width="90" height="110" viewBox="0 0 90 110" fill="none" aria-hidden="true">
          <path
            d="M60 10 L10 75 L70 75 M60 10 L60 100"
            stroke="#141414"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Texte */}
      <h1 className="erreur-connexion__title">Utilisateur non connecté</h1>
      <p className="erreur-connexion__description">
        Vous devez être connecté pour accéder à cette page.
        Veuillez vous identifier pour continuer.
      </p>

      {/* Actions */}
      <a href={loginHref} className="erreur-connexion__btn">
        Se connecter
      </a>

      <p className="erreur-connexion__secondary">
        ou <a href={homeHref}>retour à l'accueil</a>
      </p>
    </div>
  );
};

export default ErreurConnexion;