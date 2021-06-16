import React from "react";

interface IDropDownOptions {
  id: number;
  name: string;
  path: string;
}

export const Triangle: React.FC = () => (
  <svg
    width="39"
    height="31"
    viewBox="0 0 39 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.3283 29.1499C20.5404 30.3694 18.7564 30.3694 17.9685 29.1499L1.2902 3.33535C0.430393 2.00455 1.3857 0.25 2.97008 0.25L36.3267 0.25C37.9111 0.25 38.8664 2.00455 38.0066 3.33535L21.3283 29.1499Z"
      fill="#EEEEEE"
    />
  </svg>
);

export const dropDownOptions = (): IDropDownOptions[] => [
  {
    id: 1,
    name: "Profile",
    path: "/profile",
  },
  {
    id: 2,
    name: "Archive",
    path: "/archive",
  },
  {
    id: 3,
    name: "Sign Out",
    path: "/signOut",
  },
];
