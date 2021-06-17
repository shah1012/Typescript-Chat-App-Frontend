import React from "react";
import ISignUpOption from "../../Interface/ISignUpOption";

interface Props {
  option: ISignUpOption;
}

const InputComponents: React.FC<Props> = ({ option }) => {
  return (
    <div>
      <label htmlFor={option.name}>{option.name}</label>
      <input type="text" id={option.name} />
    </div>
  );
};

export default InputComponents;
