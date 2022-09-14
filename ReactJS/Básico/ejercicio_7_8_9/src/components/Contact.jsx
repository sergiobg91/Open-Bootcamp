import React from 'react';
import PropTypes from 'prop-types';
import { ContactClass } from '../models/contact'

const Contact = ( {contact, editState, remove, add} ) => {
    return (
        <div className='single-contact'>
            <h3>{contact.name}</h3>
            <h4>{contact.phone}</h4>
            <p>{contact.connected ? "Conectado" : "Desconectado"}</p>
            <button onClick={()=>editState(contact)} className='edit'>Edit State</button>
            <button  onClick={()=>remove(contact)} className='delete'>Delete</button>
        </div>
    );
};

Contact.propTypes = {
    contact: PropTypes.instanceOf(ContactClass),
    editState: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired, 
};

export default Contact;
