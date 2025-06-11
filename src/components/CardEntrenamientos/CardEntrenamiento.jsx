import useTraining from '../../hooks/useTraining';
import './CardEntrenamiento.css';

const CardEntrenamiento = ({ entrenamiento }) => {

    const { trainingID } = useTraining();

    //esto es para obtener el nombre del entrenamiento a partir del ID
    const getNombreTraining = (id) => {
        if (!Array.isArray(trainingID)) return `ID: ${id}`;
        const training = trainingID.find(a => a.id === id);
        return training ? training.name : `ID: ${id}`;
    };

    return (
        
        <div className="cardEntrenamiento">
            <div className="cardEntrenamiento-header">
                <span className="cardEntrenamiento-title">
                    {getNombreTraining(entrenamiento.id)}
                </span>
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