import React from "react";
import nopfp from "../../images/nopfp.png";

const Index: React.FC = () => {
  const users: any[] = [{}, {}, {}, {}, {}, {}]; // we will call the api with useEffect n set 6 recent users to present on the side bar

  return (
    <section className="chatSideBar">
      <main>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <img src={user.img || nopfp} alt="" />
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
};

export default Index;
