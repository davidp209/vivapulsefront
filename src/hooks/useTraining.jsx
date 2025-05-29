import { useEffect, useState } from "react";
import { getTraining } from "../services/getTraining";

const useTraining = (props) => {

    const [trainingID, setTrainingID] = useState([])
    const [buscando, setBuscando] = useState(false)

    function obtenerTrainingID() {
        
        // buscando los datos
        setBuscando(true)

        getTraining(props).then(datos => {

            setTrainingID(datos)            
            setBuscando(false)
            console.log(datos)

        })
    }

    //para que se ejecute una sola vez al cargar la página
    useEffect(obtenerTrainingID, [props]);

    return {trainingID, buscando}
}
export default useTraining;