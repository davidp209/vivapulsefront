import './CardComida.css';
import useAliments from '../../hooks/useAliments';

const CardComida = ({ comida }) => {
    const { alimentosID } = useAliments();
    console.log('alimentosID:', alimentosID);

    const getNombreAlimento = (id) => {
        if (!Array.isArray(alimentosID)) return `ID: ${id}`;
        const alimento = alimentosID.find(a => a.id === id);
        return alimento ? alimento.name : `ID: ${id}`;
    };

    return (
        <div className="cardComida">
            <div className="cardComida-header">
                <span className="cardComida-title">{comida.name}</span>
                <span className="cardComida-date">
                    {comida.createdAt
                        ? new Date(comida.createdAt).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit'
                        })
                        : ''}
                </span>
            </div>
            <div className="cardComida-body">
                <div className="cardComida-section">
                    <strong>Alimentos:</strong>
                    <ul className="cardComida-list">
                        {!Array.isArray(alimentosID)
                            ? <li>Cargando alimentos...</li>
                            : Array.isArray(comida.idAliment) && comida.idAliment.length > 0
                                ? comida.idAliment.map((id, idx) => (
                                    <li key={idx}>{getNombreAlimento(id)}</li>
                                ))
                                : <li>No hay alimentos</li>
                        }
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