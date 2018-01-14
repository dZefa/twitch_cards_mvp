import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ipcRenderer } from 'electron';

import './navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);

  }

  closeApp() {
    ipcRenderer.sendSync('closeApp');
  }

  render() {
    const { displayName } = this.props;

    return (
      <div id="navbar-page" className="nav-height">
        <div className="row align-items-center fill-height">
          <div className="col-2">
            <h3>{displayName}</h3>
          </div>
          <div className="col-10 fill-height">
            <div className="row justify-content-end align-items-start" id="nav-row-right">
              <span onClick={() => this.closeApp()} >
                <i className="fas fa-times" ></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const NavState = (state) => {
  return {
    displayName: state.auth.displayName,
  };
};

export default connect(NavState)(Navbar);
