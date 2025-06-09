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
            <h3>{training.name}</h3>
            <p>Calorias Quemadas: {training.caloriesBurned} </p>
            <p>Categoría: {training.categoria}</p>
        </div>
    );
}

export default CardTraining;