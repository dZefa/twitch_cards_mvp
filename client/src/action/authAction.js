import axios from 'axios';

const REST_SERVER = process.env.REST_SERVER;

export const twitchLogin = () => (dispatch) => {
  // axios.get(`${REST_SERVER}/auth/twitch`)
  //   .then(res => {
  //     console.log(`This is data from twitch: ${res.data}`);
  //   })
  //   .catch(err => {
  //     console.log(`This is error from twitchLogin: ${err}`);
  //   });
};

export const checkAuth = () => (dispatch) => {
  axios.get(`${REST_SERVER}/`)
    .then(({ data }) => {
      console.log(`This is data from checkAuth: ${JSON.stringify(data)}`);
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
