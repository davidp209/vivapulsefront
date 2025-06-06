import React, { useState } from "react";
import axios from "axios"; // Importa axios

const AñadirComida = () => {
    if (!localStorage.getItem("token")) {
        window.location.href = "/login"; // Redirección si no hay token
    }

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login"; // Redirección tras cerrar sesión
    };

    const [nombre, setNombre] = useState("");
    const [calorias, setCalorias] = useState("");
    const [alimentos, setAlimentos] = useState([]);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (nombre.trim() && calorias.trim()) {
            try {
                const response = await axios.post("https://vivapulse-backend.onrender.com/api/meals", {
                    name: nombre,
                    calories: calorias,
                });
                setAlimentos([...alimentos, response.data]);
                setNombre("");
                setCalorias("");
                setError(null);
                setSuccess("¡Comida guardada correctamente!");
            } catch (err) {
                setError("Error al guardar el alimento");
                setSuccess(null);
            }
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: "0 auto" }}>
            <h2>Añadir Comidas</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre de la comida:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Calorias:</label>
                    <input
                        type="number"
                        value={calorias}
                        onChange={(e) => setCalorias(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Añadir</button>
            </form>
            {success && <p style={{ color: "green" }}>{success}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
           
        </div>
    );
};

export default AñadirComida;