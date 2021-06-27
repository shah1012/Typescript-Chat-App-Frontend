import React from "react";
import infoIcon from "../../../images/infoIcon.png";

// we call an api to get the user info on chat load. and use it here.

type ChatUser = { name: string };

const index = () => {
  const chatUser: ChatUser = { name: "Username" };
  return (
    <nav className="chatHeading">
      <div className="username">{chatUser.name}</div>
      <div className="info">
        <img src={infoIcon} alt="Info" />
      </div>
    </nav>
  );
};

export default index;
