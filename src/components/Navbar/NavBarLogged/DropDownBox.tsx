import React from "react";
import { dropDownOptions } from "../../../misc/navBarLoggedData";

const DropDownBox: React.FC = () => {
  return (
    <section className="dropDownBox">
      <ul>
        {dropDownOptions().map((option) => (
          <a key={option.id} href={option.path}>
            <li>{option.name}</li>
          </a>
        ))}
      </ul>
    </section>
  );
};

export default DropDownBox;
