import { useEffect, useState } from "react";
import { getUserDetails } from "../services/getUserDetails";

const useUserDetails = () => {

    const [userDetails, setUserDetails] = useState(null)
    const [buscando, setBuscando] = useState(false)

    function obtenerUserDetails() {

        // buscando los datos
        setBuscando(true)

        getUserDetails().then(datos => {

            setUserDetails(datos)            
            setBuscando(false)
            console.log(datos)

        })
    }

    //para que se ejecute una sola vez al cargar la página
    useEffect(obtenerUserDetails, []);

    return {userDetails, buscando}
}
export default useUserDetails;