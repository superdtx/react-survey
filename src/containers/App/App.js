/*
 * use container components to connect stateless components with redux
 */
import React from 'react';

const App = props => (
  <div>
    {props.children}
  </div>
);

export default App;
