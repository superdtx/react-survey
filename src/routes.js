/*
 * routes be passed to entry point of frontend
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App/App';
import Home from './containers/Home/Home';
import NotFound from './containers/NotFound/NotFound';

const Routes = () => (
  <Route path="/" component={App}>
    { /* main route */ }
    <IndexRoute component={Home} />
    { /* routes: keep in alphabetical order */ }
    { /* catch all routes */ }
    <Route path="*" component={NotFound} status={404} />
  </Route>
);
export default Routes;
