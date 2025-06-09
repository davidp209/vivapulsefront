import { useEffect, useState } from "react";
import { getMealsID } from "../services/getMealsID";

const useMealsID = (props) => {

    const [mealsID, setMealsID] = useState([])
    const [buscando, setBuscando] = useState(false)

    function obtenerMealsID() {
        
        // buscando los datos
        setBuscando(true)

        getMealsID(props).then(datos => {

            setMealsID(datos)            
            setBuscando(false)
            console.log(datos)

        })
    }

    //para que se ejecute una sola vez al cargar la página
    useEffect(obtenerMealsID, [props]);

    return {mealsID, buscando}
}
export default useMealsID;