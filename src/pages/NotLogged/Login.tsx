import React, { useRef } from "react";
import axios from "axios";
import loginOptions from "../../misc/loginOptions";
import LoginRefs from "../../misc/LoginRefs";
import InputComponents from "../../components/Login/InputComponents";
import Background from "../../components/Background";
import { LOGIN_URL } from "../../misc/BaseUrls";

const Login = () => {
  const [view, setView] = React.useState<boolean>(false);
  const arr = LoginRefs();

  const handleClick = () => {
    let eRef = arr[0].ref?.current?.value;
    let pRef = arr[1].ref?.current?.value;

    if (eRef || pRef !== null) {
      axios
        .post(LOGIN_URL, {
          email: eRef,
          password: pRef,
        })
        .then((data) => console.log(data))
        .catch((err) => console.dir(err));
    }
  };

  return (
    <>
      <section className="login">
        <main>
          <h2>XYZ</h2>
          <h4>Log in to an existing account to start chatting</h4>
          <ul>
            {loginOptions.map((option) => (
              <li key={option.id}>
                <InputComponents
                  option={option}
                  viewState={[view, setView]}
                  ref={arr.find((lRef) => lRef.id === option.id)?.ref}
                />
              </li>
            ))}
          </ul>
          <button onClick={handleClick}>Login</button>
        </main>
      </section>
    </>
  );
};

export default Login;
