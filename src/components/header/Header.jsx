import  { useState, useRef, useEffect } from "react";
import imagenLogo from "../../assets/logo/LOGO.svg";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const token = localStorage.getItem('token');
    const menuRef = useRef();

    // Cerrar menú al hacer clic fuera
    useEffect(() => {
        if (!menuOpen) return;
        const handleClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [menuOpen]);

    return (
        <header className="header">
            <div className="logo">
                <Link to={"/"}> <img src={imagenLogo} alt="Logo" /> </Link>
            </div>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                Menú
            </button>
            <nav ref={menuRef} className={`menu ${menuOpen ? "open" : ""}`}>
                <Link to={"/"} onClick={() => setMenuOpen(false)}>Inicio</Link>
                <Link to={"/Descubre"} onClick={() => setMenuOpen(false)}>Descubre</Link>
                <Link to={"/Nosotros"} onClick={() => setMenuOpen(false)}>Nosotros</Link>
                <Link to={"/Contacto"} onClick={() => setMenuOpen(false)}>Contacto</Link>
                {/* Solo visible en móvil */}
                <div className="mobile-auth">
                    <Link to={"login"} className="login-btn" onClick={() => setMenuOpen(false)}>
                        <FaUser className="user-icon" />
                        <span>{token ? 'Mi cuenta' : 'Iniciar Sesión'}</span>
                    </Link>
                    {!token && (
                        <Link to={"register"} className="register-btn" onClick={() => setMenuOpen(false)}>
                            Registrarse
                        </Link>
                    )}
                </div>
            </nav>
            <div className="auth-buttons">
                <Link to={"login"} className="login-btn">{token ? 'Mi cuenta' : 'Iniciar Sesión'}</Link>
                {!token && (
                    <Link to={"register"} className="register-btn">Registrarse</Link>
                )}
            </div>
        </header>
    );
};

export default Header;