import React from "react";
import IMessage from "../../../Interface/IMessage";

interface Props {
  message: IMessage;
}

const index: React.FC<Props> = ({ message }) => {
  const { content } = message;
  return (
    <div className="senderMessage">
      <div className="svg">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 382 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 0L184.685 0C200.149 0 212.685 12.536 212.685 28V48.053C213.095 54.4758 257.166 65.2936 250.679 66.9023C248.516 67.4386 203.7 65.6235 181.652 64.9254L28.1937 65.9869C12.6544 66.0944 0 53.5273 0 37.9876V28C0 12.536 12.5361 0 28 0Z"
            fill="#AAD8D3"
          />
        </svg>

        <span>{content}</span>
      </div>
    </div>
  );
};

export default index;
