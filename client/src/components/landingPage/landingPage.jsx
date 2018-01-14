import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ipcRenderer } from 'electron';

import './landingPage.css';

import Loading from '../loading/loading.jsx';
import LandView from './landingView.jsx';

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

    return (
      <div className="container fill-height" id="landing"> 
        <div className="row align-items-center fill-height">
          <div className="col align-self-center">
            { 
              authorized ? 
              <Loading pathTo="main" /> :
              <LandView />
            }
          </div>
        </div>
      </div>
    )

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
