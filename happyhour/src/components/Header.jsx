import React from "react";
import "./header.css";

const Header = props => {
  return (
    <div id="header-container">
      <div id="header-logo-container">
        <img id="header-logo" src={"../assets/logo.svg"} alt="Logo" />
      </div>
      <div id="header-between" />
      <div id="header-menu-container">
        <img id="header-menu" src={"../assets/menu-dash.svg"} alt="Logo" />
      </div>
      <div id="header-profile-container">
        <img id="header-profile" src={"../assets/profile.svg"} alt="Logo" />
      </div>
    </div>
  );
};
export default Header;
