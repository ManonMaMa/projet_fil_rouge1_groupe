import "./Connexion.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Connexion() {
    const navigate = useNavigate()

    const [email_user, setEmail] = useState("")       // email que l'utilisateur tape
    const [mdp_user, setPassword] = useState("")      // mot de passe
    const [error, setError] = useState("")            // message d'erreur

    // Fonction appelée lors du submit du formulaire
    const handleConnexion = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Empêche le rechargement de la page

        try {
            const response = await fetch("http://localhost:8000/connexion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email_user: email_user,
                    mdp_user: mdp_user,
                }),
            })

            if (!response.ok) {
                // Si la connexion échoue, on récupère le message du backend
                const errorData = await response.json()
                setError(errorData.detail || "Erreur inconnue")
                return
            }

            const data = await response.json()
            console.log("Réponse du serveur :", data)

            // ID valide
            if (data.id_user) {
                // Navigation vers le Dashboard
                localStorage.setItem("id_user", data.id_user)
                navigate("/")
            } else {
                setError("ID invalide !!")
            }

        } catch (err) {
            console.error("Erreur réseau :", err)
            setError("Impossible de se connecter. Vérifiez votre connexion.")
        }
    }

    const handleInscription = () => {
        navigate("/Inscription")
    }

    return (
        <div className="connexion-page">
            {/* ------------------------- Partie gauche ------------------------- */}
            <div className="Partie-gauche">
                {/* ------------------------- Contenu centrale ------------------------- */}
                <div className="Contenu">
                    <div className="logo">
                        <span>Oximo</span>
                    </div>

                    <div className="header-text">
                        <h1>Bonjour,<br />Content de vous revoir</h1>
                        <p className="sous-titre">S'il vous plaît, entrez vos informations</p>
                    </div>

                    <form className="connexion-form" onSubmit={handleConnexion}>
                        <div className="input-group">
                            <label>Email</label>
                            <input
                                type="email"
                                value={email_user}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label>Mot de passe</label>
                            <input
                                type="password"
                                value={mdp_user}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && <p className="error-message">{error}</p>}

                        <button type="submit" className="button-connexion">Connexion</button>
                    </form>

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