import axios from 'axios';
import { push } from 'react-router-redux';

const REST_SERVER = process.env.REST_SERVER;

export const loader = (path) => (dispatch) => {
  dispatch(push(`/${path}`));
  dispatch({ type: 'PUSHED_TO_HOME', payload: true });
};

export const checkAuth = () => (dispatch) => {
  axios.get(`${REST_SERVER}/`)
    .then(({ data }) => {
      const payload = {
        displayName: data.result.display_name,
        email: data.result.email,
        bio: data.result.bio,
        type: data.result.type,
        partnered: data.result.partnered,
        logo: data.result.logo,
        accessToken: data.result.accessToken,
        refreshToken: data.result.refreshToken,
      }
      dispatch({ type: 'USER_LOGIN_SUCCESS', payload });
    })
    .catch(err => {
      console.log(`This is error from checkAuth: ${err}`);
      dispatch({ type: 'USER_LOGIN_FAIL', payload: false });
    });
};
