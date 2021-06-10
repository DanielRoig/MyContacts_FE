import { GET_CONTACTS, PROFILE_REGISTERS } from "./types";

 const ContactReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: payload,
      };
    case PROFILE_REGISTERS:
      return {
        ...state,
        profileRegisters: payload,
      };
    default:
      return state;
  }
};

export default ContactReducer;