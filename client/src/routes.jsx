import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/homepage/homePage.jsx';
import LandingPage from './components/landingPage/landingPage.jsx';

class Routes extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    )
  }
};

export default Routes;
