import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const index = () => {
  const { username, pfp, bio }: any = useSelector<RootState>(
    (state) => state.userInfo.user
  );

  return (
    <main className="userProfile">
      <section className="left">
        <h1 className="username">{username}</h1>
        <div className="bio">{bio}</div>
        <img src={pfp} alt="User profile pic" />
      </section>
      <section className="right">
        <h1>Feed</h1>
        <section className="feed"></section>
      </section>
    </main>
  );
};

export default index;
