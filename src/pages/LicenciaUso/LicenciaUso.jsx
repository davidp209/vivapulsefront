import React from "react";
import "./LicenciaUso.css";

const LicenciaUso = () => {
  return (
    <div className="licencia-container">
      <h1>Licencia de Uso</h1>
      <p className="fecha">Última actualización: 2 de junio de 2025</p>

      <section>
        <h2>1. Propósito del sitio</h2>
        <p>
          VivaPulse ha sido desarrollado como parte de un Trabajo de Fin de Grado (TFG).
          Su uso está limitado a fines educativos, académicos y de investigación.
        </p>
      </section>

      <section>
        <h2>2. Derechos de autor</h2>
        <p>
          Todo el contenido presente en VivaPulse (código, diseño, textos) es propiedad del
          autor del TFG, salvo que se indique lo contrario. Está protegido por leyes de
          propiedad intelectual.
        </p>
      </section>

      <section>
        <h2>3. Prohibiciones</h2>
        <ul>
          <li>No se permite la reproducción del contenido con fines comerciales.</li>
          <li>No se permite la redistribución sin autorización.</li>
          <li>Se prohíbe la modificación del código para fines distintos al TFG.</li>
        </ul>
      </section>

      <section>
        <h2>4. Permisos</h2>
        <p>
          El autor permite el uso libre de la plataforma por parte de usuarios con fines
          personales, educativos y de evaluación, siempre que se respete esta licencia.
        </p>
      </section>

      <section>
        <h2>5. Contacto</h2>
        <p>
          Para consultas sobre permisos especiales, contactar a:
          <br />
          📧 <strong>info@vivaPulse.com</strong>
        </p>
      </section>
    </div>
  );
};

export default LicenciaUso;
