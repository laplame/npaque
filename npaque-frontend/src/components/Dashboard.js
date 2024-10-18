// src/components/Dashboard.js
import React from 'react';
import { FaHome, FaClipboardList, FaCubes, FaBarcode, FaUndo } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { BiBell } from 'react-icons/bi';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 p-4">
                <h1 className="text-2xl font-bold mb-6">npaque</h1>
                <nav className="space-y-4">
                    <a href="/" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                        <FaClipboardList />
                        <span>Órdenes</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                        <FaCubes />
                        <span>Pick & Pack</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                        <FaBarcode />
                        <span>Guías</span>
                    </a>
                    <a href="/" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                        <FaUndo />
                        <span>Devoluciones</span>
                    </a>
                </nav>
                <footer className="absolute bottom-4 left-4 text-xs">
                    © 2024 npaque. Todos los derechos reservados.
                </footer>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                        <FaHome />
                        <h2 className="text-xl font-semibold">Inicio</h2>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="bg-gray-700 p-2 rounded">
                            <span>$4.83</span>
                        </div>
                        <BiBell className="text-xl" />
                        <FiSettings className="text-xl text-red-500" />
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-6 rounded">
                        <h3 className="text-lg font-bold mb-2">Pagadas</h3>
                        <p className="text-2xl">1</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded">
                        <h3 className="text-lg font-bold mb-2">Por recolectar</h3>
                        <p className="text-2xl">0</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;