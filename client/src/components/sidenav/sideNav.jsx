import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import './sideNav.css';

class SideNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { actions } = this.props;

    return (
      <div className="col" id="side-nav">
        <div>
          <p><Link to='/main'>HOME</Link></p>
          <p><Link to='/main/acc'>ACCOUNT</Link></p>
        </div>
      </div>
    )
  }
};

export default withRouter(connect()(SideNav));
