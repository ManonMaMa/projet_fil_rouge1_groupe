import { Link, useLocation } from "react-router-dom" // Pour la navigation
import { useState, useEffect } from "react"
import "./sidebar.css"


function Sidebar() {
    const location = useLocation()

    const isActive = (path: string) => {
        return location.pathname === path ? "onglet active" : "onglet"
    }

    const isFacturationActive = () => {
        return location.pathname === "/facturation/factures" ||
                location.pathname === "/facturation/devis"
    }

    const [isFacturationOpen, setIsFacturationOpen] = useState(isFacturationActive())


    // Ouvrir automatiquement le sous-menu si on est sur une page de facturation
    useEffect(() => {
        if (isFacturationActive()) {
            setIsFacturationOpen(true)
        }
    }, [location.pathname])
    



    return (
        <div className="sidebar-page">
            {/* PREMIÈRE PARTIE D'ONGLETS */}
            <div className="milieu-page">

                {/* Dashboard */}
                <Link to="/" className={isActive("/")}>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M3 13h1v7c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h1c.4 0 .77-.24.92-.62.15-.37.07-.8-.22-1.09l-8.99-9a.996.996 0 0 0-1.41 0l-9.01 9c-.29.29-.37.72-.22 1.09s.52.62.92.62Zm9-8.59 6 6V20H6v-9.59z"></path>
                    </svg>
                    <p>Dashboard</p>
                </Link>


                {/* Agenda */}
                <Link to="/agenda" className={isActive("/agenda")}>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M5 20V8h14V6v14z"></path><path d="M7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"></path>
                    </svg>
                    <p>Agenda</p>
                </Link>


                {/* Planification */}
                <Link to="/planification" className={isActive("/planification")}>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24" >
                        <path d="m4 8.09-1.29-1.3-1.42 1.42L4 10.91l4.71-4.7-1.42-1.42zm0 8-1.29-1.3-1.42 1.42L4 18.91l4.71-4.7-1.42-1.42zM10 15h12v2H10zm0-8h12v2H10z"></path>
                    </svg>
                    <p>Planification</p>
                </Link>
                

                {/* Finances */}
                <Link to="/finances" className={isActive("/finances")}>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M3 15h2v6H3zm4-2h2v8H7zm4-1h2v9h-2zm4 1h2v8h-2zm4-5h2v13h-2z"></path><path d="m19.21 2.38-4.87 6.21-5-4-6.13 7.79 1.58 1.24 4.87-6.21 5 4 6.13-7.79z"></path>
                    </svg>
                    <p>Finances</p>
                </Link>
                

                {/* Documents */}
                <Link to="/documents" className={isActive("/documents")}>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M19.67 2.61c-.81-.81-2.14-.81-2.95 0L3.38 15.95c-.13.13-.22.29-.26.46l-1.09 4.34c-.08.34.01.7.26.95.19.19.45.29.71.29.08 0 .16 0 .24-.03l4.34-1.09c.18-.04.34-.13.46-.26L21.38 7.27c.81-.81.81-2.14 0-2.95L19.66 2.6ZM6.83 19.01l-2.46.61.61-2.46 9.96-9.94 1.84 1.84zM19.98 5.86 18.2 7.64 16.36 5.8l1.78-1.78s.09-.03.12 0l1.72 1.72s.03.09 0 .12"></path>
                    </svg>
                    <p>Documents</p>
                </Link>
                

                {/* Facturation avec sous-menu */}
                <div>
                    <button 
                        className={`onglet ${isFacturationActive() ? 'active' : ''}`}
                        onClick={() => setIsFacturationOpen(!isFacturationOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                            <path d="m19.94 7.68-.03-.09a.8.8 0 0 0-.2-.29l-5-5c-.09-.09-.19-.15-.29-.2l-.09-.03a.8.8 0 0 0-.26-.05c-.02 0-.04-.01-.06-.01H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12s-.01-.04-.01-.06c0-.09-.02-.17-.05-.26ZM6 20V4h7v4c0 .55.45 1 1 1h4v11z"></path><path d="M8 11h8v2H8zm0 4h8v2H8zm0-8h3v2H8z"></path>
                        </svg>
                        <p>Facturation</p>
                        <svg 
                            className={`chevron ${isFacturationOpen ? 'open' : ''}`}
                            xmlns="http://www.w3.org/2000/svg" 
                            width="25" 
                            height="25"  
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
                        </svg>
                    </button>

                    {/* Sous-menu */}
                    <div className={`sous-menu ${isFacturationOpen ? 'open' : ''}`}>
                        <Link to="/facturation/factures" className={isActive("/facturation/factures")}>
                            <p>Factures</p>
                        </Link>
                        <Link to="/facturation/devis" className={isActive("/facturation/devis")}>
                            <p>Devis</p>
                        </Link>
                    </div>
                </div>


                {/* Clients */}
                <Link to="/clients" className={isActive("/clients")}>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M12 11c1.71 0 3-1.29 3-3s-1.29-3-3-3-3 1.29-3 3 1.29 3 3 3m0-4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1m1 5h-2c-2.76 0-5 2.24-5 5v.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V17c0-2.76-2.24-5-5-5m-5 5c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3zm-1.5-6c.47 0 .9-.12 1.27-.33a5.03 5.03 0 0 1-.42-4.52C7.09 6.06 6.8 6 6.5 6 5.06 6 4 7.06 4 8.5S5.06 11 6.5 11m-.39 1H5.5C3.57 12 2 13.57 2 15.5v1c0 .28.22.5.5.5H4c0-1.96.81-3.73 2.11-5m11.39-1c1.44 0 2.5-1.06 2.5-2.5S18.94 6 17.5 6c-.31 0-.59.06-.85.15a5.03 5.03 0 0 1-.42 4.52c.37.21.79.33 1.27.33m1 1h-.61A6.97 6.97 0 0 1 20 17h1.5c.28 0 .5-.22.5-.5v-1c0-1.93-1.57-3.5-3.5-3.5"></path>
                    </svg>
                    <p>Clients</p>
                </Link>
                
            </div>



            {/* DEUXIÈME PARTIE D'ONGLETS */}
            <div className="bas-page">
                {/* Paramètres */}
                <Link to="/parametres" className={isActive("/parametres")}>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.08 0-2-.92-2-2s.92-2 2-2 2 .92 2 2-.92 2-2 2"></path><path d="m20.42 13.4-.51-.29c.05-.37.08-.74.08-1.11s-.03-.74-.08-1.11l.51-.29c.96-.55 1.28-1.78.73-2.73l-1-1.73a2.006 2.006 0 0 0-2.73-.73l-.53.31c-.58-.46-1.22-.83-1.9-1.11v-.6c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v.6c-.67.28-1.31.66-1.9 1.11l-.53-.31c-.96-.55-2.18-.22-2.73.73l-1 1.73c-.55.96-.22 2.18.73 2.73l.51.29c-.05.37-.08.74-.08 1.11s.03.74.08 1.11l-.51.29c-.96.55-1.28 1.78-.73 2.73l1 1.73c.55.95 1.77 1.28 2.73.73l.53-.31c.58.46 1.22.83 1.9 1.11v.6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-.6a8.7 8.7 0 0 0 1.9-1.11l.53.31c.95.55 2.18.22 2.73-.73l1-1.73c.55-.96.22-2.18-.73-2.73m-2.59-2.78c.11.45.17.92.17 1.38s-.06.92-.17 1.38a1 1 0 0 0 .47 1.11l1.12.65-1 1.73-1.14-.66c-.38-.22-.87-.16-1.19.14-.68.65-1.51 1.13-2.38 1.4-.42.13-.71.52-.71.96v1.3h-2v-1.3c0-.44-.29-.83-.71-.96-.88-.27-1.7-.75-2.38-1.4a1.01 1.01 0 0 0-1.19-.15l-1.14.66-1-1.73 1.12-.65c.39-.22.58-.68.47-1.11-.11-.45-.17-.92-.17-1.38s.06-.93.17-1.38A1 1 0 0 0 5.7 9.5l-1.12-.65 1-1.73 1.14.66c.38.22.87.16 1.19-.14.68-.65 1.51-1.13 2.38-1.4.42-.13.71-.52.71-.96v-1.3h2v1.3c0 .44.29.83.71.96.88.27 1.7.75 2.38 1.4.32.31.81.36 1.19.14l1.14-.66 1 1.73-1.12.65c-.39.22-.58.68-.47 1.11Z"></path>
                    </svg>
                    <p>Paramètres</p>
                </Link>
                

                {/* Déconnexion */}
                <button className="onglet" onClick={() => {
                    // Logique de déconnexion ici
                    console.log("Déconnexion")
                }}>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M15 11H8v2h7v4l6-5-6-5z"></path><path d="M5 21h7v-2H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2"></path>
                    </svg>
                    <p>Déconnexion</p>
                </button>

            </div>
        </div>
    )
}

export default Sidebar

