import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    name: "",
    email: "",
  },
  reducers: {
    fetchData: (state, action) => {
      const { email, name } = action.payload;
      state.email = email;
      state.name = name;
    },
  },
});

export default userInfoSlice.reducer;
export const { fetchData } = userInfoSlice.actions;
