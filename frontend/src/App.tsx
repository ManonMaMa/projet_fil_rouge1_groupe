import { BrowserRouter, Routes, Route } from "react-router-dom"
import Connexion from "./pages/Connexion"
//import Sidebar from "./composants/Sidebar"

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