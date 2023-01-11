import {fork, put, takeLatest} from 'redux-saga/effects';
import {REALTIME_DATABASE_TABLE} from '../../constants/other';
import database from '../../utils/firebaseUtils';
import {
  getChatroomDataFail,
  getChatroomDataHandle,
  getChatroomDataSuccess,
  postNewChatroomFail,
  postNewChatroomSuccess,
  postNewMessageFail,
  postNewMessageSuccess,
} from './chat.actions';
import {CHAT_ACTION_TYPES} from './chat.actionTypes';

function* postNewChatroomAction(action) {
  const {payload, onSuccess, onFail} = action;
  try {
    let data = null;
    const temp = yield database
      .ref(REALTIME_DATABASE_TABLE.TBL_CHATROOM)
      .child(payload?.roomId)
      .child('data')
      .once('value', snapshot => {
        data =
          !!snapshot.val() &&
          Object?.keys(snapshot.val())?.map(function (key) {
            return snapshot?.val()[key];
          });
      });

    console.log('******************************************11111111', data);
    if (!data) {
      yield database
        .ref(REALTIME_DATABASE_TABLE.TBL_CHATROOM)
        .child(payload?.roomId)
        .update(payload?.chatroomData);
      console.log(
        '==========================__POST_NEW_CHAT_ROOM__SUCCESS=========================',
      );
      yield put(postNewChatroomSuccess(data));
      onSuccess?.();
    } else {
      console.log(
        '==========================__GET_CHAT_ROOM_DATA__SUCCESS=========================',
      );
      // yield put(getChatroomDataSuccess(data));
      yield put(postNewChatroomSuccess(data));
      onSuccess?.();
    }
  } catch (err) {
    console.log(
      '==========================__POST_NEW_CHAT_ROOM___ERROR_ERROR=========================',
    );
    yield put(postNewChatroomFail());
  }
}

function* postNewMessageAction(action) {
  const {payload, onSuccess, onFail} = action;
  try {
    let data = null;
    // yield database
    //   .ref(REALTIME_DATABASE_TABLE.TBL_CHATROOM)
    //   .child(payload?.roomId)
    //   .child('data')
    //   .update(payload?.message);

    const newReference = yield database
      .ref(REALTIME_DATABASE_TABLE.TBL_CHATROOM)
      .child(payload?.roomId)
      .child('data')
      .push();

    console.log('Auto generated key: ', newReference.key);

    newReference.set(payload?.message).then(() => {
      onSuccess?.();
      console.log('*****Create new message success******');
    });

    console.log(
      '==========================__Post_new_message__SUCCESS=========================',
    );
    // yield put(getChatroomDataHandle({roomId: payload?.roomId}));
    yield put(postNewMessageSuccess(data));
  } catch (err) {
    console.log(
      '==========================__Post_new_message__NULL_ERROR=========================',
    );
    yield put(postNewMessageFail());
  }
}

function* getChatroomDataAction(action) {
  const {payload} = action;
  try {
    let data = null;
    yield database
      .ref(REALTIME_DATABASE_TABLE.TBL_CHATROOM)
      .child(payload?.roomId)
      .child('data')
      .limitToLast(20)
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
      yield put(getChatroomDataSuccess(data));
    } else {
      console.log(
        '==========================__GET_ALL_USER_DATA__NULL_ERROR=========================',
      );
      yield put(getChatroomDataFail(data));
    }
  } catch (err) {
    yield put(getChatroomDataFail());
  }
}

function* watchUser() {
  yield takeLatest(
    CHAT_ACTION_TYPES.CREATE_NEW_CHAT_ROOM.HANDLE,
    postNewChatroomAction,
  );
  yield takeLatest(
    CHAT_ACTION_TYPES.GET_CHAT_ROOM_DATA.HANDLE,
    getChatroomDataAction,
  );
  yield takeLatest(
    CHAT_ACTION_TYPES.POST_NEW_MESSAGE.HANDLE,
    postNewMessageAction,
  );
}

export default function* rootChild() {
  yield fork(watchUser);
}
