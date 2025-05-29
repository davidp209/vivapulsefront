import React, { useState } from "react";
import useAliments from "../../hooks/useAliments";
import AjaxLoader from "../../components/AjaxLoader/AjaxLoader";
import CardAlimentos from "../../components/CardAlimentos/CardAlimentos";

const Alimentos = () => {
        const { alimentosID, buscando } = useAliments()


    return (
       <div >

           <div className="row justify-content-center text-center">
                        {buscando ? <AjaxLoader /> : alimentosID?.map((item, index) => (
                            <CardAlimentos key={index} alimento={item} />
                        ))}
                    </div>

            
        </div>
    );


}
export default Alimentos;