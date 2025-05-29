import './CardAlimentos.css';

const CardAlimentos = (props) => {
    return (
        <div className="card col-3 cardAlimentos" key={props.alimento.id}>
            <img
              src={`/src/assets/alimentos/${props.alimento.image}`}
              className="imagenAlimento"
              alt={props.alimento.name}
            />
            <h3>Nombre: {props.alimento.name}</h3>
            <p>Calorías: {props.alimento.calories}</p>
            <p>Categoria: {props.alimento.categoria} </p>	
        </div>
    );
}

export default CardAlimentos;