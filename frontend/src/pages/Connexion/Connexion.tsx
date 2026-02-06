import "./connexion.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Connexion() {

    const [email, setEmail] = useState("")       // email ce que l'utilisateur tape
    const [password, setPassword] = useState("") // setPassword comment on le met à jour
    
    // Envoyer vers le fastAPI pour simuler un connexion à la  base de donnée !!! A CHANGER VERS LA BDD !!!
    const handleConnexion = async () => {
        const response = await fetch("http://localhost:8000/connexion", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            email: email,
            password: password,
        }),
    })

    const data = await response.json()
    console.log("Réponse du serveur :", data)
    }


    // Route vers la page Inscription
    const navigate = useNavigate()
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
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="input-group">
                        <label>Mot de passe</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
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
