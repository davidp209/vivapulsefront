import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAppleAlt, FaDumbbell, FaBrain, FaSignOutAlt } from "react-icons/fa";
import "./BarraLateral.css";

const Barralateral = () => {
  const [open, setOpen] = useState(false);

  if (!localStorage.getItem("token")) {
    window.location.href = "/login"; // Redirección si no hay token
  }

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; // Redirección tras cerrar sesión
  };

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        ☰
      </button>
      <nav className={`sidebar${open ? " open" : ""}`}>
        <h3 className="sidebar-title">VivaPulse</h3>
        <ul className="sidebar-menu">
          <li>
            <Link to="/tusComidas" className="sidebar-link">
              <FaAppleAlt className="sidebar-icon" />
              <span>Comida</span>
            </Link>
          </li>
          <li>
            <Link to="/tusEntrenamientos" className="sidebar-link">
              <FaDumbbell className="sidebar-icon" />
              <span>Entrenamiento</span>
            </Link>
          </li>
          <li>
            <Link to="/saludMental" className="sidebar-link">
              <FaBrain className="sidebar-icon" />
              <span>Salud Mental</span>
            </Link>
          </li>
        </ul>
        <div className="sidebar-footer">
          <button className="logout-btn" onClick={logout}>
            <FaSignOutAlt className="sidebar-icon" />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </nav>
      {/* Opcional: cerrar menú al hacer click fuera */}
      {open && (
        <div
          className="sidebar-backdrop"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Barralateral;