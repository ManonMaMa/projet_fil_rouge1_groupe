import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./composants/Style.css"
//import Connexion from "./pages/Connexion"
import Sidebar from "./composants/Sidebar"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App