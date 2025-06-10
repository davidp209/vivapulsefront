import React, { useState } from "react";
import "./FloatingActions.css";
import { FaPlus, FaWhatsapp, FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";

const FloatingActions = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`floating-container ${open ? "open" : ""}`}>
      <button className="main-button" onClick={() => setOpen(!open)}>
        <FaPlus />
      </button>

      <div className="action-buttons">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="action-btn whatsapp"
        >
          <FaWhatsapp />
        </a>

        <Link
          to="/chat"
          className="action-btn ai-chat"
          aria-label="Abrir chat con IA"
        >
          <FaRobot />
        </Link>
      </div>
    </div>
  );
};

export default FloatingActions;
