import React from "react";
import { NavbarNotLoggedLinks } from "../../../misc/NavbarData";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="navbar-div">
      <ul className="navElements">
        {NavbarNotLoggedLinks.map((l, i) =>
          l.path === "/signup" ? (
            <li key={l.name} className="navbar-btn">
              <Link to={l.path}>{l.name}</Link>
            </li>
          ) : (
            <li key={l.name} className="navbar-li">
              <Link to={l.path} style={{ color: "black" }}>
                {l.name}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default index;
