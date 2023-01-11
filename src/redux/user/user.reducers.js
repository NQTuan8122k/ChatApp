import {USER_ACTION_TYPES} from './user.actionTypes';

const initialState = {
  user: null,
  userList: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.GET_CURRENT_USER.SUCCESS: {
      console.log('********ACTION_USER**********');
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

    case USER_ACTION_TYPES.GET_ALL_USER.SUCCESS: {
      console.log('********ACTION_ALL_USER**********');
      return {
        ...state,
        userList: action.payload,
      };
    }
    case USER_ACTION_TYPES.GET_ALL_USER.FAIL: {
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
