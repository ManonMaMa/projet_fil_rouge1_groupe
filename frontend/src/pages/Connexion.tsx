import "./Connexion.css"

function Connexion() {
  return (
    <div className="connexion-page">

        <div className="Partie-gauche">
            <div className="Contenu">
                <h2>Logo</h2>

                <h1>Bonjour,</h1>
                <h1>Content de vous revoir</h1>

                <input
                type="email"
                placeholder="email"
                className="input-field"
                />

                <input
                type="password"
                placeholder="Mot de passe"
                className="input-field"
                />

                <button>Connexion</button>


            </div>
        </div>

        <div className="Partie-droite">

        </div>
    </div>
  )
}

export default Connexion
