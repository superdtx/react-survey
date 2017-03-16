/*
 * entry point of frontend application
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import createStore from './redux/create';
import getRoutes from './routes';
import mockSurveys from './data/mockdata';

const initialState = {
  surveys: {
    mockSurveys,
    currActive: 0,
  },
};
const store = createStore(initialState);
const routes = getRoutes();
const component = (
  <Router history={browserHistory}>
    {routes}
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    {component}
  </Provider>,
  document.getElementById('root'),
);
