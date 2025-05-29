import React from "react";
import "./Home.css";
import imagenDocotores from "../../assets/ImagenesHome/Doctors-cuate.svg";
import resgistraAlimentacion from "../../assets/ImagenesHome/registra-tu-alimentacion.svg";
import monitoreaSalud from "../../assets/ImagenesHome/monitoreaSalud.svg";
import progreso from "../../assets/ImagenesHome/progreso.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-root">
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center justify-content-center text-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={imagenDocotores}
                alt="Salud y bienestar"
                className="img-fluid hero-img"
                style={{ maxHeight: "340px" }}
              />
            </div>
            <div className="col-md-6">
              <h1 className="display-3 fw-bold mb-3 gradient-text">
                Controla tu salud <br /> de forma inteligente
              </h1>
              <p className="lead mb-4">
                Registra tus alimentos, síntomas y hábitos. Obtén análisis visuales y recomendaciones personalizadas para tu bienestar.
              </p>
              <Link to="/register">
                <button className="btn btn-primary btn-lg shadow-lg px-5 py-3">
                  Comienza ahora
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold gradient-text">¿Qué puedes hacer con VivaPulse?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card feature-card h-100 text-center border-0 shadow-sm">
                <div className="card-body">
                  <img src={resgistraAlimentacion} alt="Alimentos" className="mb-3" style={{ height: 70 }} />
                  <h5 className="card-title fw-bold mb-2">Registra tu alimentación</h5>
                  <p className="card-text">
                    Añade tus comidas y obtén un desglose nutricional visual y detallado.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card feature-card h-100 text-center border-0 shadow-sm">
                <div className="card-body">
                  <img src={monitoreaSalud} alt="Salud" className="mb-3" style={{ height: 70 }} />
                  <h5 className="card-title fw-bold mb-2">Monitorea tu salud</h5>
                  <p className="card-text">
                    Lleva un seguimiento de síntomas, presión, glucosa y otros indicadores clave.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card feature-card h-100 text-center border-0 shadow-sm">
                <div className="card-body">
                  <img src={progreso} alt="Insights" className="mb-3" style={{ height: 70 }} />
                  <h5 className="card-title fw-bold mb-2">Visualiza tu progreso</h5>
                  <p className="card-text">
                    Gráficas y resúmenes para entender tu evolución y recibir consejos personalizados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-3 gradient-text">¡Empieza a cuidar tu salud hoy!</h2>
          <p className="lead mb-4">
            Únete a VivaPulse y descubre una nueva forma de gestionar tu bienestar.
          </p>
          <Link to="/register">
            <button className="btn btn-success btn-lg shadow px-5 py-3">
              Registrarse gratis
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;