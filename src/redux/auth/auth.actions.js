import {AUTH_ACTION_TYPES} from './auth.actionTypes';

export const authLoginPasswordHandle = (payload, onSuccess, onFailed) => ({
  type: AUTH_ACTION_TYPES.LOGIN_PASSWORD.HANDLE,
  payload,
  onSuccess,
  onFailed,
});

export const authLoginPasswordSuccess = payload => ({
  type: AUTH_ACTION_TYPES.LOGIN_PASSWORD.SUCCESS,
  payload,
});

export const authLoginPasswordFail = err => ({
  type: AUTH_ACTION_TYPES.LOGIN_PASSWORD.FAIL,
  err,
});
