import "./Inscription.css"
import "./Connexion.css"
import { useNavigate } from "react-router-dom" // pour la navigation


import googleIcone from "../icone-svg/google.svg";
import appleIcone from "../icone-svg/apple.svg";

function Inscription() {
    const navigate = useNavigate() // pour la navigation

    // Route vers la page Inscription
    const handleConnexion = () => {
        navigate("/Connexion")
    }




  return (
    <div className="inscription-page">

        {/* ------------------------- Partie gauche ------------------------- */}
        <div className="Partie-gauche">

            {/* ------------------------- Contenu central ------------------------- */}
            <div className="Contenu">

                {/* Logo */}
                <div className="logo">
                    <span>Oximo</span>
                </div>

                {/* Texte */}
                <div className="header-text">
                    <h1>Bienvenue sur Oximo</h1>
                    <p className="sous-titre">Créer votre compte en quelques secondes</p>
                </div>

                {/* Formulaire */}
                <form className="connexion-form">
                  
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" />
                    </div>

                    <div className="input-group">
                        <label>Mot de passe</label>
                        <input type="password" />
                    </div>

                    <button type="submit" className="button-connexion">Continuer</button>

                </form>

                <div className="actions">
                    <div className="connexion-autre">
                        <div className="ligne"></div>
                        <p className="ou">ou</p>
                        <div className="ligne"></div>
                    </div>

                    <div className="button-co-autre">
                        <button className="button-connexion co-autre">
                            <img src={googleIcone} alt="Google" className="icone"></img>
                            <p>Google</p>
                        </button>
                        <button className="button-connexion co-autre">
                            <img src={appleIcone} alt="Apple" className="icone"></img>
                            <p>Apple</p>
                        </button>
                    </div>
                </div>

                <p className="signup">
                Vous avez déjà un compte ? <span onClick={handleConnexion}>Connexion</span>
                </p>

            </div>
        </div>

        {/* ------------------------- Partie droite ------------------------- */}
        <div className="Partie-droite">

        </div>
    </div>
  )
}

export default Inscription
