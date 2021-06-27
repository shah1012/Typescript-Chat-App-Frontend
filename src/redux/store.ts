import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./userInfo";

export default configureStore({
  reducer: {
    userInfo: userInfoReducer,
  },
});
