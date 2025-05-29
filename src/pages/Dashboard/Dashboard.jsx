import useUserDetails from "../../hooks/useUserDetails";
import "./Dashboard.css";



const Dashboard = () => {

    if (!localStorage.getItem('token')) {
        window.location.href = '/login'; // Redirección si no hay token
    }
    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login'; // Redirección tras cerrar sesión

    }

    const { userDetails, buscando } = useUserDetails();
    return (
        <div className="dashboard-container d-flex flex-column align-items-center pt-5 pb-5">
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

            <div className="user-info mt-5 text-center">
                {buscando && <p className="text-secondary">Cargando datos del usuario...</p>}
                {userDetails && (
                    <div className="card p-4 shadow-sm border-0">
                        <h2 className="fw-bold mb-2 text-success">
                            Bienvenido, {userDetails.firstName} {userDetails.lastName}
                        </h2>
                        <p className="mb-0 text-secondary">Tu email es: <span className="fw-semibold">{userDetails.email}</span></p>
                    </div>
                )}
            </div>

            <button
                onClick={logout}
                className="btn btn-danger mt-4 px-4 py-2 fw-bold shadow-sm"
            >
                Cerrar sesión
            </button>
        </div>
    );
}
export default Dashboard;