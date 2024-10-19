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

            {/* WhatsApp Button */}
            <div className="fixed bottom-4 right-4 z-50">
                <a
                    href="https://wa.me/5562528044"  // Replace with your actual WhatsApp number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center shadow-lg transition duration-300"
                >
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    </svg>
                    Contáctanos
                </a>
            </div>
        </div>
    );
};

export default LandingPage;
