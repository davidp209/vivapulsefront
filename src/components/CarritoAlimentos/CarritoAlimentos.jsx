import React from "react";

const CarritoAlimentos = ({ carrito, onRemove, onConfirmar }) => (
    <div className="mt-5">
        <h4>Carrito de alimentos seleccionados</h4>
        <ul className="list-group mb-3">
            {carrito.map(item => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {item.name}
                    <button className="btn btn-danger btn-sm" onClick={() => onRemove(item.id)}>
                        Quitar
                    </button>
                </li>
            ))}
        </ul>
        <button className="btn btn-success" onClick={onConfirmar}>
            Confirmar selección
        </button>
    </div>
);

export default CarritoAlimentos;