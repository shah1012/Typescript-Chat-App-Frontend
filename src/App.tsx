import React, { useEffect } from "react";
import "./styles/app.scss";
import Logged from "./pages/Logged";
import NotLogged from "./pages/NotLogged";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./redux/store";
import validateFn from "./misc/validateFn";
import { login } from "./redux/userInfo";
import { setToken } from "./redux/jwtToken";

// call the api for validation and if its wrong then ask the user to login again

function App() {
  const valid = useSelector<RootState>((state) => state.jwtToken.valid);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = localStorage.getItem("JWT-TOKEN");
    if (!token) return;
    validateFn(token)
      .then((payload) => {
        if (!payload) return;

        const [token, userInfo] = payload;
        dispatch(setToken({ token }));
        dispatch(login(userInfo));
      })
      .catch((err) => console.dir(err));
  }, []);

  return (
    <div className="App">
      <>{valid ? <Logged /> : <NotLogged />}</>
    </div>
  );
}

export default App;
