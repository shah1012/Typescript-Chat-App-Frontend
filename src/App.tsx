import React from "react";
import "./styles/app.scss";
import NavbarNotLogged from "./components/Navbar/NavbarNotLogged";
import NavBarLogged from "./components/Navbar/NavBarLogged/index";
import SignUpPage from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <NavbarNotLogged />
      {/* <NavBarLogged /> */}
      <SignUpPage />
    </div>
  );
}

export default App;
