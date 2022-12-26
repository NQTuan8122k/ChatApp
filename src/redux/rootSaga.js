import {all, fork} from 'redux-saga/effects';

import countrySaga from './country/country.saga';
export default function* rootSaga() {
  yield all([
    // fork(listProductSaga),
    fork(countrySaga),
  ]);
}
