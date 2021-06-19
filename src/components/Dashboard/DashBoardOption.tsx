import React from "react";
import IDashboard from "../../Interface/IDashBoard";

interface Props {
  option: IDashboard;
}

const DashBoardOption: React.FC<Props> = ({ option }) => {
  return (
    <li>
      <a href={option.path}>
        <div>{option.svg}</div>
        <label>{option.name}</label>
      </a>
    </li>
  );
};

export default DashBoardOption;
