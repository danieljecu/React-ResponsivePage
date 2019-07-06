import React from "react";
import Header from "../components/Header";
import Navi from "../components/Navigation";
import AppDisplay from "../components/AppDisplay";
import Welcome from "../components/Welcome";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const Location = { app: "Apps" };
const Page = props => {
  return (
    <React.Fragment>
      <Header />
      <Navi />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/app" exact component={AppDisplay} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};
export default Page;
