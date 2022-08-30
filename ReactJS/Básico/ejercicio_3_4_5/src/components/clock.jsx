import React, { useState, useEffect } from 'react';
import '../styles/clock.scss'

const Clock = () => {
    
    const initState = {
        date: new Date(),
        age: 0,
        name: "Sergio",
        lastName: "Beltran"
    };

    const [state, setState] = useState(initState);
    
    useEffect(() => {
        const timerID = setInterval( ()=> tick(), 1000 );
        return () => clearInterval(timerID);
    },);

    const tick = () => {
        setState(()=> ({
            ...state,
            date: new Date(),
            age: state.age + 1,
        }));
    };

    return (
        <div>
            <h2>Hora Actual: {state.date.toLocaleTimeString()}</h2>
            <h3>{state.name} {state.lastName}</h3>
            <h1>Edad: {state.age}</h1>
        </div>
    );
}

export default Clock;