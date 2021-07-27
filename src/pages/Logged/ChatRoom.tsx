import React, { FormEvent, useEffect, useState } from "react";
import ChatRoomBg from "../../components/ChatRoomComponents/ChatRoomBg";
import ChatHeading from "../../components/ChatRoomComponents/ChatHeading";
import ChatInput from "../../components/ChatRoomComponents/ChatInputField";
import Chat from "../../components/ChatRoomComponents/Chat";

import IMessage from "../../Interface/IMessage";

const ChatRoom = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  useEffect(() => {
    // socket.on("receive-message", (message) => {
    //   setMessages([
    //     ...messages,
    //     {
    //       id: 1,
    //       content: message,
    //       sender: { username: "bob", id: 3 },
    //     },
    //   ]);
    // });
  }, []);

  return (
    <main className="chatRoom ">
      <ChatRoomBg />
      <ChatHeading />
      <ChatInput messages={messages} setMessages={setMessages} />
      <Chat messages={messages} />
    </main>
  );
};

export default ChatRoom;
