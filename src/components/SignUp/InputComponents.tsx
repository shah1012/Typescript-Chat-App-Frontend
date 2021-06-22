import React from "react";
import ISignUpOption from "../../Interface/ISignUpOption";
import { Show, Hide } from "../../misc/showNhideIcons";

interface Props {
  option: ISignUpOption;
  viewState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const InputComponents: React.FC<Props> = ({ option, viewState }) => {
  const [view, setView] = viewState;

  return (
    <div>
      <label htmlFor={option.name}>{option.name}</label>
      <div className="relative">
        <input
          placeholder={option.placeholder}
          type={
            option.type === "password"
              ? view
                ? "text"
                : "password"
              : option.type
          }
          id={option.name}
        />
        <div
          onClick={(e) => {
            setView((prevState) => !prevState);
          }}
          className="svgContainer absolute pointer "
        >
          {option.type === "password" ? view ? <Show /> : <Hide /> : ""}
        </div>
      </div>
    </div>
  );
};

export default InputComponents;
