import React from "react";

const index = () => {
  const messageRef = React.useRef<HTMLInputElement>(null);
  return (
    <form
      className="chatInput"
      onSubmit={(e) => {
        e.preventDefault();
        if (!messageRef.current) return;
        messageRef.current.value = "";
      }}
    >
      <input type="text" placeholder="Message @Username" ref={messageRef} />
    </form>
  );
};

export default index;
