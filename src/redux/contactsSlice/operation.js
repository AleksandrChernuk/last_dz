import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllContacts } from "../../api/apiUser";
import { addContact, deleteContact } from "../../api/apiContacts";

export const allContacts = createAsyncThunk(
  "contactList/allContacts",

  async (_, thunkAPI) => {
    try {
      const response = await getAllContacts();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const createContact = createAsyncThunk(
  "contactList/createContact",

  async (data, thunkAPI) => {
    try {
      const response = await addContact(data);

      return response;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
export const removeContact = createAsyncThunk(
  "contactList/removeContact",

  async (id, thunkAPI) => {
    try {
      const response = await deleteContact(id);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
