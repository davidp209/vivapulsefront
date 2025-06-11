import React from "react";
import { Link } from "react-router-dom";
import { FaAppleAlt, FaDumbbell, FaBrain } from "react-icons/fa";
import "./BarraLateral.css";

const Barralateral = () => {
  if (!localStorage.getItem("token")) {
    window.location.href = "/login";
  }

  return (
    <nav className="sidebar">
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
    </nav>
  );
};

export default Barralateral;