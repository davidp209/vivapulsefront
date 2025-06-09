import React from "react";
import { useNavigate } from "react-router-dom";
import "./MisEntrenamientos.css";

const MisEntrenamientos = () => {
    const navigate = useNavigate();

    return (
        <div className="tus-comidas-container">
            <h1 className="tus-comidas-title">
                Tus entrenamientos registrados
            </h1>
            <p className="tus-comidas-description">
                Aquí aparecerán todos los entrenamientos que vayas registrando.<br />
                ¡Lleva un control de tu progreso físico y mantente motivado!
            </p>
            <span className="tus-comidas-emoji">
                🏋️‍♂️
            </span>
            <button
                className="btn btn-primary mt-4"
                onClick={() => navigate("/añadirEntrenamiento")}
            >
                Añadir entrenamiento
            </button>
        </div>
    );
};

export default MisEntrenamientos;
