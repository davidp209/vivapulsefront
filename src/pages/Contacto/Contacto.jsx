import React from "react";
import "./Contacto.css";




const Contacto = () => {

 return (
    <section className="contacto-section d-flex align-items-center justify-content-center min-vh-100">
      <div className="container text-center py-5">
        <h1 className="display-4 fw-bold gradient-text mb-4">¿Hablamos?</h1>
        <p className="lead mb-5">
          ¿Tienes dudas, sugerencias o quieres colaborar con VivaPulse? <br />
          ¡Rellena el formulario y te responderemos lo antes posible!
        </p>
        <div className="row justify-content-center">
          <div className="col-md-7">
            <form className="contact-form p-4 rounded shadow bg-white">
              <div className="mb-3 text-start">
                <label htmlFor="nombre" className="form-label fw-semibold">Nombre</label>
                <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" required />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="email" className="form-label fw-semibold">Correo electrónico</label>
                <input type="email" className="form-control" id="email" placeholder="tu@email.com" required />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="mensaje" className="form-label fw-semibold">Mensaje</label>
                <textarea className="form-control" id="mensaje" rows="4" placeholder="¿En qué podemos ayudarte?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg w-100 mt-3 shadow">Enviar mensaje</button>
            </form>
          </div>
        </div>
        <div className="mt-5 text-muted small">
          También puedes escribirnos a <a href="mailto:info@vivapulse.com" className="text-primary">info@vivapulse.com</a>
        </div>
      </div>
    </section>
  );
}
export default Contacto;