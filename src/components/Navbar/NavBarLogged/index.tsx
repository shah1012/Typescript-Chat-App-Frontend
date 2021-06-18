import React, { useState } from "react";
import { Triangle } from "../../../misc/navBarLoggedData";
import nopfp from "../../../images/nopfp.png";
import DropDownBox from "./DropDownBox";
interface IAccount {
  name: string;
  profilePic: string;
}

const index: React.FC = () => {
  // By useEffect we make a api call to get the user info and display it in the account section

  // sample object

  // account = { name: "", profilePic: ""  }
  const [open, setOpen] = useState<Boolean>(false);

  //State for the drop box

  const account: IAccount = {
    name: "username",
    profilePic: "",
  };

  return (
    <nav className="navLogged">
      <section
        tabIndex={1}
        onBlur={() => {
          setOpen(false);
        }}
        onClick={() => {
          setOpen((prevState) => !prevState);
        }}
        className="myAccount"
      >
        <div className="flex imgContainer">
          <img src={account.profilePic || nopfp} />
        </div>
        <div
          onContextMenu={(e) => e.preventDefault()}
          className="flex username"
        >
          {account.name}
        </div>
        <div className={`flex svgContainer ${open && "up"}`}>
          <Triangle />
        </div>
        {open && <DropDownBox />}
      </section>
    </nav>
  );
};

export default index;
