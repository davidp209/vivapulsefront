// === FRONTEND: React (Chat component) ===
// Instala lodash: npm install lodash
import React, { useState } from "react";
import { debounce } from "lodash";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "¡Hola! 😊 Soy un asistente de IA enfocado en el ámbito de la salud, aquí para ofrecerte información, apoyo y orientación relacionada con tu bienestar.<br><br>¿En qué puedo ayudarte hoy?",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async (message) => {
    try {
      const res = await fetch("http://localhost:8081/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      return data.error
        ? "Lo siento, no se pudo obtener respuesta del modelo."
        : data.reply;
    } catch {
      return "Error de conexión con el servidor.";
    }
  };

  const handleSend = debounce(async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");
    const reply = await sendMessage(input);
    setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
  }, 500);

  return (
    <div className="chat-outer d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="chat-card shadow rounded-4 p-0">
        <div className="chat-header bg-primary text-white rounded-top-4 px-4 py-3 d-flex align-items-center gap-2">
          <span style={{ fontSize: "1.7rem" }}>🤖</span>
          <span className="fw-bold fs-5">Chat Vivapulse</span>
        </div>
        <div className="chat-box p-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`chat-bubble mb-2 ${
                msg.role === "user" ? "user" : "assistant"
              }`}
            >
              <span className="chat-role d-block mb-1">
                <strong>{msg.role === "user" ? "Tú" : "Vivapulse"}:</strong>
              </span>
              <span
                className="chat-content"
                dangerouslySetInnerHTML={{
                  __html: msg.content.replace(/\n/g, "<br>"),
                }}
              />
            </div>
          ))}
        </div>
        <div className="chat-input-row d-flex gap-2 border-top px-3 py-3 bg-white rounded-bottom-4">
          <input
            className="form-control chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Escribe tu mensaje..."
          />
          <button className="btn btn-primary px-4" onClick={handleSend}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
// Este componente de chat permite a los usuarios enviar mensajes y recibir respuestas de un modelo de IA.