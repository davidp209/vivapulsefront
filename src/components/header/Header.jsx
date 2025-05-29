import imagenLogo from "../../assets/logo/LOGO.svg";
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
    const token = localStorage.getItem('token');
    return (
        <header className="header ">
            <div className="logo">
                <Link to={"/"}> <img src={imagenLogo} alt="Logo" /> </Link>
            </div>
            <nav className="menu">
                <Link to={"/"}>Inicio</Link>
                <Link to={"/Descubre"}>Descubre</Link>
                <Link to={"/Nosotros"}>Nosotros</Link>
                <Link to={"Contacto"}>Contacto</Link>
            </nav>
            <div className="auth-buttons">
                <Link to={"login"} className="login-btn">{token ? 'Mi cuenta' : 'Iniciar Sesión'}</Link>
                {!token && (
                    <Link to={"register"} className="register-btn">Registrarse</Link>
                )}
                <button className="user-icon-btn">
                    <i className="fas fa-user"></i>
                </button>
            </div>
        </header>
    );
};

export default Header;