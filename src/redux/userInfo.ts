import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initial = {
  id: "",
  username: "",
  email: "",
  pfp: "",
};
export const userInfoSlice = createSlice({
  name: "user",
  initialState: {
    user: initial,
  },
  reducers: {
    login: (state, action) => {
      const { id, username, email, pfp } = action.payload;
      state.user = {
        id,
        username,
        email,
        pfp: pfp || "",
      };
    },
    logout: (state) => {
      state.user = initial;
    },
  },
});

export const { login, logout } = userInfoSlice.actions;

export const selectUser = (state: any) => state.user.user;

export default userInfoSlice.reducer;
