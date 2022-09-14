import React, { useState, useEffect } from "react";
import { ContactClass } from "../models/contact";
import Contact from "./Contact";
import ContactForm from "./ContactForm";

const ContactList = () => {
  const initialContact1 = new ContactClass("Sergio", 115555550, true);
  const initialContact2 = new ContactClass("Karol", 112666666, false);
  const initialContact3 = new ContactClass("Pepe", 3514456622, true);

  const [contacts, setContact] = useState([
    initialContact1,
    initialContact2,
    initialContact3,
  ]);

  const setConnection = (contact) => {
    const index = contacts.indexOf(contact);
    const temporalContact = [...contacts];
    temporalContact[index].connected = !temporalContact[index].connected;
    setContact(temporalContact);
  };

  const deleteContact = (contact) => {
    const index = contacts.indexOf(contact);
    const temporalContact = [...contacts];
    temporalContact.splice(index, 1);
    setContact(temporalContact);
  };

  const addContact = (contact) => {
    const temporalContact = [...contacts];
    temporalContact.push(contact);
    setContact(temporalContact);
  };

  useEffect(() => {
    console.log("Contact state has been modified");
  }, []);

  return (
    <div className="root-contact">
      {contacts.map((contact, index) => {
        return (
          <Contact
            contact={contact}
            key={index}
            editState={setConnection}
            remove={deleteContact}
            add={addContact}
          ></Contact>
        );
      })}
      <ContactForm add={addContact}></ContactForm>
    </div>
  );
};

export default ContactList;
