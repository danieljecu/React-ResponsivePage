import React from "react";
import AppCards from "../components/AppCards";
import Navi from "../components/Navigation";
import axios from "axios";
import "./AppsDisplay.css";
const AppDisplay = props => {
  const [appList, setAppList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const getData = () => {
    return axios.get("data.json");
  };
  React.useEffect(() => {
    getData()
      .then(res => {
        setLoading(false);
        setAppList(res.data[0].data.cards);
      })
      .catch(e => console.error(e));
  }, []);
  return (
    <React.Fragment>
      <Navi />

      <div id="Apps-display-container" className="fade-in">
        {loading ? (
          <React.Fragment>
            <div className="Apps-loading">
              <img
                className="Apps-loading"
                src={"../assets/loading.svg"}
                alt="Logo"
              />
              <span style={{ margin: "0 auto" }}>If slow 3G</span>
            </div>
          </React.Fragment>
        ) : (
          appList.map((i, index) => {
            return <AppCards key={index} data={i} className="AppCards" />;
          })
        )}
      </div>
    </React.Fragment>
  );
};
export default AppDisplay;
