import React, { useEffect } from "react";
import axios from "axios";
import signUpOptions from "../../misc/signUpOptions";
import InputComponents from "../../components/SignUp/InputComponents";
import { LOGIN_URL, SIGNUP_URL } from "../../misc/BaseUrls";
import SignUpRefs from "../../misc/SignUpRefs";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { selectError, updateErrorMessage } from "../../redux/errorMessege";

const index = () => {
  const [view, setView] = React.useState<boolean>(false);
  const arr = SignUpRefs();
  let location = window.location;
  let err = useSelector(selectError);
  const dispatch = useAppDispatch();

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
      .catch((err) => {
        if (err.response?.data) {
          if (Array.isArray(err.response.data)) {
            let newErrMsg = "";
            err.response.data.forEach((em: string) => {
              newErrMsg += em + ", \n";
            });

            dispatch(updateErrorMessage(newErrMsg));
            setTimeout(() => {
              dispatch(updateErrorMessage(""));
            }, 5000);
          } else {
            dispatch(updateErrorMessage(err.response.data));
            setTimeout(() => {
              dispatch(updateErrorMessage(""));
            }, 5000);
          }
        }
      });
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
          <p className="errorMsg">{err}</p>
        </main>
      </section>
    </>
  );
};

export default index;
