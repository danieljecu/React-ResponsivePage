import React from "react";
import "./Navigation.css";
import { withRouter } from "react-router-dom";
const pathDict = { app: "My Apps" };
const Navigation = props => {
  const getPath = string => {
    return string.split("/")[1];
  };

  const [path, setPath] = React.useState(undefined);
  React.useEffect(() => {
    setPath(getPath(props.location.pathname));
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
export default withRouter(Navigation);
