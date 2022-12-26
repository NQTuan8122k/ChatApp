import {call, fork, put, takeLatest} from 'redux-saga/effects';
import {CountryApi} from '../../services/api/country.api';
import {getCountryFail, getCountrySuccess} from './country.actions';
import {COUNTRY_ACTION_TYPES} from './country.actionTypes';

function* getAllCountrySaga(action) {
  const {payload, onSuccess, onFailed} = action;
  try {
    const res = yield call(CountryApi?.getCountry, payload);
    onSuccess?.();
    yield put(getCountrySuccess(res));
  } catch (err) {
    onFailed?.();
    yield put(getCountryFail());
  }
}

function* watchUser() {
  yield takeLatest(
    COUNTRY_ACTION_TYPES?.GET_ALL_COUNTRY.HANDLE,
    getAllCountrySaga,
  );
}

export default function* rootChild() {
  yield fork(watchUser);
}
