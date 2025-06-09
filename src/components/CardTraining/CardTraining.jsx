import { Link } from 'react-router-dom';
import './CardTraining.css';

const CardTraining = ({ training, mostrarBotonSeleccionar, onAñadirSeleccionado }) => {
    return (
        <div className="card cardTraining" key={training.id}>
            <img
                src={`/assets/trainings/${training.image}`}
                className="imagenTraining"
                alt={training.name}
            />
            <div className="card-body">
                <h5 className="card-title">{training.name}</h5>
                <p>Calorías quemadas: {training.caloriesBurned}</p>
                <p>Categoría: {training.categoria}</p>
                {mostrarBotonSeleccionar && (
                  <Link to="/carritoEntrenamientos">
                    <button
                        className="btn btn-success mt-2"
                        onClick={() => onAñadirSeleccionado(training)}
                    >
                        Añadir a la selección
                    </button>
                  </Link>
                )}
            </div>
        </div>
    );
};

export default CardTraining;