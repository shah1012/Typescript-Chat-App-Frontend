import React from "react";
import signUpOptions from "../../misc/signUpOptions";
import InputComponents from "../../components/SignUp/InputComponents";
import Background from "../../components/Background";
import Outline from "../../components/Background/Outline";

const index = () => {
  const [view, setView] = React.useState<boolean>(false);
  return (
    <>
      <section className="signUp">
        <main>
          <h2>XYZ</h2>
          <h4>Create an account to use our amazing benefits</h4>
          <ul>
            {signUpOptions.map((option) => (
              <li key={option.id}>
                <InputComponents option={option} viewState={[view, setView]} />
              </li>
            ))}
          </ul>
          <button>Create Account</button>
        </main>
      </section>
    </>
  );
};

export default index;
