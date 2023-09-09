import { createSlice } from "@reduxjs/toolkit";
import { allContacts, createContact, removeContact } from "./operation";

const contactSlice = createSlice({
  name: "contactList",

  initialState: {
    isLoading: false,
    error: null,
    contacts: [],
  },

  extraReducers: {
    [createContact.fulfilled]: (state, actions) => {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(actions.payload);
    },
    [createContact.rejected]: (state, actions) => {
      state.isLoading = false;
      state.error = actions.error.message;
    },
    [allContacts.fulfilled]: (state, actions) => {
      state.isLoading = false;
      state.contacts = actions.payload;
    },
    [allContacts.rejected]: (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    },
    [removeContact.fulfilled]: (state, actions) => {
      const index = state.contacts.findIndex((contact) => contact.id === actions.payload.id);
      state.contacts.splice(index, 1);
    },
  },
});

export const contactReducer = contactSlice.reducer;
