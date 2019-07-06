import React from "react";
import "./Navigation.css";
const Navigation = props => {
  return (
    <React.Fragment>
      <div id="navi-container">
        <div id="navi-link">
          <span>Dashboard</span>
          <span>></span>
          <span>Apps</span>
        </div>
        <div id="navi-current">
          <h3>My Apps</h3>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Navigation;
