import React from "react";
import IMessage from "../../../Interface/IMessage";

interface Props {
  message: IMessage;
}

const index: React.FC<Props> = ({ message }) => {
  const { content } = message;
  return (
    <div className="message">
      <div className="svg">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 382 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M354 0H86.7381C71.2741 0 58.7381 12.5361 58.7381 28V57.3768C58.1145 65.0457 -8.86981 77.9625 0.990703 79.8834C4.27756 80.5237 72.3945 78.3564 105.905 77.5228L353.848 78.8703C369.371 78.9546 382 66.3941 382 50.8707V28C382 12.536 369.464 0 354 0Z"
            fill="#00ADB5"
            fill-opacity="0.7"
          />
        </svg>
        <span>{content}</span>
      </div>
    </div>
  );
};

export default index;
