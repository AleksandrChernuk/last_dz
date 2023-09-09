import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

export const token = {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unsetToken() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registrationUser = async (data) => {
  try {
    const response = await axios.post("/auth/registration", data);
    if (!response.status) {
      console.log(response.statusText);
    }
    token.setToken(response.data.accessToken);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (data) => {
  try {
    const response = await axios.post("/auth/login", data);
    if (!response.status) {
      console.log(response.statusText);
    }
    token.setToken(response.data.accessToken);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllContacts = async () => {
  try {
    const response = await axios.get("/contacts");
    if (!response.status) {
      console.log(response.statusText);
    }
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const logOutUser = async () => {
  try {
    await axios.post("/auth/logout", { withCredentials: true });
    token.unsetToken();
  } catch (error) {
    console.log("Ошибка");
  }
};

export const refresh = async () => {

  try {
    const { data } = await axios.get("/auth/refresh", { withCredentials: true });
    token.setToken(data.accessToken);
    console.log(data);
    return data;
  } catch (error) {
    console.log("Ошибка");
  }
};
