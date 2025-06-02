import React from "react";
import "./TerminosCondiciones.css";

const TerminosCondiciones = () => {
  return (
    <div className="terminos-container">
      <h1>Términos y Condiciones</h1>
      <p className="fecha">Última actualización: 2 de junio de 2025</p>

      <section>
        <h2>1. Aceptación de los términos</h2>
        <p>
          Al acceder y utilizar VivaPulse, aceptas estos Términos y Condiciones. Si no estás de
          acuerdo, por favor no uses la plataforma.
        </p>
      </section>

      <section>
        <h2>2. Uso de la plataforma</h2>
        <p>
          VivaPulse está destinada exclusivamente a fines educativos, como parte de un Trabajo
          de Fin de Grado (TFG). El uso debe ser respetuoso, ético y dentro del marco académico.
        </p>
      </section>

      <section>
        <h2>3. Registro y cuenta</h2>
        <p>
          Al registrarte, te comprometes a proporcionar información veraz y a mantener la
          confidencialidad de tu cuenta. No está permitido compartir credenciales ni suplantar
          a otros usuarios.
        </p>
      </section>

      <section>
        <h2>4. Propiedad intelectual</h2>
        <p>
          El contenido de VivaPulse (logos, textos, estructura, etc.) pertenece a su autor
          académico y está protegido por derechos de autor. Está prohibido su uso comercial
          sin permiso previo.
        </p>
      </section>

      <section>
        <h2>5. Limitación de responsabilidad</h2>
        <p>
          Al tratarse de un proyecto académico, VivaPulse no garantiza la continuidad del
          servicio ni la completa precisión de los datos. No nos hacemos responsables por
          interrupciones, errores o pérdida de datos.
        </p>
      </section>

      <section>
        <h2>6. Modificaciones</h2>
        <p>
          Podemos actualizar estos términos en cualquier momento. Las modificaciones se
          comunicarán en la plataforma y se considerarán aceptadas si continúas usándola.
        </p>
      </section>

      <section>
        <h2>7. Contacto</h2>
        <p>
          Para cualquier duda o consulta, puedes escribirnos a:
          <br />
          📧 <strong>info@vivaPulse.com</strong>
        </p>
      </section>
    </div>
  );
};

export default TerminosCondiciones;
