import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contact } from '../../models/contactClass';

const ContactComponentB =  ({ contact }) => {
    
    const [connected, setConnected] = useState(contact.connected);

    const changeState = () => {
         setConnected(!connected);
    };

    return (
    <div>
        <h3>Name: { contact.name }</h3>
        <h3>Last Name: { contact.lastName }</h3>
        <h3>Email: { contact.email }</h3>
        <h3>State: {connected ? "Available" : "Not available"}</h3>
        <button onClick={changeState}>Change State</button>
    </div>
    );
};

ContactComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};

export default ContactComponentB;