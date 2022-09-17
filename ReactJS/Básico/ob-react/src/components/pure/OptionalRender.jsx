import React, { useState } from 'react';

// Login Logout buttons
export const LoginButton = ( {loginAction} ) => {
    return (
        <button onClick={loginAction}>Login</button>
    );
};

export const LogoutButton = ( {logoutAction} ) => {
    return (
        <button onClick={logoutAction}>Logout</button>
    );
};

const OptionalRender = () => {

    const [access, setAccess] = useState(true);
    const [message, setMessage] = useState(0);

    const loginAction = () => {
        setAccess(true);
    };

    const logoutAction = () => {
        setAccess(false);
    };

    //? Renderizado de componentes condicionado
    const optionalButton = access ? <LogoutButton logoutAction={logoutAction}></LogoutButton> : <LoginButton loginAction={loginAction}></LoginButton>
    
    //? Mensajes sin leer
    const addMessage = () => {
        setMessage(message + 1);
    }

    return (
        <div>
            {optionalButton}

            {/* N Mensajes sin leer */}
            {message > 0 && <p>You have {message} unread messages</p>}
            {message < 1 && <p>You don't have unread messages</p>}

            <button onClick={addMessage}>Add New Message</button>
        </div>
    );
}

export default OptionalRender;
