import { BrowserRouter, Routes, Route } from "react-router-dom"
import './assets/composants/Style.css'
import Connexion from "./pages/Connexion"
import Inscription from "./pages/Inscription"

import Factures from "./pages/Factures"
import Devis from "./pages/Devis"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Factures" element={<Factures />} />
        <Route path="/Devis" element={<Devis />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App