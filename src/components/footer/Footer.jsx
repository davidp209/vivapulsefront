import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../../assets/logo/LOGO.svg'; // Asegúrate de que la ruta sea correcta

import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-light text-dark pt-5 pb-4  border-top">
      <div className="container text-md-left">
        <div className="row">
          {/* Logo + descripción */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
           <Link to={"/"}> <img src={logo} alt="Logo VivaPulse" className='logoFooter' /> </Link>
            <p>
                Impulsando tu bienestar y salud cada día con VivaPulse.
            </p>
          </div>

        

          {/* Compañía */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Empresa</h6>
            <ul className="list-unstyled">
              <li><Link to={"/"}>Inicio</Link></li>
              <li><Link to={"Descubre"}>Descubre</Link></li> 
              <li><Link to={"Nosotros"}>Nosotros</Link></li>
              <li><Link to={"Contacto"}>Contacto</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Legal</h6>
            <ul className="list-unstyled">
              <li><Link to={"PoliticaPrivacidad"}>Política de Privacidad</Link></li>
              <li><Link to={"TerminosCondiciones"}>Terminos & Condiciones</Link></li>
              <li><Link to={"LicenciaUso"}>Licencia</Link></li>
              <li><Link to={"PoliticaCookies"}>Cookies</Link></li>
            </ul>
          </div>
        </div>

        <hr className="mb-4 mt-4" />

        {/* Parte inferior */}
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-7 text-md-start text-center">
            <p>© {new Date().getFullYear()} VivaPulse. All rights reserved.</p>
          </div>
          <div className="col-md-6 col-lg-5 text-md-end text-center social-icons">
            <a href="#"><i className="bi bi-facebook me-3"></i></a>
            <a href="#"><i className="bi bi-twitter me-3"></i></a>
            <a href="#"><i className="bi bi-instagram me-3"></i></a>
            <a href="#"><i className="bi bi-linkedin me-3"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;