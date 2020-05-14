import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './screens/Home';
import About from './screens/About';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);

export default Routes;