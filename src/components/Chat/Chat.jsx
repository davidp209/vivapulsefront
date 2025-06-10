// === FRONTEND: React (Chat component) ===
// Instala lodash: npm install lodash
import React, { useState } from "react";
import { debounce } from "lodash";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async (message) => {
    try {
      const res = await fetch("https://vivapulse-backend.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      if (data.error) {
        return "Lo siento, no se pudo obtener respuesta del modelo.";
      }
      return data.reply;
    } catch (e) {
      return "Error de conexión con el servidor.";
    }
  };

  const handleSend = debounce(async () => {
    if (!input.trim()) return;
    const newUserMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");

    const reply = await sendMessage(input);
    const newBotMessage = { role: "assistant", content: reply };
    setMessages((prev) => [...prev, newBotMessage]);
  }, 1000);

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i}>
            <b>{msg.role}:</b> {msg.content}
          </div>
        ))}
      </div>
      <input
        className="chat-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button onClick={handleSend}>Enviar</button>
    </div>
  );
};

export default Chat;
// Este componente de chat permite a los usuarios enviar mensajes y recibir respuestas de un modelo de IA.