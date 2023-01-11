import {SIGNUP_ACTION_TYPES} from './signup.actionTypes';

const initialState = {
  registerConfirm: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_ACTION_TYPES.GET_OTP.SUCCESS: {
      console.log('********ACTION_GET_OTP**********', action);
      return {...state, registerConfirm: action?.payload};
    }
    case SIGNUP_ACTION_TYPES.GET_OTP.FAIL: {
      return {
        ...state,
      };
    }

    case SIGNUP_ACTION_TYPES.CONFIRM_OTP.SUCCESS: {
      console.log('********ACTION_CONFIRM_OTP**********', action);
      return {...state};
    }
    case SIGNUP_ACTION_TYPES.CONFIRM_OTP.FAIL: {
      return {
        ...state,
      };
    }

    case SIGNUP_ACTION_TYPES.REGISTER.SUCCESS: {
      console.log('********ACTION_REGISTER_OTP**********', action);
      return {...state};
    }
    case SIGNUP_ACTION_TYPES.REGISTER.FAIL: {
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
