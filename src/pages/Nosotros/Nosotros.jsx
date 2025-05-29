import React from "react";
import "./Nosotros.css";
import { Link } from "react-router-dom";

// Import imagenes
import equipoImage from "../../assets/nosotros/equipo.svg";
import visionImage from "../../assets/nosotros/vision.svg";
import misionImage from "../../assets/nosotros/mision.svg";


const Nosotros = () => {


   return (
        <section className="nosotros-section d-flex align-items-center justify-content-center min-vh-100">
            <div className="container text-center py-5">
                <h1 className="display-4 fw-bold gradient-text mb-4">Sobre VivaPulse</h1>
                <p className="lead mb-5">
                    Somos un equipo apasionado por la salud y la tecnología. Nuestra misión es ayudarte a <span className="highlight">mejorar tu bienestar</span> de forma sencilla, visual y personalizada.<br />
                    <span className="text-primary">¡Queremos que tomes el control de tu salud!</span>
                </p>
                <div className="row justify-content-center g-4">
                    <div className="col-md-4">
                        <div className="card border-0 shadow team-card h-100">
                            <img src={equipoImage} alt="Equipo" className="card-img-top p-4 team-img" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Equipo multidisciplinar</h5>
                                <p className="card-text">Médicos, nutricionistas y desarrolladores trabajando juntos para crear la mejor experiencia digital de salud.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0 shadow team-card h-100">
                            <img src={visionImage} alt="Visión" className="card-img-top p-4 team-img"  />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Visión innovadora</h5>
                                <p className="card-text">Apostamos por la tecnología, la ciencia de datos y la empatía para ofrecerte recomendaciones útiles y personalizadas.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0 shadow team-card h-100">
                            <img src={misionImage} alt="Misión" className="card-img-top p-4 team-img"  />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Compromiso contigo</h5>
                                <p className="card-text">Tu privacidad y tu salud son lo primero. Trabajamos para que tu experiencia sea segura, motivadora y transformadora.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h4 className="fw-bold mb-3 gradient-text">¿Listo para empezar?</h4>
                    <Link to="/register" className="btn btn-primary btn-lg px-5 shadow">Únete a VivaPulse</Link>
                </div>
            </div>
        </section>
    );
}
export default Nosotros;