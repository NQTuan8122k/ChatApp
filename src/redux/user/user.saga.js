import {
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
  select,
} from 'redux-saga/effects';
import {getCurrentUser, updateUser} from '../../services/user';
import {getData} from '../../utils/storeAsync';
import {KEY_STORE} from '../../constants/keyStores';
import {
  changePasswordFail,
  changePasswordSuccess,
  getCurrentUserFail,
  getCurrentUserHandle,
  getCurrentUserSuccess,
  updateUserFail,
  updateUserSuccess,
} from './user.actions';
import {USER_ACTION_TYPES} from './user.actionTypes';
import NavigationServices from '../../utils/navigationServices';
import {SCREEN_NAME} from '../../constants/screenName';
import {UserApi} from '../../services';
import {ERRORS_CODE, ERRORS_NOTIFICATION} from '../../constants/errors';
import {SendMessageOnlyRead} from '../../utils/sendMessageNotification';
import {postUploadFile} from '../../services/uploadFile';
import {getUserSelector} from './user.selectors';

function* getCurrentUserAction(action) {
  try {
    const tokenAuth = yield getData(KEY_STORE.TOKEN_AUTH);
    if (tokenAuth) {
      let response = yield call(getCurrentUser);
      console.log('*******USERRRRR**********', response?.data?.data);
      yield put(getCurrentUserSuccess(response?.data?.data));
      //  NavigationServices.navigate(SCREEN_NAME.HOME_SCREEN);
    } else {
      yield put(getCurrentUserSuccess(null));
    }
  } catch (err) {
    yield put(getCurrentUserFail());
  }
}

function* changeUserPasswordSaga(action) {
  const {payload, onSuccess, onFailed} = action;
  try {
    const tokenAuth = yield getData(KEY_STORE.TOKEN_AUTH);
    if (!!tokenAuth) {
      yield call(UserApi.changePassword, payload);
      onSuccess?.();
      yield put(changePasswordSuccess());
    } else {
      onSuccess?.();
      yield put(changePasswordSuccess(null));
    }
  } catch (err) {
    onFailed?.();
    yield put(changePasswordFail());
  }
}

function* updateUserAction(action) {
  try {
    const {onSuccess, onFailed} = action;
    const {image, fullName, gender, dateOfBirth, avatar} = action?.payload;
    console.log('****UPSATE USER SAGA*****', image?.assets?.[0]);
    let avatarUpload = '';
    if (image) {
      let formData = new FormData();
      formData.append('formFile', {
        uri: image?.assets?.[0]?.uri,
        type: image?.assets?.[0]?.type,
        name: image?.assets?.[0]?.fileName,
      });

      formData.append('type', image?.assets?.[0]?.type);

      const responseUpload = yield call(postUploadFile, formData);
      console.log('*********RESPONSE UPLOAD******', responseUpload);
      avatarUpload = responseUpload?.data?.data?.url;
    } else {
      avatarUpload = avatar;
    }

    const user = yield select(getUserSelector);

    const response = yield call(
      updateUser,
      {fullName, gender, dateOfBirth, avatar: avatarUpload},
      user?.id,
    );

    console.log('******UPDATE RÔI*********', response);

    yield put(getCurrentUserHandle());
    onSuccess?.();
    yield put(updateUserSuccess());
  } catch (err) {
    if (err == ERRORS_CODE.NET_WORK) {
      yield SendMessageOnlyRead(ERRORS_NOTIFICATION.NET_WORK);
    } else {
      yield SendMessageOnlyRead(err?.data?.errors?.[0]?.code, 'error');
    }
    yield put(updateUserFail(err));

    console.log('**************ERRR*********', err);
  }
}

function* watchUser() {
  yield takeLatest(
    USER_ACTION_TYPES.GET_CURRENT_USER.HANDLE,
    getCurrentUserAction,
  );
  yield takeLatest(
    USER_ACTION_TYPES.CHANGE_PASSWORD.HANDLE,
    changeUserPasswordSaga,
  );
  yield takeLatest(USER_ACTION_TYPES.UPDATE_USER.HANDLE, updateUserAction);
}

export default function* rootChild() {
  yield fork(watchUser);
}
