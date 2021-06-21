import React from "react";

import IUser from "../../Interface/IUser";
import User from "./User";

const users: IUser[] = [
  { id: 1, name: "Username" },
  { id: 2, name: "Username" },
  { id: 3, name: "Username" },
  { id: 4, name: "Username" },
  { id: 5, name: "Username" },
  { id: 6, name: "Username" },
]; // we will call the api with useEffect n set 6 recent users to present on the side bar

const Index: React.FC = () => {
  const [active, setActive] = React.useState<boolean>(false);

  return (
    <section
      tabIndex={1}
      onClick={() => {
        setActive(true);
      }}
      onBlur={() => setActive(false)}
      className={`chatSideBar ${active && "active"}`}
    >
      <main>
        {active && <h1>Recent</h1>}
        <ul>
          {users.map((user) => (
            <User active={active} key={user.id} user={user} />
          ))}
        </ul>
      </main>
    </section>
  );
};

export default Index;
