import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contactClass';
import ContactComponentB from '../container/containerBox';

const ContactComponentA = ( ) => {

    const defaultContact = new Contact("Sergio", "Beltran", "sbg@gmail.com", false);

    return (
        <div>
            <ContactComponentB contact={ defaultContact }></ContactComponentB>
        </div>
    );
}


ContactComponentA.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};

export default ContactComponentA;