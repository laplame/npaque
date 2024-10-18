// src/components/Cotizacion.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cotizacion = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        peso: '',
        dimensiones: '',
        direccionDestino: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (submitted) {
            alert('Ya has solicitado una cotización. Regístrate para más servicios.');
            navigate('/register');
            return;
        }

        try {
            // Enviar datos usando cURL con axios
            await axios.post('https://api.tuendpoint.com/cotizacion', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            setSubmitted(true);
            alert('Cotización enviada con éxito. Regístrate para continuar.');
            navigate('/register');
        } catch (error) {
            console.error('Error al enviar la cotización:', error);
            alert('Hubo un error al enviar la cotización. Inténtalo nuevamente.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Solicitar Cotización</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="peso" className="block text-gray-700 font-bold mb-2">Peso (kg)</label>
                    <input
                        type="number"
                        id="peso"
                        name="peso"
                        value={formData.peso}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="dimensiones" className="block text-gray-700 font-bold mb-2">Dimensiones (cm)</label>
                    <input
                        type="text"
                        id="dimensiones"
                        name="dimensiones"
                        value={formData.dimensiones}
                        onChange={handleChange}
                        placeholder="Largo x Ancho x Alto"
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="direccionDestino" className="block text-gray-700 font-bold mb-2">Dirección de destino</label>
                    <input
                        type="text"
                        id="direccionDestino"
                        name="direccionDestino"
                        value={formData.direccionDestino}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                >
                    Solicitar Cotización
                </button>
            </form>
        </div>
    );
};

export default Cotizacion;
