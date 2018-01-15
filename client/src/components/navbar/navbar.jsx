import React, { Component } from 'react';
import { connect } from 'react-redux';

import './navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { displayName } = this.props;

    return (
      <div id="navbar-page" className="nav-height">
        <div className="row align-items-center fill-height">
          <div className="col" id="navbar-title">
            <h3>{displayName}</h3>
          </div>
        </div>
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
