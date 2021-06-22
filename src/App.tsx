import React from "react";
import "./styles/app.scss";
import Logged from "./pages/Logged";
import NotLogged from "./pages/NotLogged";

const token = localStorage.getItem("JWT-TOKEN");

// call the api for validation and if its wrong then ask the user to login again

const tokenValidation = false;

function App() {
  return (
    <div className="App">
      <>{tokenValidation ? <Logged /> : <NotLogged />}</>
    </div>
  );
}

export default App;
