import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './header.css'; 

const Header = () => {
    const navigate = useNavigate(); // Inicializa useNavigate

    return (
        <header className="header">
            <img src="https://red-causal-armadillo-397.mypinata.cloud/ipfs/QmZK5C8Pt7aRGSghNQXvTPz9VMKhE5xY2oEzXprcXV81kk" alt="Logo" className="logo" />
            <nav className="nav">
                <button className="button" onClick={() => navigate('/preorder')}>Pre-order Antenna</button>
                <button className="button" onClick={() => navigate('/faq')}>FAQ</button> {/* Cambié 'FaQ' a 'faq' para mantener consistencia */}
                <button className="button" onClick={() => navigate('/login')}>Login</button>
            </nav>
        </header>
    );
};

export default Header;
