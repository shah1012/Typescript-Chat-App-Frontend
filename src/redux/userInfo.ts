import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import noPfp from "../images/nopfp.png";
import IUser from "../Interface/IUser";

const initial: IUser = {
  id: "",
  username: "",
  email: "",
  pfp: "",
  bio: "",
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
        pfp: pfp || noPfp,
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
