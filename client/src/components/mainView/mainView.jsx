import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './mainView.css';

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
      <div id="main-view" className="norm-height">
        <div className="row">
          <SideNav />
          <div className="col" id="main-routes">
            <Routes />
          </div>
        </div>
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
