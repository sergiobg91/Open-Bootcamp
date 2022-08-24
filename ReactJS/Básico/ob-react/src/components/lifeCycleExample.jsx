// ? Ejemplo de componente de tipo clase que dispone de los metodos de ciclo de vida

import React, { Component } from 'react';

class LifeCycleExample extends Component {

    constructor(props) {
        super(props);
        console.log("Constructor: Cuando se instancia el componente ");
    };

    componentWillMount() {
        console.log("componentWillMount: Antes del montaje del componente ");
    };

    componentDidMount() {
        console.log("componentDidMount: Al finalizar el montaje del componente y antes de renderizar");
    };

    componentWillReceiveProps(nextProps) {
        console.log("WillReceiveProps: Si va a recibir nuevas props ");
    };

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate: Retorna true o false en caso de que deba o no actualizarse");
    };

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate: Justo antes de actualizarse");
    };

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate: Justo despues de actualizarse");
    };
    
    componentWillUnmount() {
        console.log("componentWillUnmount: Justo antes de desaparecer");
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycleExample;
