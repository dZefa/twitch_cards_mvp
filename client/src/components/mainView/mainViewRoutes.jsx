import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../homepage/homePage.jsx';
import AccPage from '../accountPage/accPage.jsx';

class MainViewRoutes extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Switch>
        <Route exact path='/main' component={HomePage} />
        <Route path='/main/acc' component={AccPage} />
      </Switch>
    )
  }
}

export default MainViewRoutes;
