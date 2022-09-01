import React, { useRef } from 'react';

const Child = ( { name, send, update } ) => {

    const messageRef = useRef();
    const nameRef = useRef(name);

    const pressButton = () => {
        alert(`Text in input: ${messageRef.current.value}`);
    };

    const pressButtonParams = (text) => {
        alert(`Text: ${text}`);
    };

    const submitForm = (e) => {
        e.preventDefault();
        update(nameRef?.current?.value);
    }

    const updateName =()=> {

    }
    return (
        <div style={ {backgroundColor: 'cadetblue'} }>
            <p onMouseOver={ ()=> console.log("On Mouse Over") }>Child Component</p>
            <h3>Hello, {name}</h3>
            <button onClick={ ()=> console.log("Button 1 pressed") }>Button 1</button>
            <button onClick={ pressButton }>Button 2</button>
            {/*Para llamar funcion con params debemos hacerlo desde una funcion anonima, caso contrario se ejecutara siempre al cargar el elemento*/}
            <button onClick={ ()=> pressButtonParams("Hello") }>Button 3</button>
            <input placeholder='Insert a text to your father'
                   onFocus={ ()=> console.log("Input focus")}
                   onChange={ (e)=> console.log("Input change: ", e.target.value) }
                   onCopy= { ()=> console.log("Copied text form input")}
                   
                   //Asociamos la referencia al input, al ejecutar el boton 2 toma el texto escrito
                   ref = {messageRef}
                   ></input>

            {/* Al ser un props function de father "send" nos permite enviar logica del hijo al padre*/}
            <button onClick={ ()=> send(messageRef?.current?.value) }>Send Message</button>

            <div style={ {marginTop: '10px'} }>
                <form  onSubmit={submitForm} style={ {padding: '10px'} }>
                    <input ref={nameRef} placeholder='New name'></input>
                    <button type='submit'>Update Name</button>
                </form>
            </div>

        </div>
    );
}

export default Child;
