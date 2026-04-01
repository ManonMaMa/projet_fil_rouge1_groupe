import React from 'react';
import './historiqueSession.css';
import Safari from '../icons/Safari.svg'
import Chrome from '../icons/Chrome.svg'
import Firefox from '../icons/Firefox.svg'

export interface Session {
    id: string | number;
    browserName: string;
    browserIcon?: React.ReactNode;
    location: string;
    isActive: boolean;
}

interface HistoriqueSessionProps {
    sessions: Session[];
    label?: string;
    onDelete?: (id: string | number) => void;
}

/* ── Built-in browser icons ── */
const SafariIcon = () => (
    <img src={Safari} alt="Safari" />
);

const ChromeIcon = () => (
    <img src={Chrome} alt="Chrome" />
);

const FirefoxIcon = () => (
    <img src={Firefox} alt="Firefox" />

);

const DefaultBrowserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
        <rect width="32" height="32" rx="8" fill="#e5e7eb" />
        <circle cx="16" cy="16" r="8" fill="none" stroke="#9ca3af" strokeWidth="2" />
        <line x1="16" y1="8" x2="16" y2="24" stroke="#9ca3af" strokeWidth="1.5" />
        <ellipse cx="16" cy="16" rx="4" ry="8" fill="none" stroke="#9ca3af" strokeWidth="1.5" />
        <line x1="8" y1="16" x2="24" y2="16" stroke="#9ca3af" strokeWidth="1.5" />
    </svg>
);

const resolveBrowserIcon = (name: string): React.ReactNode => {
    const lower = name.toLowerCase();
    if (lower.includes('safari')) return <SafariIcon />;
    if (lower.includes('chrome')) return <ChromeIcon />;
    if (lower.includes('firefox')) return <FirefoxIcon />;
    return <DefaultBrowserIcon />;
};



// ----------------------------------- Icônes ------------------------------ 
// Localisation
const LocationPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
        fill="currentColor" viewBox="0 0 24 24" >
        <path d="M16 10c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4m-6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2"></path><path d="M11.42 21.81c.17.12.38.19.58.19s.41-.06.58-.19c.3-.22 7.45-5.37 7.42-11.82 0-4.41-3.59-8-8-8s-8 3.59-8 8c-.03 6.44 7.12 11.6 7.42 11.82M12 4c3.31 0 6 2.69 6 6 .02 4.44-4.39 8.43-6 9.74-1.61-1.31-6.02-5.29-6-9.74 0-3.31 2.69-6 6-6"></path>
    </svg>
);

// Supprimer
const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        fill="currentColor" viewBox="0 0 24 24" >
        <path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zm1 14H8v-8h2zm6 0h-2v-8h2z"></path>
    </svg>
);
// ------------------------------------------------------------------------- 



const HistoriqueSession: React.FC<HistoriqueSessionProps> = ({
    sessions,
    label = 'Sessions actives',
    onDelete,
}) => {
    return (
        <div className="session-list">
            {label && <span className="session-label">{label}</span>}

            {sessions.map((session) => (
                <div key={session.id} className="session-item">
                    {/* Gauche – icon + browser name */}
                    <div className="session-left">
                        <div className="session-browser-icon">
                            {session.browserIcon ?? resolveBrowserIcon(session.browserName)}
                        </div>
                        <span className="session-browser-name">{session.browserName}</span>
                    </div>

                    {/* Milieu – location */}
                    <div className="session-location">
                        <LocationPinIcon />
                        <span className="session-location-text">{session.location}</span>
                    </div>

                    {/* Droite – status + delete */}
                    <div className="session-right">
                        <span className={`session-status ${session.isActive ? 'active' : 'inactive'}`}>
                            {session.isActive ? 'Active' : 'Inactive'}
                        </span>
                        {onDelete && (
                            <button
                                type="button"
                                className="session-delete-btn"
                                onClick={() => onDelete(session.id)}
                                aria-label="Supprimer la session"
                            >
                                <TrashIcon />
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HistoriqueSession;