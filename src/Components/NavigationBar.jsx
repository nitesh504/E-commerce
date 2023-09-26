import React from "react";
import "./NavigationBar.Scss";

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <nav>
        <img className="logo-image" src="./logo.png" alt="logoEcommerce" />
        <input type="search" />
      </nav>
    </div>
  );
};

export default NavigationBar;
