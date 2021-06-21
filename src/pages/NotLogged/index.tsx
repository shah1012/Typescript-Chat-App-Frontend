import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBarNotLogged from "../../components/Navbar/NavbarNotLogged";
import SignUpPage from "./SignUp";
import Background from "../../components/Background";
import Outline from "../../components/Background/Outline";

const index: React.FC = () => {
  return (
    <>
      <NavBarNotLogged />
      <div className="backgroundDiv">
        <Background />
        <Outline />
      </div>
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
      </Switch>
    </>
  );
};

export default index;
