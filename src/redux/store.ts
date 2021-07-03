import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./userInfo";
import errorMessageReducer from "./errorMessege";
import jwtToken from "./jwtToken";
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    jwtToken,
    errorMessage: errorMessageReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
