import React, { useState } from "react";
import useAliments from "../../hooks/useAliments";
import AjaxLoader from "../../components/AjaxLoader/AjaxLoader";
import CardAlimentos from "../../components/CardAlimentos/CardAlimentos";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const AñadirComidas = () => {
    const { alimentosID, buscando } = useAliments();
    const [searchTerm, setSearchTerm] = useState("");
    const [cesta, setCesta] = useState([]);


    // Función para añadir un alimento a la cesta
    const handleAñadirCesta = (alimento) => {
        // Aquí puedes guardar en localStorage, context, o redirigir a /pruebas
        const nuevaCesta = [...cesta, alimento];
        setCesta(nuevaCesta);
        localStorage.setItem("cesta", JSON.stringify(nuevaCesta));
      
    };

    // Filtrar alimentos según el término de búsqueda
    const filteredAlimentos = alimentosID?.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="d-flex justify-content-end mt-3 me-4">
                <Link
                    to="/carrito"
                    className="btn btn-outline-primary position-relative"
                    style={{ fontSize: "1.5rem" }}
                    aria-label="Ir al carrito"
                >
                    <FaShoppingCart />
                    {cesta.length > 0 && (
                        <span
                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                            style={{ fontSize: "0.8rem" }}
                        >
                            {cesta.length}
                        </span>
                    )}
                </Link>
            </div>

            {/* Barra de búsqueda */}
            <div className="row justify-content-center text-center mb-3 mt-5">
                <input
                    type="text"
                    placeholder="Buscar alimentos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-control w-50"
                />
            </div>

            <div className="row justify-content-center text-center">
                {buscando ? (
                    <AjaxLoader />
                ) : (
                    filteredAlimentos?.map((item, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                            <CardAlimentos
                                alimento={item}
                                mostrarBotonCesta={true}
                                onAñadirCesta={() => handleAñadirCesta(item)}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AñadirComidas;