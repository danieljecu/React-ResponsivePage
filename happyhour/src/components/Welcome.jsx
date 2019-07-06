import React from "react";
import { Link } from "react-router-dom";
const Welcome = props => {
  return (
    <React.Fragment>
      <div>Welcome</div>
      <Link to={"/app"}>To App Page</Link>
    </React.Fragment>
  );
};
export default Welcome;
