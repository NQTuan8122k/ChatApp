import {CHAT_ACTION_TYPES} from './chat.actionTypes';

const initialState = {
  message: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAT_ACTION_TYPES.CREATE_NEW_CHAT_ROOM.SUCCESS: {
      console.log('********ACTION_CREATE_NEW_CHAT**********', action);
      return {
        ...state,
      };
    }
    case CHAT_ACTION_TYPES.CREATE_NEW_CHAT_ROOM.FAIL: {
      return {
        ...state,
      };
    }

    case CHAT_ACTION_TYPES.GET_CHAT_ROOM_DATA.SUCCESS: {
      console.log(
        '********ACTION_GET_CHAT_DATA**********',
        action?.payload?.length,
      );
      return {
        ...state,
        message: action?.payload,
      };
    }
    case CHAT_ACTION_TYPES.GET_CHAT_ROOM_DATA.FAIL: {
      return {
        ...state,
      };
    }

    case CHAT_ACTION_TYPES.POST_NEW_MESSAGE.SUCCESS: {
      console.log('********ACTION_POST_NEW MESSAGE**********', action);
      let allMessage = state?.message?.push(action.payload);
      return {
        ...state,
        ...{message: allMessage},
      };
    }
    case CHAT_ACTION_TYPES.POST_NEW_MESSAGE.FAIL: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default chatReducer;
