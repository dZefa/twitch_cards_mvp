import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import './sideNav.css';

class SideNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { actions, logo } = this.props;

    return (
      <div className="col" id="side-nav">
        <div>
          <img src={logo} id="side-logo" />
          <p><Link to='/main'>HOME</Link></p>
          <p><Link to='/main/acc'>ACCOUNT</Link></p>
        </div>
      </div>
    )
  }
};

const SideState = (state) => {
  return {
    logo: state.auth.logo,
  };
};

export default withRouter(connect(SideState)(SideNav));
