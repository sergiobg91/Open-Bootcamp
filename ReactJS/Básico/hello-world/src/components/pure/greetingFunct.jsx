import React, {useState} from 'react';
import PropTypes from 'prop-types';

//Componente de funcion, no tenemos props ni state, para ello se utilizan hooks
const GreetingFunct = (props) => {

    /*intro a hook 'useState' (importado previamente)
        Nos permite definir un estado privado en componentes de funcion, a saber:
        const [variable, metodo para actualizarlo] = useState(valorInicial);
    */
    const [age, setage] = useState(30);

    const birthDay = () => { 
        setage(age + 1);
    }

    return (
        <div>
            <h1>Greetings Function Component!</h1>
            <p> props = Hello, {props.name}! </p>
            <p> state = You have {age} years old</p>

            {/* Llamamos en el context a birthday para setear nuevo estado, renderiza la vista*/}
            <div>
                <button onClick={birthDay}>Turn years</button>
            </div>
        </div>
    );
};


GreetingFunct.propTypes = {
    name: PropTypes.string,
};


export default GreetingFunct;
