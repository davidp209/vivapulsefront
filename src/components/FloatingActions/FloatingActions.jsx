import React, { useState } from "react";
import "./FloatingActions.css";
import { FaPlus, FaWhatsapp, FaRobot } from "react-icons/fa";

const FloatingActions = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`floating-container ${open ? "open" : ""}`}>
      <button className="main-button" onClick={() => setOpen(!open)}>
        <FaPlus />
      </button>

      <div className="action-buttons">
        <a
          href="https://wa.me/1234567890" // Cambia a tu número de WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          className="action-btn whatsapp"
        >
          <FaWhatsapp />
        </a>

        <button
          onClick={() => alert("Abriendo chat con IA...")}
          className="action-btn ai-chat"
        >
          <FaRobot />
        </button>
      </div>
    </div>
  );
};

export default FloatingActions;
