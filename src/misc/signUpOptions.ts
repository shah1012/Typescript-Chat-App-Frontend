import ISignUpOption from "../Interface/ISignUpOption";

const signUpOptions: ISignUpOption[] = [
  {
    id: 1,
    name: "Email",
    placeholder: "Email",
    type: "text",
  },
  {
    id: 2,
    name: "Username",
    placeholder: "Username",
    type: "text",
  },
  {
    id: 3,
    name: "Password",
    placeholder: "Password",
    type: "password",
  },
];

export default signUpOptions;
