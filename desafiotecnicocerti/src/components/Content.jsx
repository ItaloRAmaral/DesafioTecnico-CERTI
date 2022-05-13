import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/home";
import Pilots from "../Pages/pilots";
import Starships from "../Pages/starships";

class Content extends React.Component {
  render() {
    return (
      <main className="Content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pilots" component={Pilots} />
          <Route exact path="/starships" component={Starships} />
        </Switch>
      </main>
    );
  }
}

export default Content;