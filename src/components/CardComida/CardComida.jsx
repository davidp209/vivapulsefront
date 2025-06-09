import './CardComida.css';

const CardComida = ({ comida }) => {
    return (
        <div className="cardComida">
            <div className="cardComida-header">
                <span className="cardComida-title">{comida.name}</span>
                <span className="cardComida-date">{comida.createdAt}</span>
            </div>
            <div className="cardComida-body">
                <div className="cardComida-section">
                    <strong>Alimentos:</strong>
                    <ul className="cardComida-list">
                        {Array.isArray(comida.idAliment) && comida.idAliment.length > 0 ? (
                            comida.idAliment.map((id, idx) => (
                                <li key={idx}>{id}</li>
                            ))
                        ) : (
                            <li>No hay alimentos</li>
                        )}
                    </ul>
                </div>
                <div className="cardComida-section">
                    <strong>Calorías:</strong> <span>{comida.calories}</span>
                </div>
            </div>
        </div>
    );
};

export default CardComida;