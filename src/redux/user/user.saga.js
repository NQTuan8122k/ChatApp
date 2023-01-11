import {fork, put, takeLatest} from 'redux-saga/effects';
import {REALTIME_DATABASE_TABLE} from '../../constants/other';
import database from '../../utils/firebaseUtils';
import {
  getAllUserFail,
  getAllUserSuccess,
  getCurrentUserFail,
  getCurrentUserSuccess,
} from './user.actions';
import {USER_ACTION_TYPES} from './user.actionTypes';

function* getCurrentUserAction(action) {
  const {payload} = action;
  try {
    let data = null;
    yield database
      .ref(REALTIME_DATABASE_TABLE.TBL_USER)
      .child(payload?.id)
      .once('value', snapshot => {
        data = !!snapshot.val() && snapshot.val();
      });
    if (data) {
      console.log(
        '==========================__GET_CURRENT_USER_DATA__SUCCESS=========================',
      );
      yield put(getCurrentUserSuccess(data));
    } else {
      console.log(
        '==========================__GET_CURRENT_USER_DATA__NULL_ERROR=========================',
      );
      yield put(getCurrentUserFail(data));
    }
  } catch (err) {
    yield put(getCurrentUserFail());
  }
}

function* getAllUserAction(action) {
  const {payload} = action;
  try {
    let data = null;
    yield database
      .ref(REALTIME_DATABASE_TABLE.TBL_USER)
      .once('value', snapshot => {
        data =
          !!snapshot.val() &&
          Object?.keys(snapshot.val())?.map(function (key) {
            return snapshot?.val()[key];
          });
      });
    if (data) {
      console.log(
        '==========================__GET_ALL_USER_DATA__SUCCESS=========================',
      );
      yield put(getAllUserSuccess(data));
    } else {
      console.log(
        '==========================__GET_ALL_USER_DATA__NULL_ERROR=========================',
      );
      yield put(getAllUserFail(data));
    }
  } catch (err) {
    yield put(getAllUserFail());
  }
}

function* watchUser() {
  yield takeLatest(
    USER_ACTION_TYPES.GET_CURRENT_USER.HANDLE,
    getCurrentUserAction,
  );
  yield takeLatest(USER_ACTION_TYPES.GET_ALL_USER.HANDLE, getAllUserAction);
}

export default function* rootChild() {
  yield fork(watchUser);
}
