import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'react-loading';

import * as authActions from '../../action/authAction';

class Loading extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { pathTo, actions } = this.props;

    setTimeout(() => {
      actions.loader(pathTo);
    }, 3000);
  }

  render() {
    return (
      <Loader type="spin" color="#444" />
    )
  }
};

const LoadDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch),
  }
};

export default connect(null, LoadDispatch)(Loading);
