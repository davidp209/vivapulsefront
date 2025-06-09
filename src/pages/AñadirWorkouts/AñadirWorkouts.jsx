import React, { useState } from "react";
import useTraining from "../../hooks/useTraining";
import AjaxLoader from "../../components/AjaxLoader/AjaxLoader";
import { FaDumbbell } from "react-icons/fa";
import { Link } from "react-router-dom";
import CardTraining from "../../components/CardTraining/CardTraining";

const AñadirWorkouts = () => {
    const { trainingID, buscando } = useTraining();
    const [searchTerm, setSearchTerm] = useState("");
    const [seleccionados, setSeleccionados] = useState([]);

    // Función para añadir un entrenamiento a la lista de seleccionados
    const handleAñadirSeleccionado = (entrenamiento) => {
        const nuevosSeleccionados = [...seleccionados, entrenamiento];
        setSeleccionados(nuevosSeleccionados);
        localStorage.setItem("workouts", JSON.stringify(nuevosSeleccionados));
        // Opcional: redirigir a otra ruta
        // window.location.href = "/tus-entrenamientos";
    };

    // Filtrar entrenamientos según el término de búsqueda
    const filteredWorkouts = trainingID?.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="d-flex justify-content-end mt-3 me-4">
                <Link
                    to="/carritoEntrenamientos"
                    className="btn btn-outline-primary position-relative"
                    style={{ fontSize: "1.5rem" }}
                    aria-label="Ir a tus entrenamientos"
                >
                    <FaDumbbell />
                </Link>
            </div>

            {/* Barra de búsqueda */}
            <div className="row justify-content-center text-center mb-3 mt-5">
                <input
                    type="text"
                    placeholder="Buscar entrenamientos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-control w-50"
                />
            </div>

            <div className="row justify-content-center text-center">
                {buscando ? (
                    <AjaxLoader />
                ) : (
                    filteredWorkouts?.map((item, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                            <CardTraining
                                training={item}
                                mostrarBotonSeleccionar={true}
                                onAñadirSeleccionado={() => handleAñadirSeleccionado(item)}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AñadirWorkouts;