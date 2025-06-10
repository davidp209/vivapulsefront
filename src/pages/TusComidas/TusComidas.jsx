import React from "react";
import { Link } from "react-router-dom";
import "./TusComidas.css";
import AjaxLoader from "../../components/AjaxLoader/AjaxLoader";
import useMealsID from "../../hooks/useMealsID";
import CardComida from "../../components/CardComida/CardComida";

const TusComidas = () => {


    const { mealsID, buscando } = useMealsID();

    return (
        <div className="tus-comidas-container">
            <h1 className="tus-comidas-title">
                Tus comidas registradas
            </h1>
            <p className="tus-comidas-description">
                Aquí aparecerán todas las comidas que vayas registrando.<br />
                ¡Empieza a llevar un control saludable de tu alimentación!
            </p>
            <span className="tus-comidas-emoji">
                🍽️
            </span>
            <Link
                className="btn btn-success mt-4"
                to="/añadirComidas"
            >
                Añadir comidas
            </Link>

            <div className="row justify-content-center text-center">
                {buscando ? (
                    <AjaxLoader />
                ) : (
                    <div>
                        {[...mealsID]
                            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Ordenar por fecha de creación (más reciente primero)
                            .map(comida => (
                                <CardComida key={comida.id} comida={comida} />
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TusComidas;
