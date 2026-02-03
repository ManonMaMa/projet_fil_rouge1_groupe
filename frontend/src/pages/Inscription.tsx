import "./Inscription.css"

function Inscription() {
  return (
    <div className="inscription-page">

        <div className="Partie-gauche">
            <div className="Contenu">
                <h2>Logo</h2>

                <h1>Bienvenue sur Oximo</h1>
                <h3>Créer votre compte en quelques secondes</h3>

                <form>
                    <input
                    type="email"
                    placeholder="email"
                    className="input-field"
                    />

                    <h3>______________________________</h3>

                    <input
                    type="password"
                    placeholder="Mot de passe"
                    className="input-field"
                    />

                    <h3>______________________________</h3>

                    <button type="submit">Continuer</button>

                </form>

                <h3>_____________  ou  ____________</h3>


            </div>
        </div>

        <div className="Partie-droite">

        </div>
    </div>
  )
}

export default Inscription
