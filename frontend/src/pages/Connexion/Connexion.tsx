import "./Connexion.css"
import { useNavigate } from "react-router-dom"

function Connexion() {
    const navigate = useNavigate()
    
    // Route vers la page Factures --> "Changer par la suite vers la page Dashboard"
    const handleConnexion = () => {
        navigate("/factures")
    }

    // Route vers la page Inscription
    const handleInscription = () => {
        navigate("/Inscription")
    }




  return (
    <div className="connexion-page">

        {/* ------------------------- Partie gauche ------------------------- */}
        <div className="Partie-gauche">

            {/* ------------------------- Contenu centrale ------------------------- */}
            <div className="Contenu">

                {/* Logo */}
                <div className="logo">
                    <span>Oximo</span>
                </div>

                {/* Texte */}
                <div className="header-text">
                    <h1>Bonjour,<br />Content de vous revoir</h1>
                    <p className="sous-titre">S'il vous plaît, entrez vos informations</p>
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

                    <button type="submit" className="button-connexion" onClick={handleConnexion}>Connexion</button>
                </form>

                {/* Lien */}
                <div className="actions">
                    <p className="link">Mot de passe oublié ?</p>
                </div>

                <p className="signup">
                Vous n’avez pas de compte ? <span onClick={handleInscription}>Créer un compte</span>
                </p>

            </div>

        </div>


        {/* ------------------------- Partie droite ------------------------- */}
        <div className="Partie-droite">

        </div>
    </div>
  )
}

export default Connexion
