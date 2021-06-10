import React, { useContext, useEffect } from 'react';
import ContactContext from '../../context/ContactContext'
import NewContactForm from '../molecules/NewContactForm'

const NewContact = () => {

    const contactContext = useContext(ContactContext);

    useEffect(() => {
        contactContext.getContacts();
    }, []);

    return (
        <NewContactForm
            onSubmit={contactContext.postContact}
        />
    );
};

export default NewContact;