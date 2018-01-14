import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
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
