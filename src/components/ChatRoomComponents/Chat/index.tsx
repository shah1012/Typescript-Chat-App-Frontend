import React from "react";
import ReceiverMessage from "../ReceiverMessage";
import IMessage from "../../../Interface/IMessage";
import SenderMessage from "../SenderMessage";
import Message from "../Message";
import IUser from "../../../Interface/IUser";

interface Props {
  messages: IMessage[];
}

const index = ({ messages }: Props) => {
  // useEffect(() => {
  //   if (!messagesRef?.current) return;
  //   messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  // }, [messages]);

  // fetch the user from redux

  const user: IUser = {
    username: "satvik",
    id: 1,
  };

  return (
    <section className="chatMessages ">
      {messages &&
        messages.map((message) => (
          <div
            key={message.id}
            className={message.sender.username === user.username ? "owner" : ""}
          >
            <Message message={message} />
          </div>
        ))}
    </section>
  );
};

export default index;
