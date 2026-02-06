import "./Inscription.css"
import "../Connexion/Connexion"
import { useNavigate } from "react-router-dom" // pour la navigation
import { useState } from "react"


function Inscription() {

        const [email, setEmail] = useState("")       // email ce que l'utilisateur tape
        const [password, setPassword] = useState("") // setPassword comment on le met à jour
        
        // Envoyer vers le fastAPI pour simuler un connexion à la  base de donnée !!! A CHANGER VERS LA BDD !!!
        const handleInscription = async () => {
            const response = await fetch("http://localhost:8000/inscription", {
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
    const navigate = useNavigate() // pour la navigation
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
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="input-group">
                        <label>Mot de passe</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div className="input-group">
                        <label>Confirmation</label>
                        <input type="password" />
                    </div>

                    <button type="button" className="button-connexion" onClick={handleInscription}>Continuer</button>

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
