import './CardAlimentos.css';

const CardAlimentos = ({ alimento, mostrarBotonCesta, onAñadirCesta }) => {

  


    return (
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
                {mostrarBotonCesta && (
                    <button className="btn btn-primary btn-lg px-5 shadow" onClick={() => {
                        onAñadirCesta(alimento.id);
                        }}>
                        Añadir a la cesta
                    </button>
                )}
            </div>
        </div>
    );
};

export default CardAlimentos;