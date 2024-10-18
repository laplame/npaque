// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Bienvenido a npaque</h1>
            <p>La mejor solución para la gestión de envíos y paquetes.</p>
            <Link to="/register">
                <button style={{ margin: '10px' }}>Registrarse</button>
            </Link>
            <Link to="/login">
                <button style={{ margin: '10px' }}>Iniciar sesión</button>
            </Link>
        </div>
    );
};

export default Home;
