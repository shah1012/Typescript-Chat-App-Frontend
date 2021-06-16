import React from "react";
import { NavbarNotLoggedLinks } from "../../../misc/NavbarData";
import "../../../styles/navbarNotLogged.scss";

const index = () => {
  return (
    <div className="navbar-div">
      <ul className="navElements">
        {NavbarNotLoggedLinks.map((l, i) => {
          l.name === "Sign out" ? return (
            <li className="navbar-li">
              <a href={l.path}>{l.name}</a>
            </li>
          ) : 
            return(
              <li className="navbar-li">
              <a href={l.path}>{l.name}</a>
            </li>
            )
        })}
      </ul>
    </div>
  );
};

export default index;
