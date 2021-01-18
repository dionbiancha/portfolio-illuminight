import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Portfolio from './screens/Portfolio';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/portfolio"/>
      </Route>
      <Route exact={true} path="/portfolio" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/jobs" component={Portfolio} />
    </Switch>
  </BrowserRouter>
);

export default Routes;