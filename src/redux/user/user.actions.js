import {USER_ACTION_TYPES} from './user.actionTypes';

export const getCurrentUserHandle = () => ({
  type: USER_ACTION_TYPES.GET_CURRENT_USER.HANDLE,
});

export const getCurrentUserSuccess = payload => ({
  type: USER_ACTION_TYPES.GET_CURRENT_USER.SUCCESS,
  payload,
});

export const getCurrentUserFail = err => ({
  type: USER_ACTION_TYPES.GET_CURRENT_USER.FAIL,
  err,
});

export const changePasswordHandle = (payload, onSuccess, onFailed) => ({
  type: USER_ACTION_TYPES.CHANGE_PASSWORD.HANDLE,
  payload,
  onSuccess,
  onFailed,
});

export const changePasswordSuccess = payload => ({
  type: USER_ACTION_TYPES.CHANGE_PASSWORD.SUCCESS,
  payload,
});

export const changePasswordFail = err => ({
  type: USER_ACTION_TYPES.CHANGE_PASSWORD.FAIL,
  err,
});

export const updateUserHandle = (payload, onSuccess, onFail) => ({
  type: USER_ACTION_TYPES.UPDATE_USER.HANDLE,
  payload,
  onSuccess,
  onFail,
});

export const updateUserSuccess = payload => ({
  type: USER_ACTION_TYPES.UPDATE_USER.SUCCESS,
  payload,
});

export const updateUserFail = err => ({
  type: USER_ACTION_TYPES.UPDATE_USER.FAIL,
  err,
});
