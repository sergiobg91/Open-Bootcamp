import React, {useState} from 'react';
import Child from '../pure/child';

const Father = () => {

    //?Funcion definida en el padre, pero es ejecutada por el hijo (child component.jsx)
    const showMessage = (text) => alert(`Message received in Father Component: ${text}`)

    const [name, setName] = useState('Sergio');
    
    const updateName = (newName) => {
        setName(newName);
    }

    return (
        <div style={ {backgroundColor: 'tomato', padding: '10px'} }>
        Father Component
            <Child name={name} send={showMessage} update={updateName}/>
        </div>
    );
}

export default Father;
