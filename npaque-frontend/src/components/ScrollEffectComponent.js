// src/components/ScrollEffectComponent.js
import React, { useState, useEffect } from 'react';

export default function ScrollEffectComponent() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [layersVisible, setLayersVisible] = useState([true, false, false, false]);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);

            // Actualizar la visibilidad de las capas según la posición de desplazamiento
            setLayersVisible([
                true,
                position > 200,
                position > 400,
                position > 600
            ]);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative h-[2000px] overflow-hidden">
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="relative w-[800px] h-[600px]">
                    {/* Capa base */}
                    <img
                        src="/placeholder.svg?height=600&width=800"
                        alt="Base layer"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{
                            transform: `translateY(${scrollPosition * 0.1}px)`,
                        }}
                    />

                    {/* Capas adicionales */}
                    {layersVisible.map((visible, index) =>
                        visible && (
                            <img
                                key={index}
                                src={`/public/world.svg?height=600&width=800`}
                                alt={`Layer ${index}`}
                                className="absolute inset-0 w-full h-full object-cover"
                                style={{
                                    transform: `translateY(${scrollPosition * (0.1 + 0.1 * index)}px)`,
                                    opacity: 1 - index * 0.2,
                                }}
                            />
                        )
                    )}
                </div>
            </div>
            <div className="relative z-10 pt-[100vh] text-center text-white text-4xl font-bold">
                <p className="mb-[400px]">Scroll para revelar las capas</p>
                <p className="mb-[400px]">Primera capa revelada</p>
                <p className="mb-[400px]">Segunda capa revelada</p>
                <p>Todas las capas reveladas</p>
            </div>
        </div>
    );
}
