import useTraining from '../../hooks/useTraining';
import AjaxLoader from '../../components/AjaxLoader/AjaxLoader';
import CardTraining from '../../components/CardTraining/CardTraining';
import { useState } from 'react';

const training = (props) => {
     const { trainingID, buscando } = useTraining()
     const [busquedaTraining, setBusquedaTraining] = useState("");

       const filteredTraining = trainingID?.filter((item) =>
        item.name.toLowerCase().includes(busquedaTraining.toLowerCase())
    );


    return (
       <div >
         <div className="row justify-content-center text-center mb-3 mt-5">
                <input
                    type="text"
                    placeholder="Buscar alimentos..."
                    value={busquedaTraining}
                    onChange={(e) => setBusquedaTraining(e.target.value)}
                    className="form-control w-50"
                />
            </div>

           <div className="row justify-content-center text-center">
    {buscando ? <AjaxLoader /> : filteredTraining?.map((item, index) => (
        <CardTraining key={index} training={item} />
    ))}
</div>
        </div>
    );
}
export default training;