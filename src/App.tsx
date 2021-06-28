import React, { useEffect } from "react";
import "./styles/app.scss";
import Logged from "./pages/Logged";
import NotLogged from "./pages/NotLogged";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
// call the api for validation and if its wrong then ask the user to login again

function App() {
  const valid = useSelector<RootState>((state) => state.jwtToken.valid);

  useEffect(() => {
    const token = localStorage.getItem("JWT-TOKEN");
  }, []);

  return (
    <div className="App">
      <>{valid ? <Logged /> : <NotLogged />}</>
    </div>
  );
}

export default App;
