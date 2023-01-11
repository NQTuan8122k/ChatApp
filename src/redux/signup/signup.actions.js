import {SIGNUP_ACTION_TYPES} from './signup.actionTypes';

export const getOtpHandle = (payload, onSuccess, onFailed) => ({
  type: SIGNUP_ACTION_TYPES.GET_OTP.HANDLE,
  payload,
  onSuccess,
  onFailed,
});

export const getOtpSuccess = payload => ({
  type: SIGNUP_ACTION_TYPES.GET_OTP.SUCCESS,
  payload,
});

export const getOtpFail = err => ({
  type: SIGNUP_ACTION_TYPES.GET_OTP.FAIL,
  err,
});

export const confirmOtpHandle = (payload, onSuccess, onError) => ({
  type: SIGNUP_ACTION_TYPES.CONFIRM_OTP.HANDLE,
  payload,
  onSuccess,
  onError,
});
export const confirmOtpSuccess = payload => ({
  type: SIGNUP_ACTION_TYPES.CONFIRM_OTP.SUCCESS,
  payload,
});
export const confirmOtpFail = err => ({
  type: SIGNUP_ACTION_TYPES.CONFIRM_OTP.FAIL,
  err,
});

export const registerNewUserHandle = (payload, onSuccess, onError) => ({
  type: SIGNUP_ACTION_TYPES.REGISTER.HANDLE,
  payload,
  onSuccess,
  onError,
});
export const registerNewUserSuccess = payload => ({
  type: SIGNUP_ACTION_TYPES.REGISTER.SUCCESS,
  payload,
});
export const registerNewUserFail = err => ({
  type: SIGNUP_ACTION_TYPES.REGISTER.FAIL,
  err,
});
