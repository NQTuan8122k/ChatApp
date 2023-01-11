import {fork, put, select, takeLatest} from 'redux-saga/effects';

import auth from '@react-native-firebase/auth';
import {databaseAuth, databaseUser} from '../../utils/firebaseUtils';
import {
  confirmOtpFail,
  confirmOtpSuccess,
  getOtpFail,
  getOtpSuccess,
  registerNewUserFail,
  registerNewUserSuccess,
} from './signup.actions';
import {SIGNUP_ACTION_TYPES} from './signup.actionTypes';
import {getEegisterConfirmSelector} from './signup.selectors';

function* getOtpSignupAction(action) {
  const {payload, onSuccess, onFailed} = action;
  // console.log(
  //   '********ACTION_SIGNUP_getOtpSignupAction**********_payload:',
  //   payload,
  // );
  try {
    const confirm = yield auth().signInWithPhoneNumber(payload?.phoneNumber);
    if (confirm) {
      console.log(
        '==========================__GET_OTP_REGISTER__SUCCESS=========================',
      );
      onSuccess?.();
      yield put(getOtpSuccess(confirm));
    } else {
      console.log(
        '==========================__GET_OTP_REGISTER__NULL_ERROR=========================',
      );
      onFailed?.(confirm);
      yield put(getOtpFail(confirm));
    }
  } catch (err) {
    yield put(getOtpFail());
  }
}

function* confirmOtpSaga(obj) {
  const {payload, onSuccess, onFailed} = obj;
  console.log('=========*********__CONFIRM_OTP__*********=========');
  try {
    const confirm = yield select(getEegisterConfirmSelector);
    console.log(confirm);
    if (confirm && payload?.OtpCode) {
      yield confirm.confirm(payload?.OtpCode);
      onSuccess?.();
      yield put(confirmOtpSuccess());
    } else {
      console.log(
        '==========================__CONFIRM_OTP__NULL_ERROR=========================',
      );
      onFailed?.();
      yield put(confirmOtpFail());
    }
  } catch (err) {
    console.log(
      '==========================__CONFIRM_OTP__ERROR=========================',
    );
    onFailed?.(err);
    yield put(confirmOtpFail(err));
  }
}

function* registerNewUserSaga(obj) {
  const {payload, onSuccess, onFailed} = obj;
  console.log('=========*********__REGISTER_NEW_USER__*********=========');
  try {
    if (payload?.uid && payload?.userData) {
      databaseUser()
        .update({
          ...(payload?.uid ? {[payload?.uid]: payload?.userData} : {}),
        })
        .then(() => console.log('Create new user data.', payload?.uid));
      databaseAuth()
        .child(payload?.userData?.phoneNumber)
        .update(payload?.auth);
      onSuccess?.();
      yield put(registerNewUserSuccess());
    } else {
      console.log(
        '==========================__CREATE_NEW_USER__NULL_ERROR=========================',
      );
      onFailed?.();
      yield put(registerNewUserFail());
    }
  } catch (err) {
    console.log(
      '==========================__REGISTER_NEW_USER__ERROR=========================',
    );
    onFailed?.(err);
    yield put(registerNewUserFail(err));
  }
}

function* watchUser() {
  yield takeLatest(SIGNUP_ACTION_TYPES.GET_OTP.HANDLE, getOtpSignupAction);
  yield takeLatest(SIGNUP_ACTION_TYPES.CONFIRM_OTP.HANDLE, confirmOtpSaga);
  yield takeLatest(SIGNUP_ACTION_TYPES.REGISTER.HANDLE, registerNewUserSaga);
}

export default function* rootChild() {
  yield fork(watchUser);
}
