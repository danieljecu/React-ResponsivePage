import React from "react";

import { Link } from "react-router-dom";
const Welcome = props => {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Welcome</h1>
      <p style={{ textAlign: "center" }}>
        <Link
          id="Welcome-jump"
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: "red",
            textShadow: " 1px 1px white, -1px -1px #444"
          }}
          to={"/app"}
        >
          To App Page
        </Link>
      </p>
    </React.Fragment>
  );
};
export default Welcome;
