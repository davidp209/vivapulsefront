import React, { useEffect } from 'react';
import './CardCesta.css';

const CardCesta = ({ comida, gramos, onGramosChange, onRemove }) => {
    const handleIncrement = () => onGramosChange(comida.id, gramos + 50);
    const handleDecrement = () => onGramosChange(comida.id, gramos > 50 ? gramos - 50 : 50);

    const caloriasTotales = ((comida.calories || 0) * gramos) / 100;


    return (
        <div className="cardCesta">
            <div className="cardCesta-header">
                <span className="cardCesta-title">{comida.name}</span>
            </div>
            <div className="cardCesta-body">
                <span className="cardCesta-calorias">
                    Calorías: {caloriasTotales.toFixed(0)} kcal
                </span>
                <div className="cardCesta-gramos-control">
                    <button onClick={handleDecrement} className="gramos-btn">-</button>
                    <span className="gramos-value">{gramos}g</span>
                    <button onClick={handleIncrement} className="gramos-btn">+</button>
                </div>
            </div>
            <button className="eliminar-btn" onClick={onRemove}>Eliminar</button>
        </div>
    );
};

export default CardCesta;