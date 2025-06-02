import React from "react";
import { Link } from "react-router-dom";
import "./Descubre.css";

const Descubre = () => {
    return (
        <div className="descubre-container d-flex justify-content-center align-items-center">
            <Link to="/aliments" className="descubre-card descubre-card-left animate-card enlaces">
                <h2>Alimentos</h2>
                <p>Descubre información y curiosidades sobre alimentos saludables, calorías y mucho más.</p>
                <span role="img" aria-label="alimentos" className="descubre-icon">🍎</span>
            </Link>
            <Link to="/training" className="descubre-card descubre-card-right animate-card enlaces">
                <h2>Ejercicios</h2>
                <p>Explora rutinas, consejos y ejercicios para mejorar tu bienestar físico.</p>
                <span role="img" aria-label="ejercicios" className="descubre-icon">🏋️‍♂️</span>
            </Link>
            <Link to="#" className="descubre-card descubre-card-right animate-card enlaces proximamente">
                <h2>Salud Mental</h2>
                <p>Próximamente: técnicas de relajación, meditación y consejos para tu bienestar emocional.</p>
                <span role="img" aria-label="salud mental" className="descubre-icon">🧘‍♀️</span>
            </Link>
        </div>
    );
}
export default Descubre;