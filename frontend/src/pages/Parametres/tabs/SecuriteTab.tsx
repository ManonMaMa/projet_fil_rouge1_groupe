import React from "react";
import InputPassword from "../../../assets/composants/inputPassword";
import InputPasswordActuel from "../../../assets/composants/inputPasswordActuel";
import HistoriqueSession from "../../../assets/composants/historiqueSession";
import DeconnecterSessions from "../../../assets/composants/deconnecterSessions";
import BoutonPrimary from "../../../assets/composants/boutonPrimary";
import "./SecuriteTab.css"


const sessions = [
    { id: 1, browserName: 'Safari sur Mac OS X', location: 'Grenoble, France', isActive: true },
    { id: 2, browserName: 'Chrome sur Windows', location: 'Paris, France', isActive: false },
    { id: 3, browserName: 'Firefox sur Linux', location: 'Lyon, France', isActive: false },
];

const ProfilTab: React.FC = () => {



    return (
        <>
            <div className="contenu-securite">

                <div className="contenu-1">
                    {/* Dernière modification */}
                    <p className="derniere-modification-securite">Dernière modifications le <span>08 Juin 2025</span></p>
                </div>

                <div className="contenu-2">
                    {/* Zone Changer MDP */}
                    <div className="zone-changer-mdp-securite">
                        <div className="titre-section-securite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                fill="currentColor" viewBox="0 0 24 24" className="logo-titre">
                                <path d="M6 22h12c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2h-1V7c0-2.76-2.24-5-5-5S7 4.24 7 7v2H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2M9 7c0-1.65 1.35-3 3-3s3 1.35 3 3v2H9zm-3 4h12v9h-5v-2.28c.59-.35 1-.99 1-1.72 0-1.1-.9-2-2-2s-2 .9-2 2a2 2 0 0 0 1 1.72V20H6z"></path>
                            </svg>
                            <h2>Changer le mot de passe</h2>
                        </div>

                        <div className="input-information-securite">
                            <div className="mdp-actuel">
                                <InputPasswordActuel label="Mot de passe actuel" type="" placeholder="" />
                            </div>
                            <div className="nouveau-mdp">
                                <InputPassword label="Nouveau mot de passe" type="" placeholder="Entrez un nouveau mot de passe" />
                                <InputPassword label="Confirmez le mot de passe" type="" placeholder="Confirmez le nouveau mot de passe" />
                            </div>
                        </div>
                    </div>

                    {/* Zone Historique Activité */}
                    <div className="zone-historique-securite">
                        <div className="titre-section-securite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                fill="currentColor" viewBox="0 0 24 24" className="logo-titre">
                                <path d="M21.21 8.11c-.25-.59-.56-1.16-.92-1.7-.36-.53-.77-1.03-1.22-1.48s-.95-.86-1.48-1.22c-.54-.36-1.11-.67-1.7-.92-.6-.26-1.24-.45-1.88-.58-1.32-.27-2.71-.27-4.03 0-.64.13-1.27.33-1.88.58-.59.25-1.16.56-1.7.92-.53.36-1.03.77-1.48 1.22-.17.17-.32.35-.48.52L1.99 3v6h6L5.86 6.87c.15-.18.31-.36.48-.52.36-.36.76-.69 1.18-.98.43-.29.89-.54 1.36-.74.48-.2.99-.36 1.5-.47a8 8 0 0 1 4.73.47c.47.2.93.45 1.36.74.42.29.82.62 1.18.98s.69.76.98 1.18c.29.43.54.89.74 1.36.2.48.36.99.47 1.5.11.53.16 1.07.16 1.61a7.85 7.85 0 0 1-.63 3.11c-.2.47-.45.93-.74 1.36-.29.42-.62.82-.98 1.18s-.76.69-1.18.98c-.43.29-.89.54-1.36.74-.48.2-.99.36-1.5.47a8 8 0 0 1-4.73-.47c-.47-.2-.93-.45-1.36-.74-.42-.29-.82-.62-1.18-.98s-.69-.76-.98-1.18c-.29-.43-.54-.89-.74-1.36-.2-.48-.36-.99-.47-1.5A8 8 0 0 1 3.99 12h-2c0 .68.07 1.36.2 2.01.13.64.33 1.27.58 1.88.25.59.56 1.16.92 1.7.36.53.77 1.03 1.22 1.48s.95.86 1.48 1.22c.54.36 1.11.67 1.7.92.6.26 1.24.45 1.88.58.66.13 1.34.2 2.01.2s1.35-.07 2.01-.2c.64-.13 1.27-.33 1.88-.58.59-.25 1.16-.56 1.7-.92.53-.36 1.03-.77 1.48-1.22s.86-.95 1.22-1.48c.36-.54.67-1.11.92-1.7.26-.6.45-1.24.58-1.88.13-.66.2-1.33.2-2.01s-.07-1.36-.2-2.01c-.13-.64-.33-1.27-.58-1.88Z"></path>
                            </svg>
                            <h2>Historique des sessions</h2>
                        </div>

                        <div className="input-information-securite">
                            <HistoriqueSession
                                sessions={sessions}
                                label="Sessions actives"
                                onDelete={(id) => console.log('Supprimer session', id)}
                            />
                            <DeconnecterSessions />
                            <BoutonPrimary
                                label="Essai"
                                onClick={() => {
                                    console.log('Bouton essai cliqué');
                                }}
                            />
                        </div>
                    </div>

                </div>

            </div>

        </>
    );

};

export default ProfilTab;


















