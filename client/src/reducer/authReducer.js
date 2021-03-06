const initialState = {
  authorized: null,
  displayName: '',
  email: '',
  bio: '',
  type: '',
  partnered: null,
  logo: '',
  accessToken: '',
  refreshToken: '',
  pushed: false,
  error: ''
};

const authReducer = (state=initialState, action) => {
  const payload = action.payload;
  
  switch(action.type) {
    case 'USER_LOGIN_SUCCESS': {
      return Object.assign({}, state, {
        authorized: true,
        displayName: payload.displayName,
        email: payload.email,
        bio: payload.bio,
        type: payload.type,
        partnered: payload.partnered,
        logo: payload.logo,
        accessToken: payload.accessToken,
        refreshToken: payload.refreshToken,
      });
    }
    case 'USER_LOGIN_FAIL': {
      return Object.assign({
        authorized: false,
        error: payload.error,
      });
    }
    case 'PUSHED_TO_MAIN': {
      return Object.assign({}, state, {
        pushed: payload,
      });
    }
    default:
      return state;
  }
}

export default authReducer;
