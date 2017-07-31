import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import App from "../src/App";
import Select from "../scr//component/Select";


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <Route path="favorites" component={Select} />
    <IndexRoute component={App} />
    </Route>
  </Router>
);

export default routes;
