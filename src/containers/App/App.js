/*
 * use container components to connect stateless components with redux
 */
import React from 'react';

const App = ({ children }) => (
  <div>
    {children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
