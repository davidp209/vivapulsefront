import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TusEntrenamientos.css";
import AjaxLoader from "../../components/AjaxLoader/AjaxLoader";
import CardEntrenamiento from "../../components/CardEntrenamientos/CardEntrenamiento";
import useWorkoutsID from "../../hooks/useWorkoutsID";
import Barralateral from "../../components/BarraLateral/Barralateral";

const TusEntrenamientos = () => {
    const { workoutsID, buscando } = useWorkoutsID();

    // Filtros
    const [filtroDia, setFiltroDia] = useState("");
    const [filtroMes, setFiltroMes] = useState("");
    const [filtroAnio, setFiltroAnio] = useState("");

    // Años únicos
    const anios = [...new Set(workoutsID?.map(e => new Date(e.createdAt).getFullYear()))];
    const meses = [...Array(12).keys()].map(m => m + 1);

    // Filtrado
    const entrenamientosFiltrados = Array.isArray(workoutsID)
        ? workoutsID.filter(e => {
            const fecha = new Date(e.createdAt);
            return (
                (!filtroAnio || fecha.getFullYear() === Number(filtroAnio)) &&
                (!filtroMes || fecha.getMonth() + 1 === Number(filtroMes)) &&
                (!filtroDia || fecha.getDate() === Number(filtroDia))
            );
        })
        : [];

    return (
        <div className="dashboard-wrapper">
            <Barralateral />
            <div className="container-fluid">
                <div className="row justify-content-center align-items-start mt-5">
                    {/* Bloque azul info */}
                    <div className="col-12 col-lg-4 d-flex justify-content-center mb-4 mb-lg-0">
                        <div className="tus-entrenamientos-container w-100">
                            <h1 className="tus-entrenamientos-title">
                                Tus entrenamientos registrados
                            </h1>
                            <p className="tus-entrenamientos-description">
                                Aquí aparecerán todos los entrenamientos que vayas registrando.<br />
                                ¡Lleva un control de tu progreso físico y mantente motivado!
                            </p>
                            <span className="tus-entrenamientos-emoji">
                                🏋️‍♂️
                            </span>
                            <Link
                                className="btn btn-primary btn-lg px-5 shadow mt-3"
                                to="/añadirEntrenamiento"
                            >
                                Añadir entrenamiento
                            </Link>
                        </div>
                    </div>
                    {/* Filtros y cards */}
                    <div className="col-12 col-lg-8">
                        {/* Filtros */}
                        <div className="row mb-3">
                            <div className="col">
                                <select className="form-select" value={filtroDia} onChange={e => setFiltroDia(e.target.value)}>
                                    <option value="">Día</option>
                                    {[...Array(31).keys()].map(d => (
                                        <option key={d+1} value={d+1}>{d+1}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col">
                                <select className="form-select" value={filtroMes} onChange={e => setFiltroMes(e.target.value)}>
                                    <option value="">Mes</option>
                                    {meses.map(m => (
                                        <option key={m} value={m}>{m}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col">
                                <select className="form-select" value={filtroAnio} onChange={e => setFiltroAnio(e.target.value)}>
                                    <option value="">Año</option>
                                    {anios.map(a => (
                                        <option key={a} value={a}>{a}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                       
                        <div className="row justify-content-center px-2">
                            {buscando ? (
                                <AjaxLoader />
                            ) : (
                                entrenamientosFiltrados.length > 0 ? (
                                    [...entrenamientosFiltrados]
                                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                                        .map(entrenamiento => (
                                            <div key={entrenamiento.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex">
                                                <CardEntrenamiento entrenamiento={entrenamiento} />
                                            </div>
                                            
                                        ))
                                ) : (
                                    <p>No hay entrenamientos registrados.</p>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TusEntrenamientos;
