import React, { Component, useEffect } from 'react'

// ? Ejemplo de uso de WillUnMount en componente de clase
export class WillUnMountClass extends Component {
  
    componentWillUnmount() {
        console.log("componentWillUnMount: Comportamiento antes de que el componente desaparezca");
    };

    render() {
    return (
      <div>WillUnMountClass</div>
    )
  }
}

export const WillUnMountHook = () => {

    useEffect(() => {
        //Aca no va nada, la diferencia es que el comportamiento va dentro de un return del useEffect
        return () => {
            console.log("Comportamiento antes de que el componente desaparezca con hook");
        };
    }, []); //corchetes vacios para que ejecute una vez

    return (
        <div>
            <h1>WillUnMountHook</h1>
        </div>
    );
}

