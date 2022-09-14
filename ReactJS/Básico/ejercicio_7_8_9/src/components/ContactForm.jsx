import React, { useRef } from 'react';
import { ContactClass } from '../models/contact';

const ContactForm = ( {add} ) => {

    const nameRef = useRef("");
    const PhoneRef = useRef("");

    const addContact = (e) => {
        e.preventDefault();

        const newContact = new ContactClass(
            nameRef.current.value,
            PhoneRef.current.value,
            false
        );
        add(newContact);
    }

    return (
        <form onSubmit={addContact} className='contact-form'>
        <div>
          <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' placeholder='Contact name' required/>
          <input ref={PhoneRef} id='inputPhone' type='number' className='' placeholder='Phone Number' required/>
          <button type='submit' className=''>New Contact</button>
        </div>
        
      </form>
    );
}

export default ContactForm;
