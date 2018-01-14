import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainView from './components/mainView/mainView.jsx';
import LandingPage from './components/landingPage/landingPage.jsx';

class Routes extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/main" component={MainView} />
        <Route path="/" component={LandingPage} />
      </Switch>
    )
  }
};

export default Routes;
