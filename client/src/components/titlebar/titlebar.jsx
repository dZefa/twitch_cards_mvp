import React, { Component } from 'react';
import { remote } from 'electron';

import './titlebar.css';

class TitleBar extends Component {
  constructor() {
    super();
  }

  closeApp() {
    remote.BrowserWindow.getFocusedWindow().close();
  }

  minimizeApp() {
    remote.BrowserWindow.getFocusedWindow().minimize();
  }

  render() {
    return (
      <div className="titlebar-height" id="titlebar">
        <div className="row fill-height">
          <div className="col" id="title-row-left">
            <p>Twitch Cards</p>
          </div>
          <div className="col">
            <div className="row justify-content-end" id="title-row-right">
            <span onClick={() => this.minimizeApp()}>
              <i className="fas fa-window-minimize"></i>
            </span>
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

export default TitleBar;
