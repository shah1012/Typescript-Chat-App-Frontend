import React from "react";
import ILoginOption from "../../Interface/ILoginOption";

interface Props {
  option: ILoginOption;
}

const InputComponents: React.FC<Props> = ({ option }) => {
  return (
    <div>
      <label htmlFor={option.name}>{option.name}</label>
      <input type={option.type} id={option.name} />
    </div>
  );
};

export default InputComponents;
