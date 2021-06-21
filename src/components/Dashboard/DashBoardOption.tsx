import React from "react";
import IDashboard from "../../Interface/IDashBoard";

interface Props {
  option: IDashboard;
}

const DashBoardOption: React.FC<Props> = ({ option }) => {
  return (
    <a href={option.path}>
      <li>
        <div>{option.svg}</div>
        <label>{option.name}</label>
      </li>
    </a>
  );
};

export default DashBoardOption;
