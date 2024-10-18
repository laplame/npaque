// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Navbar from './components/Navbar'; // Importar el Navbar
import LandingPage from './components/LandingPage';
import ScrollEffectComponent from './components/ScrollEffectComponent'; // Importar ScrollEffectComponent
import Cotizacion from './components/Cotizacion';

function App() {
    return (
        <Router>
            <Navbar /> {/* Incluir el Navbar */}
            <div className="App">
                <Routes>
                    <Route path="/" element={<LandingPage />} /> {/* Landing page como página principal */}
                    <Route path="/home" element={<Home />} /> {/* Ruta alternativa para el Home */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/cotizacion" element={<Cotizacion />} /> {/* Ruta para el formulario de cotización */}
                    <Route path="/scroll-effect" element={<ScrollEffectComponent />} /> {/* Ruta para ScrollEffectComponent */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
