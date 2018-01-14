import React, { Component } from 'react';

import Routes from './routes.jsx';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container-fluid">
        {/* Navigation bar goes here */}
        <Routes />
      </div>
    )
  }
};

export default App;
