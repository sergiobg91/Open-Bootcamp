import React, { Component, useEffect } from 'react';

// ? Ejemplo de uso de DidUpdate en componente de clase
export class DidUpdateClass extends Component {

    componentDidUpdate() {
        console.log("componentDidUpdate: Comportamiento cuando recibe nuevos props o cambios en su estado del componente");
    };

    render() {
        return (
            <div>
                <h1>DidUpdateClass</h1>
            </div>
        );
    }
};

// ? Ejemplo de uso de hook (useState) que simula DidUpdate en componente funcional
export const  DidUpdateHook = () => {

    useEffect(() => {
        console.log("Comportamiento antes del renderizado del componente");
    },);// Sin corchetes se ejecuta cada vez que el compoenente se renderice (cambio de estado o props)

  return (
    <div>
        <h1>DidUpdateHook</h1>
    </div>
  )
};