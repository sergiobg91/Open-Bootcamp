import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Componente de clase
class Greeting extends Component {

    //Constructor
    constructor(props) {
        super(props);

        //informacion privada del componente
        this.state = {
            framework: "React",
            age: 30,
        }
    };

    //Un componente siempre debe retornar dentro de () el elemento html a renderizar
    render() {
        return (
            //Debe tener un unico elemento padre
            <div>
                <h1>Greetings Class Component!</h1>
                <p> props = Hello, {this.props.name}! </p>
                <p> state = You have {this.state.age} years old and you're learning {this.state.framework} </p>

                <div>
                    {/* Llamamos en el context a birthday para setear nuevo estado, renderiza la vista*/}
                    <button onClick={this.birthDay}>Turn years</button>
                </div>

            </div>
        );
    }

    /*Metodo para cambiar el estado del componente, incrementando la edad en 1 
      setState para actualizar y prevState para obtener el estado anterior
    */

    birthDay = () => {
        this.setState( (prevState) => ( { age: prevState.age + 1} ))
    }
}

//Para indicar el tipo de dato que se espera que se reciba en el componente
Greeting.propTypes = {
    name: PropTypes.string.isRequired,
};


export default Greeting;
