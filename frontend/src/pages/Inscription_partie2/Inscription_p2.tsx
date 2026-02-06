import "./inscription_p2.css"
import "../connexion/connexion"
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
            <div className="contenu_inscription_p2">

                {/* Logo */}
                <div className="logo">
                    <span>Oximo</span>
                </div>

                {/* Texte */}
                <div className="header-text">
                    <h1>Bienvenue sur Oximo</h1>
                    <p className="sous-titre">Remplissez le formulaire</p>
                </div>

                {/* Formulaire */}
                <form className="infos-user-form">

                    <div className="champs-ligne">
                        <div className="input-group">
                            <label>Nom</label>
                            <input type="text" />
                        </div>

                        <div className="input-group">
                            <label>Prenom</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="champs-ligne">
                        <div className="input-group">
                            <label>Entreprise</label>
                            <input type="text" />
                        </div>

                        <div className="input-group">
                            <label>Telephone</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Adresse</label>
                        <input type="text" />
                    </div>

                    <div className="champs-ligne">
                        <div className="input-group">
                            <label>Code postal</label>
                            <input type="text" />
                        </div>

                        <div className="input-group">
                            <label>Ville</label>
                            <input type="text" />
                        </div>

                        <div className="input-group">
                            <label>Pays</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="champs-ligne">
                        <button className="button-connexion button-passer" ><span onClick={handleConnexion}>Passer</span></button>
                        <button type="submit" className="button-connexion">Valider les informations</button>
                    </div>

                </form>
            </div>
        </div>

        {/* ------------------------- Partie droite ------------------------- */}
        <div className="Partie-droite">

        </div>
    </div>
  )
}

export default Inscription
