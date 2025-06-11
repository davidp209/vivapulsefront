import useTraining from '../../hooks/useTraining';
import AjaxLoader from '../../components/AjaxLoader/AjaxLoader';
import CardTraining from '../../components/CardTraining/CardTraining';
import { useState } from 'react';

const training = (props) => {
    const { trainingID, buscando } = useTraining()
    const [busquedaTraining, setBusquedaTraining] = useState("");
    const [visibleCount, setVisibleCount] = useState(8); 

    const filteredTraining = trainingID?.filter((item) =>
        item.name.toLowerCase().includes(busquedaTraining.toLowerCase())
    );


    return (
        <div >
            <div className="row justify-content-center text-center mb-3 mt-5">
                <input
                    type="text"
                    placeholder="Buscar entrenamientos..."
                    value={busquedaTraining}
                    onChange={(e) => setBusquedaTraining(e.target.value)}
                    className="form-control w-50"
                />
            </div>

            <div className="row justify-content-center text-center">
                {buscando ? <AjaxLoader /> : filteredTraining?.slice(0, visibleCount).map((item, index) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                        <CardTraining training={item} />
                    </div>
                ))}
            </div>
            {filteredTraining && visibleCount < filteredTraining.length && (
                <div className="text-center mb-4">
                    <button className="btn btn-primary" onClick={() => setVisibleCount(visibleCount + 8)}>
                        Cargar más
                    </button>
                </div>
            )}
        </div>
    );
}
export default training;