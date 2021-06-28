import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./userInfo";
import jwtToken from "./jwtToken";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    jwtToken,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
