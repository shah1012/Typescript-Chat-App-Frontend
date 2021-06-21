import React from "react";
import { Route, Switch } from "react-router-dom";
import ChatSideBar from "../../components/ChatSideBar/Index";
import Dashboard from "../../components/Dashboard/Index";
import NavBarLogged from "../../components/Navbar/NavBarLogged/index";

const index: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <NavBarLogged />
          <ChatSideBar />
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
};

export default index;
