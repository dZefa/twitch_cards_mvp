import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './components/navbar/navbar.jsx';
import Routes from './routes.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { authorized, pushed } = this.props;

    return (
      <div className="fill-height" id="app">
        {
          authorized && pushed && <Navbar />
        }
        <Routes />
      </div>
    )
  }
};

const AppState = (state) => {
  return {
    authorized: state.auth.authorized,
    pushed: state.auth.pushed,
  };
};

export default connect(AppState)(App);
