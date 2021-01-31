import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Rsp from "./pages/rsp";

export default class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/rsp" component={Rsp} />
      </BrowserRouter>
    );
  }
}