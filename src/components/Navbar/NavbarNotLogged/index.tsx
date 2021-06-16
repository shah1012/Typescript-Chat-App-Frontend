import React from "react";
import { NavbarNotLoggedLinks } from "../../../misc/NavbarData";

const index = () => {
  return (
    <div className="navbar-div">
      <ul className="navElements">
        {NavbarNotLoggedLinks.map((l, i) => {
          return l.name === "Sign out" ? (
            <li className="navbar-li">
              <a href={l.path}>{l.name}</a>
            </li>
          ) : (
            <li className="navbar-li">
              <a href={l.path}>{l.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default index;
