import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { configureStore, history } from './src/store/configureStore';

import App from './src/app.jsx';

import './src/app.global.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
