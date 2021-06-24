import React, { useRef } from "react";

const LoginRefs = () => [
  {
    id: 1,
    name: "Email Ref",
    ref: useRef<HTMLInputElement>(null),
  },
  {
    id: 2,
    name: "Password Ref",
    ref: useRef<HTMLInputElement>(null),
  },
];

export default LoginRefs;
