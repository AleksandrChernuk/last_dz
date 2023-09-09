import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, logOut, refreshUser } from "./operation";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { email: null, name: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },

  extraReducers: {
    [registerUser.pending]: (state, actions) => {
      state.isLoggedIn = false;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, actions) => {
      state.isLoggedIn = true;
      state.user.email = actions.payload.email;
      state.token = actions.payload.accessToken;
      state.user.name = actions.payload.name;
    },
    [registerUser.rejected]: (state, actions) => {
      state.isLoggedIn = false;
      state.error = actions.payload;
    },
    [logOut.fulfilled](state) {
      state.user = { email: null, name: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, actions) {
      state.user.email = actions.payload.user.email;
      state.user.fullName = actions.payload.user.name;
      state.token = actions.payload.accessToken;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
    [loginUser.pending]: (state, actions) => {
      state.isLoggedIn = false;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, actions) => {
      state.isLoggedIn = true;
      state.user.email = actions.payload.user.email;
      state.token = actions.payload.accessToken;
      state.user.name = actions.payload.user.name;
    },
    [loginUser.rejected]: (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
