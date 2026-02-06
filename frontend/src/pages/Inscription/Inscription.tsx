import "./Inscription.css"
import "../Connexion/Connexion"
import { useNavigate } from "react-router-dom" // pour la navigation

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
                <form className="inscription-form">
                  
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" />
                    </div>

                    <div className="input-group">
                        <label>Mot de passe</label>
                        <input type="password" />
                    </div>

                    <div className="input-group">
                        <label>Confirmation</label>
                        <input type="password" />
                    </div>

                    <button type="submit" className="button-connexion">Continuer</button>

                </form>

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
