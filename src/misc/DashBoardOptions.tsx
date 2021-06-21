import IDashboard from "../Interface/IDashBoard";
import React from "react";

const homeIcon = () => (
  <svg
    width="42"
    height="39"
    viewBox="0 0 42 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.42105 22.5833H1L22.0526 1L41 22.5833H34.6842M9.42105 22.5833V38H34.6842V22.5833M9.42105 22.5833H34.6842"
      stroke="#AAAAAA"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const searchIcon = () => (
  <svg
    className="searchIcon"
    width="39"
    height="37"
    viewBox="0 0 39 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.8058 22.0399C20.3859 26.293 14.1784 26.9787 9.94091 23.5714C5.70344 20.1641 5.04067 13.954 8.46057 9.70094C11.8805 5.44783 18.088 4.76217 22.3254 8.16949C26.5629 11.5768 27.2257 17.7868 23.8058 22.0399ZM23.8058 22.0399L31.5322 28.6886"
      stroke="#AAAAAA"
      stroke-width="2"
    />
  </svg>
);

const chatIcon = () => (
  <svg
    width="37"
    height="28"
    viewBox="0 0 37 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 10C1 18 13.6634 17.5 22.5 17.5C28.6667 18.5 33.2 21.3 34 26.5C38.8 20.1 34 15 30.5 11.5C30.5 4 25.8366 1 17 1C8.16344 1 1 2 1 10Z"
      stroke="#AAAAAA"
      stroke-width="2"
    />
  </svg>
);

const dashboardOptions: IDashboard[] = [
  {
    id: 1,
    name: "Home",
    path: "/home",
    svg: homeIcon(),
  },
  {
    id: 2,
    name: "Search",
    path: "/search",
    svg: searchIcon(),
  },
  {
    id: 3,
    name: "Chat",
    path: "/chat",
    svg: chatIcon(),
  },
];

export default dashboardOptions;
