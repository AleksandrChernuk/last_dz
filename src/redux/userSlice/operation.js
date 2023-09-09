import { createAsyncThunk } from "@reduxjs/toolkit";
import { logOutUser, refresh, registrationUser, userLogin } from "../../api/apiUser";

export const registerUser = createAsyncThunk(
  "user/registerUser",

  async (data, thunkAPI) => {
    try {
      const response = await registrationUser(data);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  "user/loginUser",

  async (data, thunkAPI) => {
    try {
      const response = await userLogin(data);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const logOut = createAsyncThunk("user/logOut", async (_, thunkAPI) => {
  try {
    const response = await logOutUser();
    return response;
  } catch (error) {
    console.log("Ошибка");
    throw error;
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",

  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    console.log(persistedToken);

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      const response = await refresh();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
