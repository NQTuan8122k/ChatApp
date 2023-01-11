import {USER_ACTION_TYPES} from './user.actionTypes';

export const getCurrentUserHandle = payload => ({
  type: USER_ACTION_TYPES.GET_CURRENT_USER.HANDLE,
  payload,
});

export const getCurrentUserSuccess = payload => ({
  type: USER_ACTION_TYPES.GET_CURRENT_USER.SUCCESS,
  payload,
});

export const getCurrentUserFail = err => ({
  type: USER_ACTION_TYPES.GET_CURRENT_USER.FAIL,
  err,
});
export const getAllUserHandle = () => ({
  type: USER_ACTION_TYPES.GET_ALL_USER.HANDLE,
});

export const getAllUserSuccess = payload => ({
  type: USER_ACTION_TYPES.GET_ALL_USER.SUCCESS,
  payload,
});

export const getAllUserFail = err => ({
  type: USER_ACTION_TYPES.GET_ALL_USER.FAIL,
  err,
});
