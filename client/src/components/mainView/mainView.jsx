import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../../action/authAction';

import SideNav from '../sidenav/sideNav.jsx';
import Routes from './mainViewRoutes.jsx';

class MainView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {} = this.props;

    return (
      <div>
        <SideNav />
        <Routes />
      </div>
    )
  }
};

const MainState = (state) => {
  return {
    authorized: state.auth.authorized,
  }
};

const MainDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch),
  }
};

export default connect(MainState, MainDispatch)(MainView);
