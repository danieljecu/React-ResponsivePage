import React from "react";
import "./Navigation.css";

const pathDict = { app: "My Apps" };
const Navigation = props => {
  const [path, setPath] = React.useState(undefined);
  React.useEffect(() => {
    setPath(window.location.href.split("localhost:3000/")[1]);
  }, []);
  return (
    <React.Fragment>
      <div id="navi-container">
        <React.Fragment>
          <div id="navi-link">
            <span>Dashboard</span>
            <span>></span>
            {path && <span>{pathDict[path]}</span>}
          </div>
          <div id="navi-current">{path && <h3>{pathDict[path]}</h3>}</div>
        </React.Fragment>
      </div>
    </React.Fragment>
  );
};
export default Navigation;
