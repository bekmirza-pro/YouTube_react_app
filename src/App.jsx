import React from "react";
import "./App.scss";

import { Switch, Route, NavLink } from "react-router-dom";

import Home from "./Pages/Home";
import Channel from "./Pages/Channel";
import Video from "./Pages/Video";

function App() {
  return (
    <>
      <nav>
        {" "}
        <NavLink to="/"></NavLink>
      </nav>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/channel" component={Channel} exact />
        <Route path="/video" component={Video} exact />
      </Switch>
    </>
  );
}

export default App;
