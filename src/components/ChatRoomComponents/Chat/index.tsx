import React from "react";
import ReceiverMessage from "../ReceiverMessage";
import IMessage from "../../../Interface/IMessage";
import SenderMessage from "../SenderMessage";

const index = () => {
  // useEffect(() => {
  //   if (!messagesRef?.current) return;
  //   messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  // }, [messages]);

  const messages: IMessage[] = [
    {
      id: 1,
      content: "Hey buddy",
      sender: "other",
    },
    {
      id: 2,
      content: "This is a bigger message",
      sender: "other",
    },
    {
      id: 3,
      content: "This is a bigger message than the normal one",
      sender: "other",
    },
    {
      id: 4,
      content: "I sent the message",
      sender: "user",
    },
  ];

  return (
    <section className="chatMessages ">
      {messages &&
        messages.map((message) =>
          message.sender === "user" ? (
            <SenderMessage key={message.id} message={message} />
          ) : (
            <ReceiverMessage key={message.id} message={message} />
          )
        )}
    </section>
  );
};

export default index;
