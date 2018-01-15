import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../homepage/homePage.jsx';
import MainView from './mainView.jsx';

class MainViewRoutes extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Switch>
        <Route exact path='/main' component={HomePage} />
      </Switch>
    )
  }
}

export default MainViewRoutes;
