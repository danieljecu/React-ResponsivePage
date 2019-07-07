import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import asyncCom from "../utils/AsyncComponent";

const Page = props => {
  const Apps = asyncCom(() => import("./AppDisplay"));
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/app" exact component={Apps} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};
export default Page;
