import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAliments from "../../hooks/useAliments";
import AjaxLoader from "../../components/AjaxLoader/AjaxLoader";
import CardAlimentos from "../../components/CardAlimentos/CardAlimentos";
import CarritoAlimentos from "../../components/CarritoAlimentos/CarritoAlimentos";
import { useCarrito } from "../../context/CarritoContext";
import axios from "axios";

const AlimentosPriv = () => {
    const { alimentosID, buscando } = useAliments();
    const { carrito, addToCart, removeFromCart } = useCarrito();
    const [searchTerm, setSearchTerm] = useState(""); // <-- Cambia [] por ""

    // Filtrar 
    const filteredAlimentos = alimentosID?.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Aquí luego puedes implementar el envío a la base de datos
    const onConfirmar = async (carrito) => {
        // Obtén el usuario actual (ajusta según tu app)
        const user = JSON.parse(localStorage.getItem("user")); // Cambia si usas otro método
        const userId = user?.id || 3; // Usa el id real, o 3 como fallback

        // Puedes pedir el nombre de la comida al usuario, aquí lo dejo fijo como ejemplo
        const name = "Cena";

        const data = {
            idAliment: carrito.map(item => item.id),
            calories: carrito.reduce((acc, item) => acc + item.calories, 0),
            name,
            user: { id: userId }
        };

        try {
            await axios.post("https://vivapulse-backend.onrender.com/api/meals", data);
            alert("Guardado correctamente");
        } catch (error) {
            alert("Error al guardar");
        }
    };

    return (
        <div>
            {/* Icono de carrito arriba a la derecha */}
            <div className="d-flex justify-content-end align-items-center mt-3 me-4">
                <Link to="/carrito" className="position-relative">
                    <i className="bi bi-cart" style={{ fontSize: "2rem" }}></i>
                    {carrito.length > 0 && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {carrito.length}
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
                        <div key={index} className="col-12 col-md-4 mb-3">
                            <CardAlimentos
                                alimento={item}
                                onAdd={addToCart}
                                isInCart={carrito.some(a => a.id === item.id)}
                            />
                        </div>
                    ))
                )}
            </div>

            <CarritoAlimentos carrito={carrito} onRemove={removeFromCart} onConfirmar={onConfirmar} />
        </div>
    );
};

export default AlimentosPriv;