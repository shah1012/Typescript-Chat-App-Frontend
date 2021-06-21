import ILoginOption from "../Interface/ILoginOption";

const loginOptions: ILoginOption[] = [
  {
    id: 1,
    name: "Email",
    placeholder: "Enter your email",
    type: "text",
  },
  {
    id: 2,
    name: "Password",
    placeholder: "Enter your password",
    type: "password",
  },
];

export default loginOptions;
