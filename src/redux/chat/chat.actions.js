import {CHAT_ACTION_TYPES} from './chat.actionTypes';

export const postNewChatroomHandle = (payload, onSuccess, onFail) => ({
  type: CHAT_ACTION_TYPES.CREATE_NEW_CHAT_ROOM.HANDLE,
  payload,
  onSuccess,
  onFail,
});

export const postNewChatroomSuccess = payload => ({
  type: CHAT_ACTION_TYPES.CREATE_NEW_CHAT_ROOM.SUCCESS,
  payload,
});

export const postNewChatroomFail = err => ({
  type: CHAT_ACTION_TYPES.CREATE_NEW_CHAT_ROOM.FAIL,
  err,
});
export const getChatroomDataHandle = payload => ({
  type: CHAT_ACTION_TYPES.GET_CHAT_ROOM_DATA.HANDLE,
  payload,
});

export const getChatroomDataSuccess = payload => ({
  type: CHAT_ACTION_TYPES.GET_CHAT_ROOM_DATA.SUCCESS,
  payload,
});

export const getChatroomDataFail = err => ({
  type: CHAT_ACTION_TYPES.GET_CHAT_ROOM_DATA.FAIL,
  err,
});

export const postNewMessageHandle = (payload, onSuccess, onFail) => ({
  type: CHAT_ACTION_TYPES.POST_NEW_MESSAGE.HANDLE,
  payload,
  onSuccess,
  onFail,
});

export const postNewMessageSuccess = payload => ({
  type: CHAT_ACTION_TYPES.POST_NEW_MESSAGE.SUCCESS,
  payload,
});

export const postNewMessageFail = err => ({
  type: CHAT_ACTION_TYPES.POST_NEW_MESSAGE.FAIL,
  err,
});
