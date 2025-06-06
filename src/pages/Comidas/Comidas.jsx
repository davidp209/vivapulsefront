import React from "react";
import { Link } from "react-router-dom";
import "./Comidas.css";

const Comidas = () => {
    return (
        <div className="comidas-container d-flex justify-content-center align-items-center">
            <Link to="/añadirComidas" className="comidas-card comidas-card-list animate-card comidas-enlace">
                <h2>Comidas</h2>
                <p>Explora y consulta la lista completa de comidas saludables disponibles en nuestra plataforma.</p>
                <span role="img" aria-label="alimentos" className="comidas-icon">🥗</span>
            </Link>
            <Link to="/training" className="comidas-card comidas-card-add animate-card comidas-enlace">
                <h2>Añade Recetas</h2>
                <p>Añade tus recetas o platos favoritos y contribuye a nuestra comunidad de alimentación sana.</p>
                <span role="img" aria-label="recetas" className="comidas-icon">🍽️</span>
            </Link>
           
        </div>
    );
}
export default Comidas;