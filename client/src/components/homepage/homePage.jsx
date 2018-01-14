import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './homePage.css';

import * as authActions from '../../action/authAction';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { displayName, actions } = this.props;
    
    return (
      <div id="home-page">
        Welcome back Coomahndah, {displayName}!
      </div>
    )
  }
};

const HomeState = (state) => {
  return {
    authorized: state.auth.authorized,
    displayName: state.auth.displayName,
  }
};

const HomeDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch),
  }
};

export default connect(HomeState, HomeDispatch)(HomePage);
