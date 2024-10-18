// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('/delivery.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">Bienvenido a Npaque</h1>
                        <p className="text-xl mb-8">Enviamos tu negocio.</p>
                        <Link to="/cotizacion">
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded animate-pulse">
                                50 pesos de descuento en tu primer envío, ¡pide aquí!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Banner de logos de paqueterías */}
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 py-4 overflow-hidden">
                <div className="flex flex-col items-center">
                    <div className="flex animate-scroll mb-2">
                        {/* Logos de paqueterías */}
                        <img src="https://www.ups.com/assets/resources/webcontent/images/ups-logo.svg" alt="UPS" className="w-32 h-12 mx-8 object-contain" />
                        <img src="https://www.fedex.com/content/dam/fedex-com/logos/logo.png" alt="FedEx" className="w-32 h-12 mx-8 object-contain" />
                        <img src="https://www.dhl.com/content/dam/dhl/global/core/images/logos/dhl-logo.svg" alt="DHL" className="w-32 h-12 mx-8 object-contain" />
                        {/* Puedes agregar más logos aquí */}
                        <img src="/Logo-Estafeta.svg" alt="Estafeta" className="w-32 h-12 mx-8 object-contain" />
                        <img src="/imile.png" alt="imile" className="w-32 h-12 mx-8 object-contain" />
                        <img src="/jt-express.png" alt="jt" className="w-32 h-12 mx-8 object-contain" />
                    </div>
                    <p className="text-lg font-semibold text-blue-600">¡Compara y envía!</p>
                </div>
            </div>

            {/* Estilos para la animación */}
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
            `}</style>

            {/* Features Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">¿Por qué elegir Npaque?</h2>
                    <div className="flex flex-wrap -mx-6">
                        <div className="w-full md:w-1/3 px-6 mb-12">
                            <div className="bg-gray-200 p-8 rounded-lg shadow-md text-center">
                                <img src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Envíos Rápidos" className="mx-auto mb-4 w-40 h-40 object-cover rounded-full" />
                                <h3 className="text-2xl font-bold mb-2">Envíos Rápidos</h3>
                                <p>Entregamos tus paquetes en tiempo récord, con seguimiento en tiempo real.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-6 mb-12">
                            <div className="bg-gray-200 p-8 rounded-lg shadow-md text-center">
                                <img src="https://images.unsplash.com/photo-1607975218354-4b0350f4c2dd?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Envíos Seguros" className="mx-auto mb-4 w-40 h-40 object-cover rounded-full" />
                                <h3 className="text-2xl font-bold mb-2">Envíos Seguros</h3>
                                <p>Cuidamos de cada paquete con la máxima seguridad y garantía.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-6 mb-12">
                            <div className="bg-gray-200 p-8 rounded-lg shadow-md text-center">
                                <img src="https://plus.unsplash.com/premium_photo-1675884213881-e04d189ccd6a?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tarifas Competitivas" className="mx-auto mb-4 w-40 h-40 object-cover rounded-full" />
                                <h3 className="text-2xl font-bold mb-2">Tarifas Competitivas</h3>
                                <p>Ofrecemos los mejores precios para que ahorres en cada envío.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-16 bg-blue-600 text-white text-center">
                <h2 className="text-4xl font-bold mb-4">¿Listo para enviar tu paquete?</h2>
                <p className="mb-8">Haz clic en el botón de abajo para comenzar tu solicitud de cotización.</p>
                <Link to="/cotizacion">
                    <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded hover:bg-gray-200">
                        Solicitar Cotización
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
