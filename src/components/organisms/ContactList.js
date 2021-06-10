import React, { useContext, useEffect } from 'react';
import ContactContext from '../../context/ContactContext'
import ContactForm from '../molecules/ContactForm'
    
const ContactList = () => {

    const contactContext = useContext(ContactContext);

    useEffect(() => {
        contactContext.getContacts();
    }, []);

    return (contactContext.contacts.map(contact => (
        <ContactForm
            key={contact.id}
            contact={contact}
            onSubmit={contactContext.updateContact}
            deleteButton={contactContext.deleteContact}
            showProfileRegisters={contactContext.showProfileRegisters}
        />
    )));
};

export default ContactList;