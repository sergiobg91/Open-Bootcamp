import React, { useState } from 'react';

// Definimos estilos en constantes y las propiedades van en camelCase!
const loggedStyle = { color: "white"};
const unLoggedStyle = { color: "red", fontWeight: "bold"};

const GreetingStyle = (props) => {

    // ? Generamos estado en el componente para controlar usuarios logueados
    const [logged, setlogged] = useState(false);

    return (
        <div style={logged ? loggedStyle : unLoggedStyle}>
            
            { logged ? (<h1>Hello, {props.name}</h1>) : (<h1>Please, login </h1>) }
            
            <button onClick={ () => {logged ? setlogged(false) : setlogged(true)}}>
                { logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyle;
