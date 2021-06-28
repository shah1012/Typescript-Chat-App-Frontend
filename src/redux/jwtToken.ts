import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export interface IJwtInterface {
  token: string;
  valid: boolean;
}

export const jwtTokenSlice = createSlice({
  name: "jwtToken",
  initialState: {
    token: "",
    valid: false,
  },
  reducers: {
    setToken: (state, action) => {
      const { token } = action.payload;
      state.token = token;
      state.valid = true;
    },
  },
});
export default jwtTokenSlice.reducer;
export const { setToken } = jwtTokenSlice.actions;
