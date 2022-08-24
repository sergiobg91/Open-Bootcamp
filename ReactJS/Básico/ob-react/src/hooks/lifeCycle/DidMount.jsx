import React, { Component, useEffect } from 'react';

// ? Ejemplo de uso DidMount en componente de clase
export class DidMountClass extends Component {

    componentDidMount() {
        console.log("componentDidMount: Comportamiento antes de renderizado del componente")
    }

    render() {
        return (
            <div>
                <h1>DidMountClass</h1>
            </div>
        );
    }
};

// ? Ejemplo de uso de hook (useState) que simula DidMount en componente funcional
export const  DidMountHook = () => {

    useEffect(() => {
        console.log("Comportamiento antes del renderizado del componente");
    }, []);
    // [] vacios indica que solo se va a ejecutar una vez (simula comportamiento de DidMount)
    // Sin corchetes se ejecuta cada vez que el compoenente se renderice

  return (
    <div>
        <h1>DidMountHook</h1>
    </div>
  )
};