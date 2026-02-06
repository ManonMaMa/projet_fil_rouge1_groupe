import { BrowserRouter, Routes, Route } from "react-router-dom"
import './app.css'
import './assets/composants/style.css'



// Importation des pages
import Connexion from "./pages/connexion/connexion"
import Inscription from "./pages/inscription/inscription"
import InscriptionP2 from "./pages/inscription_partie2/inscription_p2"

import Dashboard from './pages/dashboard/dashboard'
import Agenda from './pages/agenda/agenda'
import Planification from './pages/planification/planification'
import Finances from './pages/finances/finances'
import Documents from './pages/documents/documents'
import Clients from './pages/clients/clients'
import Parametres from './pages/parametres/parametres'





import Factures from "./pages/facturations/factures/factures"
import Devis from "./pages/facturations/devis/devis"


function App() {
  return (
   <BrowserRouter>
      <div className="app-layout">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/planification" element={<Planification />} />
            <Route path="/finances" element={<Finances />} />
            <Route path="/documents" element={<Documents />} />

            <Route path="/facturation/factures" element={<Factures />} />
            <Route path="/facturation/devis" element={<Devis />} />


            <Route path="/clients" element={<Clients />} />
            <Route path="/parametres" element={<Parametres />} />

            <Route path="/inscription" element={<Inscription />} />
            <Route path="/inscriptionP2" element={<InscriptionP2 />} />
            <Route path="/connexion" element={<Connexion />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App