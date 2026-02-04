import { BrowserRouter, Routes, Route } from "react-router-dom"
import Connexion from "./pages/Connexion"
import Inscription from "./pages/Inscription"

import Factures from "./pages/Factures"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Factures" element={<Factures />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App