import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export const userInfoSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userInfoSlice.actions;

export const selectUser = (state: any) => state.user.user;

export default userInfoSlice.reducer;
