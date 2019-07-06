import React from "react";
import AppCards from "../components/AppCards";
import Navi from "../components/Navigation";
import axios from "axios";
import "./AppsDisplay.css";
const AppDisplay = props => {
  const [appList, setAppList] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("data.json")
      .then(res => {
        setAppList(res.data[0].data.cards);
      })
      .catch(e => console.error(e));
  }, []);
  return (
    <React.Fragment>
      <Navi />

      <div id="Apps-display-container" className="fade-in">
        {appList.map((i, index) => {
          return <AppCards key={index} data={i} />;
        })}
      </div>
    </React.Fragment>
  );
};
export default AppDisplay;
