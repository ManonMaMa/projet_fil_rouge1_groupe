import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import ProtectedRoute from "./ProtectedRoute"
import '../src/styles/variables.css'



// Importation des pages
import Connexion from "./pages/Connexion/Connexion"
import Inscription from "./pages/Inscription/Inscription"
import InscriptionP2 from "./pages/Inscription_partie2/Inscription_p2"

import Dashboard from './pages/Dashboard/Dashboard'
import Agenda from './pages/Agenda/Agenda'
import Planification from './pages/Planification/Planification'
import Finances from './pages/Finances/Finances'
import Documents from './pages/Documents/Documents'
import Clients from './pages/Clients/Clients'
import Parametres from './pages/Parametres/Parametres'


import Factures from "./pages/Facturations/Factures/Factures"
import NouvelleFacture from "./pages/Facturations/Factures/nouvelleFacture"
import DetailsFactures from "./pages/Facturations/Factures/DetailsFactures"
import Devis from "./pages/Facturations/Devis/Devis"
import DetailsDevis from "./pages/Facturations/Devis/DetailsDevis"

import NouveauClient from "./pages/Clients/nouveauClient"


function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <main className="main-content">
          <Routes>
            <Route element={<ProtectedRoute />}>
            </Route>
              <Route path="/" element={<Dashboard />} />
              <Route path="/agenda" element={<Agenda />} />
              <Route path="/planification" element={<Planification />} />
              <Route path="/finances" element={<Finances />} />
              <Route path="/documents" element={<Documents />} />

              <Route path="/clients" element={<Clients />} />
              <Route path="clients/nouveau" element={<NouveauClient />} />

              <Route path="/facturation/devis" element={<Devis />} />
              <Route path="/facturation/devis/details" element={<DetailsDevis />} />

              <Route path="/facturation/factures" element={<Factures />} />
              <Route path="/facturation/factures/nouvelle" element={<NouvelleFacture />} />
              <Route path="/facturation/factures/details" element={<DetailsFactures />} />

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