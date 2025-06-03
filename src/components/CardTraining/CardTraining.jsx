import './CardTraining.css';

const CardTraining = (props) => {
    const { training } = props;
    return (
        <div className="card col-3 cardTraining" key={training.id}>
            <img
              src={`assets/trainings/${training.image}`}
              className="imagenTraining"
              alt={training.name}
            />
            <h3>Nombre: {training.name}</h3>
            <p>Duración: {training.duration} min</p>
            <p>Categoría: {training.categoria}</p>
        </div>
    );
}

export default CardTraining;