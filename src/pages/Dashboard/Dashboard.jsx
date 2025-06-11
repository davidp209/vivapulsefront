import { useEffect, useState } from "react";
import useMealsID from "../../hooks/useMealsID";
import useUserDetails from "../../hooks/useUserDetails";
import "./Dashboard.css";
import useWorkoutsID from "../../hooks/useWorkoutsID";
import Barralateral from "../../components/BarraLateral/Barralateral";

const Dashboard = () => {

    const  {mealsID, buscandoMeals} = useMealsID();
    const [caloriasEsperadas, setCaloriasEsperadas] = useState(2000);
    const [caloriasConsumidas, setCaloriasConsumidas] = useState(0);
    const [caloriasQuemadas, setCaloriasQuemadas] = useState(0); // total quemado hoy
    const [caloriasEsperadasQuemadas, setcaloriasEsperadasQuemadas] = useState(2000);
    const {workoutsID, buscandoWorkouts} = useWorkoutsID();

    useEffect(() => {
        const hoy = new Date().toISOString().slice(0, 10);
        setCaloriasConsumidas(
            mealsID
                ?.filter(meal => meal.createdAt && meal.createdAt.slice(0, 10) === hoy)
                .reduce((total, meal) => total + meal.calories, 0) || 0
        );
    }, [mealsID]);

    useEffect(() => {
        const hoy = new Date().toISOString().slice(0, 10);
        setCaloriasQuemadas(
            workoutsID
                ?.filter(workout => workout.createdAt && workout.createdAt.slice(0, 10) === hoy)
                .reduce((total, workout) => total + (workout.totalCalories || 0), 0) || 0
        );
    }, [workoutsID]);

    const calriasComidas = () => {

    return caloriasConsumidas / caloriasEsperadas * 100;
    
    }

    const caloriasQuemadasPorcentaje = () => {
        return caloriasQuemadas / caloriasEsperadasQuemadas * 100;
    }
   
    



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
           <Barralateral />
    

            <div className="dashboard-container">
                <h1 className="mb-4 fw-bold text-primary text-center pt-4">Area Personal</h1>

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
                            <div className="w-100 d-flex flex-column align-items-center mt-3">
                                <label htmlFor="calorias-esperadas" className="form-label fw-semibold text-secondary mb-1">
                                    Introduce tus objetivos:
                                </label>
                                <input
                                    id="calorias-esperadas"
                                    type="number"
                                    min="0"
                                    className="form-control text-center"
                                    placeholder="Ej: 2000"
                                    style={{ width: "150px", fontWeight: "bold", fontSize: "1.1em" }}
                                    value={caloriasEsperadas}
                                    onChange={e => setCaloriasEsperadas(e.target.value)}
                                />
                                <small className="text-muted mt-1">
                                    ¡Personaliza tu meta diaria!
                                </small>
                            </div>
                        </div>

                        <div className="col-md-3 d-flex flex-column align-items-center">
                            <div className="circle-chart shadow" style={{ "--value": `${caloriasQuemadasPorcentaje()}%`, "--color": "#a46de4" }}>
                                <div className="circle-inner">
                                    <h5 className="mb-0 fw-bold text-purple">{caloriasQuemadas}/{caloriasEsperadasQuemadas}</h5>
                                    <span className="text-secondary">kcal</span>
                                </div>
                            </div>
                            <div className="label mt-2 text-purple fw-semibold">Quemadas</div>
                              <div className="w-100 d-flex flex-column align-items-center mt-3">
                                <label htmlFor="calorias-esperadas" className="form-label fw-semibold text-secondary mb-1">
                                    Introduce tus objetivos:
                                </label>
                                <input
                                    id="calorias-quemadas"
                                    type="number"
                                    min="0"
                                    className="form-control text-center"
                                    placeholder="Ej: 2000"
                                    style={{ width: "150px", fontWeight: "bold", fontSize: "1.1em" }}
                                    value={caloriasEsperadasQuemadas}
                                    onChange={e => setcaloriasEsperadasQuemadas(Number(e.target.value))}
                                />
                                <small className="text-muted mt-1">
                                    ¡Personaliza tu meta diaria!
                                </small>
                            </div>
                        </div>

                        <div className="col-md-3 d-flex flex-column align-items-center">
                            <div className="circle-chart shadow" style={{ "--value": "75%", "--color": "#adb5bd" }}>
                                <div className="circle-inner">
                                    <h5 className="mb-0 fw-bold text-muted">
                                        {
                                            // Calorías restantes: objetivo - consumidas + objetivo quemadas - quemadas
                                            (caloriasEsperadas - caloriasConsumidas) + (caloriasEsperadasQuemadas - caloriasQuemadas)
                                        }
                                    </h5>
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
