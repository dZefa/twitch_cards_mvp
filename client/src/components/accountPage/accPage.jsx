import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './accPage.css';

class AccPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bio, displayName, email, logo, partnered, type } = this.props;
    return (
      <div id="acc-page">
        <img src={logo} />
        <p>{ partnered ? 'Partnered' : 'Viewer' }</p>
        <p>Username: {displayName}</p>
        <p>Bio: {bio}</p>
        <p>Email: {email}</p>
        <p>Type: {type}</p>
      </div>
    )
  }
};

const AccState = (state) => {
  return {
    displayName: state.auth.displayName,
    email: state.auth.email,
    bio: state.auth.bio,
    type: state.auth.type,
    partnered: state.auth.partnered,
    logo: state.auth.logo,
  };
};

export default connect(AccState)(AccPage);
