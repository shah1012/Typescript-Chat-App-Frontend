import React, { SetStateAction } from "react";
// import { sendMessage } from "../../../misc/socketFuncs";
import IMessage from "../../../Interface/IMessage";

interface Props {
  messages: IMessage[];
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>;
}

const index = ({ messages, setMessages }: Props) => {
  const messageRef = React.useRef<HTMLInputElement>(null);
  return (
    <form
      className="chatInput"
      onSubmit={(e) => {
        e.preventDefault();
        if (!messageRef.current) return;

        // sendMessage(messageRef.current.value);
        setMessages([
          ...messages,
          {
            id: 1,
            content: messageRef.current.value,
            sender: { username: "dax", id: 2 },
          },
        ]);

        messageRef.current.value = "";
      }}
    >
      <input type="text" placeholder="Message @Username" ref={messageRef} />
    </form>
  );
};

export default index;
