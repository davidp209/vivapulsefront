import { useEffect, useState } from "react";
import useMealsID from "../../hooks/useMealsID";
import useUserDetails from "../../hooks/useUserDetails";
import "./Dashboard.css";
import { FaAppleAlt, FaDumbbell, FaBrain, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {

    // Eliminated unused and duplicate variables from useMealsID
    const  {mealsID, buscandoMeals} = useMealsID();
    const [caloriasEsperadas, setCaloriasEsperadas] = useState(0);
    const [caloriasConsumidas, setCaloriasConsumidas] = useState(0);

    useEffect(() => {
        const hoy = new Date().toISOString().slice(0, 10);
        setCaloriasConsumidas(
            mealsID
                ?.filter(meal => meal.createdAt && meal.createdAt.slice(0, 10) === hoy)
                .reduce((total, meal) => total + meal.calories, 0) || 0
        );
    }, [mealsID]);

    const calriasComidas = () => {

    return caloriasConsumidas / caloriasEsperadas * 100;
    
    }
    console.log("caloriasConsumidas", caloriasConsumidas);
    



    if (!localStorage.getItem("token")) {
        window.location.href = "/login"; // Redirección si no hay token
    }

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login"; // Redirección tras cerrar sesión
    };

    const { userDetails, buscando } = useUserDetails();

    return (
        <div className="dashboard-wrapper">
            {/* Barra lateral */}
            <div className="sidebar">
                <h3 className="sidebar-title">VivaPulse</h3>
                <ul className="sidebar-menu">
                    <li>
                        <Link to="/tusComidas" className="sidebar-link">
                            <FaAppleAlt className="sidebar-icon" />
                            <span>Comida</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/tusEntrenamientos" className="sidebar-link">
                            <FaDumbbell className="sidebar-icon" />
                            <span>Entrenamiento</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/salud-mental" className="sidebar-link">
                            <FaBrain className="sidebar-icon" />
                            <span>Salud Mental</span>
                        </Link>
                    </li>
                </ul>
                <div className="sidebar-footer">
                    <button className="logout-btn" onClick={logout}>
                        <FaSignOutAlt className="sidebar-icon" />
                        <span>Cerrar Sesión</span>
                    </button>
                </div>
            </div>
    

            <div className="dashboard-container">
                <h1 className="mb-4 fw-bold text-primary text-center pt-4">Dashboard</h1>

                <div className="container py-4">
                    <div className="row justify-content-center gap-4">
                        <div className="col-md-3 d-flex flex-column align-items-center">
                            <div className="circle-chart shadow" style={{ "--value": `${calriasComidas()}%`, "--color": "#17c9e3" }}>
                                <div className="circle-inner">
                                    <h5 className="mb-0 fw-bold text-info">{caloriasConsumidas}/{caloriasEsperadas}</h5>
                                    <span className="text-secondary">kcal</span>
                                </div>
                            </div>
                            <div className="label mt-2 text-info fw-semibold">Consumidas</div>
                            <h3> Intruce calorias esperadas: </h3>
                            <input
                                type="number"
                                className="form-control mt-2"
                                placeholder="Calorías esperadas"
                                style={{ width: "200px" }}
                                onChange={(e) => {
                                    const expectedCalories = e.target.value;
                                    setCaloriasEsperadas(expectedCalories);
                                    calriasComidas();
                                    // Aquí podrías guardar las calorías esperadas en el estado o en localStorage
                                    
                                }}
                            />
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
