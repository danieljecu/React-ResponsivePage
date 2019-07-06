import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppDisplay from "./AppDisplay";
import Welcome from "../components/Welcome";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Page = props => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/app" exact component={AppDisplay} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};
export default Page;
