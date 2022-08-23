/* 
    Ejemplo de uso de:
     - useState()
     - useContext()
*/

import React, { useState, useContext } from "react";

//inicializamos un context null que va a poblarse con datos en adelante
const myContext = React.createContext(null);

// Va tener un valor que recibe desde el padre
const Component1 = () => {
  //Se usa contexto creado previamente
  const state = useContext(myContext);

  return (
    <div>
      <h1>El token es: {state.token}</h1>
      {/* Renderizamos componente2 */}
      <Component2></Component2>
    </div>
  );
};

const Component2 = () => {
  //Se usa contexto creado previamente
  const state = useContext(myContext);

  return (
    <div>
      <h2>Sesión creadada ID: {state.session}</h2>
    </div>
  );
};

const ComponentWithContext = () => {
  //iniciamos un estado default
  const initialState = {
    token: 12345678,
    session: 1,
  };

  //Creamos estado
  const [sessionData, setSessionData] = useState(initialState);

  const updateState = () => {
    setSessionData({
      token: "JWT87654321",
      session: sessionData.session +1
    });
  };

  return (
    <myContext.Provider value={sessionData}>
      {/* Todo lo que este aca puede leer los datos de sessionData, ademas,
            si se actualiza, los componentes aca tambien se actualizan */}
            <h1>*** useState() and useContext() example ***</h1>
      <Component1></Component1>
      <button onClick={updateState}>Update Session</button>
    </myContext.Provider>
  );
};

export default ComponentWithContext;
