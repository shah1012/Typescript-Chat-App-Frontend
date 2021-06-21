import React from "react";
import loginOptions from "../../misc/loginOptions";
import InputComponents from "../../components/Login/InputComponents";
import Background from "../../components/Background";

const Login = () => {
  return (
    <>
      <section className="login">
        <main>
          <h2>XYZ</h2>
          <h4>Log in to an existing account to start chatting</h4>
          <ul>
            {loginOptions.map((option) => (
              <li key={option.id}>
                <InputComponents option={option} />
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
