/* 
    Ejemplo de uso de:
     - useState()
     - useRef()
     - userEffect()
*/

import React, { useState, useRef, useEffect } from 'react'

const Example2 = () => {

    /*
        Vamos a crear 2 contadores distintos, cada uno en un estado diferente
    */

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    //Generamos una referencia con useRef, para asociar una variable con un elemento del componente (DOM)
    const myRef = useRef();

    const incrementCounter1 = () => {
        setCounter1(counter1+1);
    }
    
    const incrementCounter2 = () => {
        setCounter2(counter2+1);

    }

    // ? Caso 1: Ejecutar siempre un snipet de codigo (lo que este dentro del useEffect() )
    // useEffect( ()=> {
    //     console.log("Cambio en el estado del componente")
    //     console.log(`Mostrando referncia al elemento DOM:`)
    //     console.log(myRef);
    // } )

    //? Caso 2: Ejecutar solo cuando cambie el contador 1
    // useEffect(() => {
    //     console.log("Cambio en el estado del contador 1");
    //     console.log("Mostrando referncia al elemento DOM:")
    //     console.log(myRef);
    // }, [counter1]); //Se le pasa una lista de params, en este caso solo el contador1

    //? Caso 3: Ejecutar solo cuando cambie el contador 1 o contador 2, no toma en cuenta otro componente
    useEffect(() => {
        console.log("Cambio en el estado del contador 1 o contador 2");
        console.log("Mostrando referncia al elemento DOM:")
        console.log(myRef);
    }, [counter1, counter2]);


  return (
    <div>
        <div>
            <h1>*** useState(), useRef() and useEffect() example ***</h1>
            <h3>Counter 1: {counter1}</h3>
            <h3>Counter 2: {counter2}</h3>
            
            {/* Elemento referenciado */}
            <h4 ref={myRef}>myRef example</h4>
        </div>

    <div>
        <button onClick={incrementCounter1}>Increment counter 1</button>
        <button onClick={incrementCounter2}>Increment counter 2</button>
    </div>
</div>
  )
};

export default Example2;