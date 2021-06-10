import React, { useReducer } from "react";
import axios from "axios";

import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";

import { GET_CONTACTS, PROFILE_REGISTERS } from "./types";

const ContactState = (props) => {
  const initialState = {
    contacts: [],
    profileRegisters: []
  };


  const [state, dispatch] = useReducer(ContactReducer, initialState);

  const getContacts = async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_API_URL + "/v1/contacts/");
      const data = res.data;

      dispatch({ type: GET_CONTACTS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(process.env.REACT_APP_API_URL + "/v1/contacts/" + id);
      getContacts()
    } catch (error) {
      console.error(error);
    }
  };

  const postContact = async (contact) => {
    try {
      await axios.post(process.env.REACT_APP_API_URL + "/v1/contacts/", contact)
      getContacts()
    } catch (error) {
      console.error(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      await axios.put(process.env.REACT_APP_API_URL + "/v1/contacts/" + id, contact)
      showProfileRegisters(id)
    } catch (error) {
      console.error(error);
    }
  };

  const showProfileRegisters = async (id) => {
    try {
      const res = await axios.get(process.env.REACT_APP_API_URL + "/v1/contacts/" + id + "/profile_register");

      const data = res.data;
      dispatch({ type: PROFILE_REGISTERS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        profileRegisters: state.profileRegisters,
        getContacts,
        deleteContact,
        postContact,
        updateContact,
        showProfileRegisters
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;