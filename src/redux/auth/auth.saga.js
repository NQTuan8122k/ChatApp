import {fork, put, select, takeLatest} from 'redux-saga/effects';

import auth from '@react-native-firebase/auth';
import database, {databaseAuth, databaseUser} from '../../utils/firebaseUtils';
import {authLoginPasswordFail, authLoginPasswordSuccess} from './auth.actions';
import {AUTH_ACTION_TYPES, SIGNUP_ACTION_TYPES} from './auth.actionTypes';
import {REALTIME_DATABASE_TABLE} from '../../constants/other';
import {getAllUserHandle, getCurrentUserHandle} from '../user/user.actions';

function* loginPasswordAction(action) {
  const {payload, onSuccess, onFailed} = action;
  // console.log(
  //   '********ACTION_AUTH_login_by Password**********_payload:',
  //   payload,
  // );
  try {
    const data = yield database
      .ref(REALTIME_DATABASE_TABLE.TBL_AUTH)
      .child(payload?.phoneNumber)
      .once('value');

    if (!!data?.val()?.password) {
      if (payload?.password == data?.val()?.password) {
        console.log(
          '==========================__login_by Password__SUCCESS=========================',
        );

        yield put(getCurrentUserHandle({id: payload?.phoneNumber}));
        yield put(getAllUserHandle());
        yield put(authLoginPasswordSuccess(data));
        onSuccess?.();
      } else {
        console.log(
          '==========================__login_by Password__WRONG_PASSWORD__=========================',
        );
        onFailed?.(data);
        yield put(authLoginPasswordFail(data));
      }
    } else {
      console.log(
        '==========================__login_by Password__WRONG_USERNAME__=========================',
      );
      onFailed?.(data);
      yield put(authLoginPasswordFail(data));
    }
  } catch (err) {
    console.log(
      '==========================__login_by Password__NULL_ERROR__=========================',
    );
    yield put(authLoginPasswordFail());
  }
}

function* watchUser() {
  yield takeLatest(
    AUTH_ACTION_TYPES.LOGIN_PASSWORD.HANDLE,
    loginPasswordAction,
  );
}

export default function* rootChild() {
  yield fork(watchUser);
}
