import {all, fork} from 'redux-saga/effects';

import countrySaga from './country/country.saga';
import signupSaga from './signup/signup.saga';
import userSaga from './user/user.saga';
import authSaga from './auth/auth.saga';
import chatSaga from './chat/chat.saga';

export default function* rootSaga() {
  yield all([
    // fork(listProductSaga),
    fork(countrySaga),
    fork(signupSaga),
    fork(userSaga),
    fork(authSaga),
    fork(chatSaga),
  ]);
}
