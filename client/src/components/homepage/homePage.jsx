import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ipcRenderer } from 'electron';

import * as authActions from '../../action/authAction';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { authorized, displayName, actions } = this.props;

    ipcRenderer.on('twitchAuth', (event, args) => {
      actions.checkAuth();
    });

    if (authorized === null) {
      actions.checkAuth();
    }
    
    return (
      <div>
        { authorized && <div>This is display name: {displayName}</div>}
        <a href="http://localhost:3000/auth/twitch" target="_blank">
          <img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png" alt="twitch login" />
        </a>
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
