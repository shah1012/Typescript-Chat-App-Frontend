import React from "react";
import "./styles/app.scss";
import NavbarNotLogged from "./components/Navbar/NavbarNotLogged";
import NavBarLogged from "./components/Navbar/NavBarLogged/index";
import SignUpPage from "./pages/SignUp";
import ChatSideBar from "./components/ChatSideBar/Index";

function App() {
  return (
    <div className="App">
      <NavbarNotLogged />
      <SignUpPage />
      {/* <NavBarLogged /> */}
      {/* <ChatSideBar /> */}
    </div>
  );
}

export default App;
