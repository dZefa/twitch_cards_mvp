import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './homePage.css';

import HomeView from './homeView.jsx';
import LiveFeed from './homeLiveFeed.jsx';

import * as authActions from '../../action/authAction';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { displayName, actions } = this.props;
    
    return (
      <div id="home-page" className="norm-height row justify-content-end">
        <HomeView />
        <LiveFeed />
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
