import axios from "axios";
import { ErrorMessage } from "formik";

export const addContact = async (contactData) => {
  try {
    const response = await axios.post("/contacts/add", contactData);

    return response.data;
  } catch (e) {
    console.log(e.message);
    throw new ErrorMessage(e.code);
  }
};

export const deleteContact = async (id) => {
  try {
    console.log(id);
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  } catch (e) {
    throw new ErrorMessage("не");
  }
};
