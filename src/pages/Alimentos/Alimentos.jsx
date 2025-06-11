import React, { useState } from "react";
import useAliments from "../../hooks/useAliments";
import AjaxLoader from "../../components/AjaxLoader/AjaxLoader";
import CardAlimentos from "../../components/CardAlimentos/CardAlimentos";

const Alimentos = () => {
    const { alimentosID, buscando } = useAliments();
    const [searchTerm, setSearchTerm] = useState("");
    const [visibleCount, setVisibleCount] = useState(8); 

    // Filtrar alimentos según el término de búsqueda
    const filteredAlimentos = alimentosID?.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
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
                    filteredAlimentos?.slice(0, visibleCount).map((item, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                            <CardAlimentos alimento={item} />
                        </div>
                    ))
                )}
            </div>
            {filteredAlimentos && visibleCount < filteredAlimentos.length && (
                <div className="text-center mb-4">
                    <button className="btn btn-primary" onClick={() => setVisibleCount(visibleCount + 8)}>
                        Cargar más
                    </button>
                </div>
            )}
        </div>
    );
};

export default Alimentos;