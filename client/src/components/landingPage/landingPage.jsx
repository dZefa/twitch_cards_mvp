import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ipcRenderer } from 'electron';

import Loading from '../loading/loading.jsx';

import * as authActions from '../../action/authAction';

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { actions } = this.props;

    ipcRenderer.on('twitchAuth', (event, args) => {
      actions.checkAuth();
    });
  }

  render() {
    const { authorized } = this.props;

    if (authorized) {
      return (
        <Loading pathTo={'home'} />
      )
    } else {
      return (
        <div>
          <a href="http://localhost:3000/auth/twitch" target="_blank">
            <img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png" alt="twitch login" />
          </a>
        </div>
      )
    }

  }
};

const LandState = (state) => {
  return {
    authorized: state.auth.authorized,
  }
};

const LandDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch),
  }
};

export default connect(LandState, LandDispatch)(Landing);
