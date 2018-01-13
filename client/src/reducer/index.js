import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import auth from './authReducer';

const Reducer = combineReducers({
  auth,
  router,
});

export default Reducer;
