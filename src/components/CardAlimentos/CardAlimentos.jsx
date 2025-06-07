import './CardAlimentos.css';

const CardAlimentos = ({ alimento, onAdd, isInCart }) => (
    <div className="card cardAlimentos" key={alimento.id}>
        <img
          src={`/assets/alimentos/${alimento.image}`}
          className="imagenAlimento"
          alt={alimento.name}
        />
        <div className="card-body">
            <h5 className="card-title">{alimento.name}</h5>
            <p>Calorías: {alimento.calories}</p>
            <p>Categoria: {alimento.categoria} </p>	
            {onAdd && (
                <button
                    className="btn btn-primary mt-2"
                    onClick={() => onAdd(alimento)}
                    disabled={isInCart}
                >
                    Añadir
                </button>
            )}
        </div>
    </div>
);

export default CardAlimentos;