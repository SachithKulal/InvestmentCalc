import React from "react";
import headerImg from "../assets/investment-calculator-logo.png";

export const Header = () => {
  return (
    <header id="header">
      <img src={headerImg} alt="react Investment Calculator"></img>
      <h1>Investment Calculator</h1>
    </header>
  );
};
