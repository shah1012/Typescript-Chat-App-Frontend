import React from "react";
import IDashboard from "../../Interface/IDashBoard";
import { Link } from "react-router-dom";

interface Props {
  option: IDashboard;
}

const DashBoardOption: React.FC<Props> = ({ option }) => {
  return (
    <Link to={option.path}>
      <li>
        <div>{option.svg}</div>
        <label>{option.name}</label>
      </li>
    </Link>
  );
};

export default DashBoardOption;
