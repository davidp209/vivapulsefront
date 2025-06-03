import React, { useState } from "react";
import useAliments from "../../hooks/useAliments";
import AjaxLoader from "../../components/AjaxLoader/AjaxLoader";
import CardAlimentos from "../../components/CardAlimentos/CardAlimentos";

const Alimentos = () => {
    const { alimentosID, buscando } = useAliments();
    const [searchTerm, setSearchTerm] = useState("");

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
                    filteredAlimentos?.map((item, index) => (
                        <CardAlimentos key={index} alimento={item} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Alimentos;