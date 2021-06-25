import React from "react";
import axios from "axios";
import signUpOptions from "../../misc/signUpOptions";
import InputComponents from "../../components/SignUp/InputComponents";
import { LOGIN_URL, SIGNUP_URL } from "../../misc/BaseUrls";
import SignUpRefs from "../../misc/SignUpRefs";

const index = () => {
  const [view, setView] = React.useState<boolean>(false);
  const arr = SignUpRefs();
  let location = window.location;

  const handleClick = () => {
    const eRef = arr[0].ref?.current?.value;
    const uRef = arr[1].ref?.current?.value;
    const pRef = arr[2].ref?.current?.value;

    axios
      .post(SIGNUP_URL, {
        username: uRef,
        email: eRef,
        password: pRef,
      })
      .then((data) => {
        location.assign("/login");
      })
      .catch((err) => alert("Couldn't make the user"));
  };

  return (
    <>
      <section className="signUp">
        <main>
          <h2>XYZ</h2>
          <h4>Create an account to use our amazing benefits</h4>
          <ul>
            {signUpOptions.map((option) => (
              <li key={option.id}>
                <InputComponents
                  option={option}
                  viewState={[view, setView]}
                  ref={arr.find((lRef) => lRef.id === option.id)?.ref}
                />
              </li>
            ))}
          </ul>
          <button onClick={handleClick}>Create Account</button>
        </main>
      </section>
    </>
  );
};

export default index;
