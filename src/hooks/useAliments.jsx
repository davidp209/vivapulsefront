import { useEffect, useState } from "react";
import { getAliments } from "../services/getAliments";

const useAliments = (props) => {

    const [alimentosID, setAlimentosID] = useState([])
    const [buscando, setBuscando] = useState(false)

    function obtenerAlimentosID() {
        
        // buscando los datos
        setBuscando(true)

        getAliments(props).then(datos => {

            setAlimentosID(datos)            
            setBuscando(false)
            console.log(datos)

        })
    }

    //para que se ejecute una sola vez al cargar la página
    useEffect(obtenerAlimentosID, [props]);

    return {alimentosID, buscando}
}
export default useAliments;