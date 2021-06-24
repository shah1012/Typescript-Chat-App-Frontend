import React, { useEffect } from "react";
import ILoginOption from "../../Interface/ILoginOption";
import { Show, Hide } from "../../misc/showNhideIcons";

interface Props {
  option: ILoginOption;
  viewState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const InputComponents = React.forwardRef<HTMLInputElement, Props>(
  ({ option, viewState }, ref) => {
    const [view, setView] = viewState;

    return (
      <div>
        <label htmlFor={option.name}>{option.name}</label>
        <input
          ref={ref}
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
    );
  }
);

export default InputComponents;
