import { BrowserRouter, Routes, Route } from "react-router-dom"
import Connexion from "./pages/Connexion"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Connexion />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App