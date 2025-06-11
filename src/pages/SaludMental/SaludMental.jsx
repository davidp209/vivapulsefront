import React from "react";
import { Link } from "react-router-dom";
import "./SaludMental.css";

const SaludMental = () => (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light salud-mental-bg">
        <div className="bg-white p-5 rounded shadow text-center salud-mental-card" style={{ maxWidth: 400 }}>
            <h1 className="display-5 mb-3 text-primary fw-bold">Salud Mental</h1>
            <p className="lead mb-4 text-secondary">¡Próximamente estará disponible!</p>
            <p className="mb-4 text-secondary">
                Estamos trabajando para ofrecerte herramientas y recursos que te ayudarán a cuidar tu bienestar mental.
            </p>
            <Link to="/dashboard" className="btn btn-outline-primary mt-4 salud-mental-btn" role="button">
                Volver al Dashboard
            </Link>
        </div>
    </div>
);

export default SaludMental;