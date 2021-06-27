import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBarNotLogged from "../../components/Navbar/NavbarNotLogged";
import SignUpPage from "./SignUp";
import LoginPage from "./Login";
import Background from "../../components/Background";
import Outline from "../../components/Background/Outline";

const index: React.FC = () => {
  return (
    <>
      <NavBarNotLogged />
      <aside className="backgroundDiv">
        {/* <Background /> */}
        <Outline />
      </aside>
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/signUp">
          <SignUpPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </>
  );
};

export default index;
