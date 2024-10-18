// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Npaque
                </Link>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/login" className="navbar-link">
                            Iniciar sesión
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/register" className="navbar-link">
                            Registrarse
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/profile" className="navbar-link">
                            Perfil
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
