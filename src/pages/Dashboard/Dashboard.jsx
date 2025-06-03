import useUserDetails from "../../hooks/useUserDetails";
import "./Dashboard.css";
import { FaAppleAlt, FaDumbbell, FaBrain, FaSignOutAlt } from "react-icons/fa";

const Dashboard = () => {
    if (!localStorage.getItem("token")) {
        window.location.href = "/login"; // Redirección si no hay token
    }

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login"; // Redirección tras cerrar sesión
    };

    const { userDetails, buscando } = useUserDetails();

    return (
        <div className="dashboard-wrapper d-flex">
            {/* Barra lateral */}
            <div className="sidebar">
                <h3 className="sidebar-title">VivaPulse</h3>
                <ul className="sidebar-menu">
                    <li>
                        <FaAppleAlt className="sidebar-icon" />
                        <span>Alimentos</span>
                    </li>
                    <li>
                        <FaDumbbell className="sidebar-icon" />
                        <span>Entrenamiento</span>
                    </li>
                    <li>
                        <FaBrain className="sidebar-icon" />
                        <span>Salud Mental</span>
                    </li>
                </ul>
                <div className="sidebar-footer">
                    <button className="logout-btn" onClick={logout}>
                        <FaSignOutAlt className="sidebar-icon" />
                        <span>Cerrar Sesión</span>
                    </button>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="dashboard-container flex-grow-1 d-flex flex-column align-items-center pt-5 pb-5">
                <h1 className="mb-4 fw-bold text-primary">Dashboard</h1>

                <div className="container py-4">
                    <div className="row justify-content-center gap-4">
                        <div className="col-md-3 d-flex flex-column align-items-center">
                            <div className="circle-chart shadow" style={{ "--value": "25%", "--color": "#17c9e3" }}>
                                <div className="circle-inner">
                                    <h5 className="mb-0 fw-bold text-info">500</h5>
                                    <span className="text-secondary">kcal</span>
                                </div>
                            </div>
                            <div className="label mt-2 text-info fw-semibold">Consumidas</div>
                        </div>

                        <div className="col-md-3 d-flex flex-column align-items-center">
                            <div className="circle-chart shadow" style={{ "--value": "100%", "--color": "#a46de4" }}>
                                <div className="circle-inner">
                                    <h5 className="mb-0 fw-bold text-purple">2000</h5>
                                    <span className="text-secondary">kcal</span>
                                </div>
                            </div>
                            <div className="label mt-2 text-purple fw-semibold">Quemadas</div>
                        </div>

                        <div className="col-md-3 d-flex flex-column align-items-center">
                            <div className="circle-chart shadow" style={{ "--value": "75%", "--color": "#adb5bd" }}>
                                <div className="circle-inner">
                                    <h5 className="mb-0 fw-bold text-muted">1500</h5>
                                    <span className="text-secondary">kcal</span>
                                </div>
                            </div>
                            <div className="label mt-2 text-muted fw-semibold">Restantes</div>
                        </div>
                    </div>
                </div>

                {/* Nueva sección de bienvenida */}
                <div className="welcome-card mt-5 text-center">
                    {buscando && <p className="text-secondary">Cargando datos del usuario...</p>}
                    {userDetails && (
                        <div className="card p-4 shadow-lg border-0">
                            <h2 className="fw-bold mb-3 text-primary">
                                ¡Hola, {userDetails.firstName}!
                            </h2>
                            <p className="mb-2 text-secondary">
                                Nos alegra verte de nuevo. Aquí tienes un resumen de tu progreso.
                            </p>
                            <p className="text-muted">
                                Tu email registrado es: <span className="fw-semibold">{userDetails.email}</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;