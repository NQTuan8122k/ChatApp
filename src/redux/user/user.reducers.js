import {USER_ACTION_TYPES} from './user.actionTypes';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.GET_CURRENT_USER.SUCCESS: {
      console.log('********ACTION_USER**********', action);
      return {
        ...state,
        user: action.payload,
      };
    }
    case USER_ACTION_TYPES.GET_CURRENT_USER.FAIL: {
      return {
        ...state,
      };
    }
    case USER_ACTION_TYPES.CHANGE_PASSWORD.SUCCESS: {
      console.log('********ACTION_CHANGE_PASSWORD_USER**********', action);
      return {
        ...state,
      };
    }
    case USER_ACTION_TYPES.CHANGE_PASSWORD.FAIL: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
