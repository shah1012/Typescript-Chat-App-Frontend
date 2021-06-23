import React, { useRef } from "react";
import loginOptions from "../../misc/loginOptions";
import LoginRefs from "../../misc/LoginRefs";
import InputComponents from "../../components/Login/InputComponents";
import Background from "../../components/Background";

const Login = () => {
  const [view, setView] = React.useState<boolean>(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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
                  ref={LoginRefs().find((lRef) => lRef.id === option.id)?.ref}
                />
              </li>
            ))}
          </ul>
          <button>Login</button>
        </main>
      </section>
    </>
  );
};

export default Login;
