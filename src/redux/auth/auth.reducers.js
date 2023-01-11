import {AUTH_ACTION_TYPES} from './auth.actionTypes';

const initialState = {
  authData: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.LOGIN_PASSWORD.SUCCESS: {
      console.log('********ACTION_AUTH**********');
      return {...state, authData: action?.payload};
    }
    case AUTH_ACTION_TYPES.LOGIN_PASSWORD.FAIL: {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};

export default signupReducer;
