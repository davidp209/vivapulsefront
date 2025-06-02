import React from "react";
import "./PoliticaCookies.css";

const PoliticaCookies = () => {
  return (
    <div className="cookies-container">
      <h1>Política de Cookies</h1>
      <p className="fecha">Última actualización: 2 de junio de 2025</p>

      <section>
        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web colocan en tu
          dispositivo para almacenar información durante tu navegación.
        </p>
      </section>

      <section>
        <h2>2. Tipos de cookies que utilizamos</h2>
        <ul>
          <li><strong>Cookies de sesión:</strong> necesarias para el funcionamiento básico del sitio.</li>
          <li><strong>No utilizamos cookies de terceros ni de seguimiento.</strong></li>
        </ul>
      </section>

      <section>
        <h2>3. ¿Cómo puedes gestionarlas?</h2>
        <p>
          Puedes desactivar las cookies desde la configuración de tu navegador. Ten en cuenta
          que algunas funciones pueden dejar de funcionar correctamente.
        </p>
      </section>

      <section>
        <h2>4. Cambios en esta política</h2>
        <p>
          Nos reservamos el derecho a modificar esta política para ajustarla a cambios
          legislativos o técnicos. Se notificará cualquier actualización en esta página.
        </p>
      </section>

      <section>
        <h2>5. Contacto</h2>
        <p>
          Si tienes preguntas sobre nuestra política de cookies, contáctanos en:
          <br />
          📧 <strong>info@vivaPulse.com</strong>
        </p>
      </section>
    </div>
  );
};

export default PoliticaCookies;
