import React from "react";
import ReceiverMessage from "../ReceiverMessage";
import IMessage from "../../../Interface/IMessage";
import SenderMessage from "../SenderMessage";
import Message from "../Message";
import IUser from "../../../Interface/IUser";

const index = () => {
  // useEffect(() => {
  //   if (!messagesRef?.current) return;
  //   messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  // }, [messages]);

  // fetch the user from redux

  const user: IUser = {
    name: "satvik",
    id: 1,
  };

  const messages: IMessage[] = [
    {
      id: 1,
      content: "Hey buddy",
      sender: { name: "username", id: 2 },
    },
    {
      id: 2,
      content: "This is a bigger message",
      sender: { name: "satvik", id: 1 },
    },
    {
      id: 3,
      content: "This is a bigger message than the normal one",
      sender: { name: "satvik", id: 1 },
    },
    {
      id: 4,
      content: "I sent the message",
      sender: { name: "satvik", id: 1 },
    },
  ];

  return (
    <section className="chatMessages ">
      {messages &&
        messages.map((message) => (
          <div
            key={message.id}
            className={message.sender.name === user.name ? "owner" : ""}
          >
            <Message message={message} />
          </div>
        ))}
    </section>
  );
};

export default index;
