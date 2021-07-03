import React from "react";
import IMessage from "../../../Interface/IMessage";
import noPfp from "../../../images/nopfp.png";

interface Props {
  message: IMessage;
}

const index: React.FC<Props> = ({ message }) => {
  const { content, sender } = message;
  return (
    <div className="message">
      <div className="info">
        <img src={sender.pfp || noPfp} alt="" />
        <div className="name">{sender.name}</div>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default index;
