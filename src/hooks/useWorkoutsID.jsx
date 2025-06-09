import { useEffect, useState } from "react";
import { getworkoutsID } from "../services/getworkoutsID";


const useWorkoutsID = (props) => {

    const [workoutsID, setworkoutsID] = useState([])
    const [buscando, setBuscando] = useState(false)

    function obtenerWorkoutsID() {
        
        // buscando los datos
        setBuscando(true)

        getworkoutsID(props).then(datos => {

            setworkoutsID(datos)            
            setBuscando(false)
            console.log(datos)

        })
    }

    //para que se ejecute una sola vez al cargar la página
    useEffect(obtenerWorkoutsID, [props]);

    return {workoutsID, buscando}
}
export default useWorkoutsID;