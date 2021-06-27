import React from "react";
import { dropDownOptions } from "../../../misc/navBarLoggedData";
import { Link } from "react-router-dom";

const DropDownBox: React.FC = () => {
  return (
    <section className="dropDownBox">
      <ul>
        {dropDownOptions().map((option) => (
          <Link key={option.id} to={option.path}>
            <li>{option.name}</li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default DropDownBox;
