// Ejemplo de props.children -> Podemos pasar elementos HTML

import React from 'react';

const Example4 = (props) => {
    return (
        <div>
            <h1>***Children props example***</h1>
            <h2>Name: {props.name}</h2>
            {/* propps.children renderizara por defecto lo que se encuentre entre los tags 
            de apertura y cierre de este componente, desde el componente de orden superior*/}
            {props.children}
        </div>
    );
}

export default Example4;




 
