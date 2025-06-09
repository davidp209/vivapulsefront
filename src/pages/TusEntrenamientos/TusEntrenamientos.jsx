import React from "react";
import { Link } from "react-router-dom";
import "./TusEntrenamientos.css";
import AjaxLoader from "../../components/AjaxLoader/AjaxLoader";
import CardEntrenamiento from "../../components/CardEntrenamientos/CardEntrenamiento";
import useWorkoutsID from "../../hooks/useWorkoutsID";

const MisEntrenamientos = () => {

    const { workoutsID, buscando } = useWorkoutsID();

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
            <Link
                className="btn btn-primary mt-4"
                to="/añadirEntrenamiento"
            >
                Añadir entrenamiento
            </Link>
            <div className="row justify-content-center text-center">
                {buscando ? (
                    <AjaxLoader />
                ) : (
                    <div>
                        {workoutsID?.map(entrenamiento => (
                            <CardEntrenamiento key={entrenamiento.id} entrenamiento={entrenamiento} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MisEntrenamientos;
