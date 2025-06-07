import React from "react";
import CarritoAlimentos from "../../components/CarritoAlimentos/CarritoAlimentos";
import { useCarrito } from "../../context/CarritoContext";

const Carrito = () => {
    const { carrito, removeFromCart, clearCart } = useCarrito();

    const handleConfirmar = () => {
        // Aquí puedes enviar el carrito a la base de datos
        console.log("Enviar a la base de datos:", carrito);
        clearCart();
    };

    return (
        <div className="container mt-5">
            <h2>Tu carrito</h2>
            <CarritoAlimentos
                carrito={carrito}
                onRemove={removeFromCart}
                onConfirmar={handleConfirmar}
            />
        </div>
    );
};

export default Carrito;
