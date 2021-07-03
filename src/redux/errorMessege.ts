import { createSlice } from "@reduxjs/toolkit";

export const errorMessageSlice = createSlice({
  name: "errorMessage",
  initialState: {
    errorMsg: null,
  },
  reducers: {
    updateErrorMessage: (state, action) => {
      state.errorMsg = action.payload;
    },
  },
});

export const { updateErrorMessage } = errorMessageSlice.actions;
export const selectError = (state: any) => state.errorMessage.errorMsg;
export default errorMessageSlice.reducer;
