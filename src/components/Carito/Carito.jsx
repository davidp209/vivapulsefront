import React, { useState } from 'react';
import CardCesta from '../CardCesta/CardCesta';

const Carito = ({ comidas }) => {
    const [caloriasPorComida, setCaloriasPorComida] = useState({});

    // Esta función se pasa a cada CardCesta
    const handleCaloriasChange = (comidaId, caloriasTotales) => {
        setCaloriasPorComida(prev => ({
            ...prev,
            [comidaId]: caloriasTotales
        }));
    };

    // Suma total de calorías
    const totalCalorias = Object.values(caloriasPorComida).reduce((a, b) => a + b, 0);

    return (
        <div>
            <h2>Carrito</h2>
            {comidas.map(comida => (
                <CardCesta
                    key={comida.id}
                    comida={comida}
                    onCaloriasChange={handleCaloriasChange}
                    onRemove={() => {/* lógica para eliminar */}}
                />
            ))}
            <div>
                <strong>Total calorías: {totalCalorias.toFixed(0)} kcal</strong>
            </div>
        </div>
    );
};

export default Carito;