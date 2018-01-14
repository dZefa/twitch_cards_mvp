import React, { Component } from 'react';
import { connect } from 'react-redux';

import './navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div id="navbar-page" className="nav-height">
        navbar here!
      </div>
    )
  }
};

const NavState = (state) => {
  return {
    displayName: state.auth.displayName,
  };
};

export default connect(NavState)(Navbar);
