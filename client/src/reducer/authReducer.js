const initialState = {
  authorized: false,
  displayName: null,
  bio: null,
  logo: null,
  accessToken: null,
  refreshToken: null,
  error: null
};

const authReducer = (state=initialState, action) => {
  const payload = action.payload;
  
  switch(action.type) {
    case 'USER_LOGIN_SUCCESS': {
      return Object.assign({}, state, {
        authorized: true,
        displayName: payload.display_name,
        bio: payload.bio,
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
    default:
      return state;
  }
}

export default authReducer;
