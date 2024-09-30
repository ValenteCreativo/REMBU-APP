import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './header.css'; 

const HeaderDashboard = () => {
    const navigate = useNavigate(); // Inicializa useNavigate

    return (
        <header className="header">
            <img src="https://red-causal-armadillo-397.mypinata.cloud/ipfs/QmZK5C8Pt7aRGSghNQXvTPz9VMKhE5xY2oEzXprcXV81kk" alt="Logo" className="logo" />
            <nav className="nav">
                <button className="button" onClick={() => navigate('/dashboard')}>Register Antenna</button>
                <button className="button" onClick={() => navigate('/dashboard3')}>Antenna Map</button>
                <button className="button" onClick={() => navigate('/dashboard2')}>My Antenna Details</button>
                <button className="button" onClick={() => navigate('/dao')}>DAO</button>
            </nav>
        </header>
    );
};

export default HeaderDashboard;
