import React from "react";
import ChatRoomBg from "../../components/ChatRoomComponents/ChatRoomBg";
import ChatHeading from "../../components/ChatRoomComponents/ChatHeading";
import ChatInput from "../../components/ChatRoomComponents/ChatInputField";
import Chat from "../../components/ChatRoomComponents/Chat";

const ChatRoom = () => {
  return (
    <main className="chatRoom ">
      <ChatRoomBg />
      <ChatHeading />
      <ChatInput />
      <Chat />
    </main>
  );
};

export default ChatRoom;
