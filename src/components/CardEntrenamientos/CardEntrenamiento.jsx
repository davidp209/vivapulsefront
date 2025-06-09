import './CardEntrenamiento.css';

const CardEntrenamiento = ({ entrenamiento }) => {
    return (
        <div className="cardEntrenamiento">
            <div className="cardEntrenamiento-header">
                <span className="cardEntrenamiento-title">ID: {entrenamiento.id}</span>
                <span className="cardEntrenamiento-date">Tiempo: {entrenamiento.time}</span>
            </div>
            <div className="cardEntrenamiento-body">
                <div className="cardEntrenamiento-section">
                    <strong>Calorías totales:</strong> <span>{entrenamiento.totalCalories}</span>
                </div>
                <div className="cardEntrenamiento-section">
                    <strong>Training ID:</strong> <span>{entrenamiento.training.id}</span>
                </div>
            </div>
        </div>
    );
};

export default CardEntrenamiento;