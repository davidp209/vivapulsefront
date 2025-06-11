import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TusComidas.css";
import AjaxLoader from "../../components/AjaxLoader/AjaxLoader";
import useMealsID from "../../hooks/useMealsID";
import CardComida from "../../components/CardComida/CardComida";
import Barralateral from "../../components/BarraLateral/Barralateral";

const TusComidas = () => {
    const { mealsID, buscando } = useMealsID();

    const [filtroDia, setFiltroDia] = useState("");
    const [filtroMes, setFiltroMes] = useState("");
    const [filtroAnio, setFiltroAnio] = useState("");

    // Obtén los años únicos de tus comidas
    const anios = [...new Set(mealsID?.map(m => new Date(m.createdAt).getFullYear()))];
    const meses = [...Array(12).keys()].map(m => m + 1);

    // Filtra las comidas según los selects
    const comidasFiltradas = Array.isArray(mealsID)
        ? mealsID.filter(m => {
            const fecha = new Date(m.createdAt);
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
                    <div className="col-12 col-lg-4 d-flex justify-content-center mb-4 mb-lg-0">
                        <div className="tus-comidas-container w-100">
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
                                className="btn btn-primary btn-lg px-5 shadow mt-3"
                                to="/añadirComidas"
                            >
                                Añadir comidas
                            </Link>
                        </div>
                    </div>
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
                                comidasFiltradas.length > 0 ? (
                                    [...comidasFiltradas]
                                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                                        .map(comida => (
                                            <div key={comida.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex">
                                                <CardComida comida={comida} />
                                            </div>
                                        ))
                                ) : (
                                    <p>No hay comidas registradas.</p>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TusComidas;
