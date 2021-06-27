import React from "react";
import { Route, Switch } from "react-router-dom";
import ChatSideBar from "../../components/ChatSideBar/Index";
import Dashboard from "../../components/Dashboard/Index";
import NavBarLogged from "../../components/Navbar/NavBarLogged/index";
import ChatRoom from "./ChatRoom";

const index: React.FC = () => {
  return (
    <>
      <NavBarLogged />

      <Dashboard />
      <Switch>
        <Route path="/" exact>
          <ChatSideBar />
        </Route>
        <Route path="/chatroom">
          <ChatRoom />
        </Route>
      </Switch>
    </>
  );
};

export default index;
