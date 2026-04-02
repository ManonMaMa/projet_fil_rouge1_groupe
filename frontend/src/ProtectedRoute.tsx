import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoute() { // Bug sur protected route à corriger.
  const isAuthenticated = localStorage.getItem("token")

  return isAuthenticated ? <Outlet /> : <Navigate to="/connexion" />
}

export default ProtectedRoute