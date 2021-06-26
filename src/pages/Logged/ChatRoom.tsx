import React from "react";
import ChatRoomBg from "../../components/ChatRoomComponents/ChatRoomBg";
import ChatHeading from "../../components/ChatRoomComponents/ChatHeading";
import ChatInput from "../../components/ChatRoomComponents/ChatInputField";

const ChatRoom = () => {
  return (
    <main className="chatRoom ">
      <ChatRoomBg />
      <ChatHeading />
      <ChatInput />
    </main>
  );
};

export default ChatRoom;
