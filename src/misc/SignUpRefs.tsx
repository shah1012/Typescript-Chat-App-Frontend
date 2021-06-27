import React, { useRef } from "react";

const SignUpRefs = () => [
  {
    id: 1,
    name: "Email Ref",
    ref: useRef<HTMLInputElement>(null),
  },
  {
    id: 2,
    name: "Username Ref",
    ref: useRef<HTMLInputElement>(null),
  },
  {
    id: 3,
    name: "Password Ref",
    ref: useRef<HTMLInputElement>(null),
  },
];

export default SignUpRefs;
