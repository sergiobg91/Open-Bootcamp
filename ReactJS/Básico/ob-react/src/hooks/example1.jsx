/*
    Ejemplo de uso del Hoook useState:

    Crear un componente de tipo funcion y acceder a su estado privadi a traves de un hook y
    ademas, poder modificarlo
*/

import React, { useState } from 'react'

const Example1 = () => {

    //Valor inicial para contador
    const initialValue = 0;

    //valor inicial para una persona
    const initialPerson = {
        name: "Sergio",
        email: "sb@gmail.com"
    };

    /* Hacen parte del componente para poder gestionar el cambio y que se vea reflejado en el componente,
       counter toma el valor de initialValue, y se vuelve la variable a usar en adelante 
    */
    const [counter, setCounter] = useState(initialValue);
    const [person, setPerson] = useState(initialPerson);

    //Actualiza el estado privado que contiene el contador
    const incrementCounter = () => {
        setCounter(counter+1);
    }

    const updatePerson = (name) => {
        setPerson(
            {
                name: "Pepe",
                email: "pg@live.com"
            }
        )
    }

    return (
        <div>
            <div>
                <h1>*** useState() example ***</h1>
                <h3>Contador: {counter}</h3>
                <button onClick= {incrementCounter}>Incrementar</button>
            </div>

            <div>
                <h3>Person name: {person.name}</h3>
                <h3>Person email: {person.email}</h3>
                <button onClick= {updatePerson}>Change Person</button>
            </div>
        </div>
        
    );
};

export default Example1;