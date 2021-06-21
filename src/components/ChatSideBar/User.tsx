import React from "react";
import IUser from "../../Interface/IUser";
import nopfp from "../../images/nopfp.png";

interface Props {
  user: IUser;
  active: boolean;
}

const User: React.FC<Props> = ({ active, user }) => {
  return (
    <li>
      <img src={user.pfp || nopfp} alt="" />
      {active && <label>{user.name}</label>}
    </li>
  );
};

export default User;
