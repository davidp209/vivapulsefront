import React from 'react';
import './CardCarritoEntrenamiento.css';

const CardCarritoEntrenamiento = ({ entrenamiento, tiempo, onTimeChange, onRemove }) => {
    
    const caloriasTotales = entrenamiento.caloriesBurned || entrenamiento.totalCalories || 0;
    const minutos = tiempo || entrenamiento.time || 1; 
    const caloriasPorMinuto = caloriasTotales / 60; 
    const caloriasProporcionales = caloriasPorMinuto * minutos;

    const handleIncrement = () => onTimeChange(entrenamiento.id, minutos + 1);
    const handleDecrement = () => onTimeChange(entrenamiento.id, minutos > 1 ? minutos - 1 : 1);

    return (
        <div className="cardCesta">
            <div className="cardCesta-header">
                <span className="cardCesta-title">{entrenamiento.name}</span>
            </div>
            <div className="cardCesta-body">
                <span className="cardCesta-calorias">
                    Calorías totales: {caloriasProporcionales.toFixed(2)} kcal
                </span>
                <span className="cardCesta-calorias">
                    Calorías por minuto: {caloriasPorMinuto.toFixed(2)} kcal/min
                </span>
                <div className="cardCesta-gramos-control">
                    <button onClick={handleDecrement} className="gramos-btn">-</button>
                    <span className="gramos-value">{minutos} min</span>
                    <button onClick={handleIncrement} className="gramos-btn">+</button>
                </div>
                <div className="cardCesta-info">
                  
                </div>
            </div>
            <button className="eliminar-btn" onClick={onRemove}>Eliminar</button>
        </div>
    );
};



export default CardCarritoEntrenamiento;