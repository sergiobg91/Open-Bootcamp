import React, { useEffect } from 'react';


const AllCycles = () => {

    //Solo un useEffect por componente
    useEffect(() => {
        console.log("Componente creado");

        document.title = `${new Date()}`;
        const intervalID = setInterval(() => console.log(`Actualizacion del componente`), 1000);
        
        return () => {
            console.log("Componente va a desaparecer");
            document.title = "Tiempo detenido";
            clearInterval(intervalID);
        }
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
