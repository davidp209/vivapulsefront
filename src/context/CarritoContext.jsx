import React, { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const addToCart = (alimento) => {
        setCarrito((prev) =>
            prev.some(item => item.id === alimento.id) ? prev : [...prev, alimento]
        );
    };

    const removeFromCart = (id) => {
        setCarrito((prev) => prev.filter(item => item.id !== id));
    };

    const clearCart = () => setCarrito([]);

    return (
        <CarritoContext.Provider value={{ carrito, addToCart, removeFromCart, clearCart }}>
            {children}
        </CarritoContext.Provider>
    );
};