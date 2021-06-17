import React, { useState } from "react";
import "./styles/app.scss";
import NavbarNotLogged from "./components/Navbar/NavbarNotLogged";
import NavBarLogged from "./components/Navbar/NavBarLogged/index";

function App() {
  return (
    <div className="App">
      <NavbarNotLogged />
      <NavBarLogged />
    </div>
  );
}

export default App;
