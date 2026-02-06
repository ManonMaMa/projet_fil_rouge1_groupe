import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from '../src/assets/composants/Sidebar'
import './App.css'
import './assets/composants/Style.css'



// Importation des pages
import Connexion from "./pages/Connexion/Connexion"
import Inscription from "./pages/Inscription/Inscription"

import Dashboard from './pages/Dashboard/Dashboard'
import Agenda from './pages/Agenda/Agenda'
import Planification from './pages/Planification/Planification'
import Finances from './pages/Finances/Finances'
import Documents from './pages/Documents/Documents'
import Clients from './pages/Clients/Clients'
import Parametres from './pages/Parametres/Parametres'





import Factures from "./pages/Facturations/Factures/Factures"
import Devis from "./pages/Facturations/Devis/Devis"


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
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App