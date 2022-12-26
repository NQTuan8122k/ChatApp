import {COUNTRY_ACTION_TYPES} from './country.actionTypes';

export const getCountryHandle = (payload, onSuccess, onFail) => ({
  type: COUNTRY_ACTION_TYPES?.GET_ALL_COUNTRY.HANDLE,
  payload,
  onSuccess,
  onFail,
});

export const getCountrySuccess = payload => ({
  type: COUNTRY_ACTION_TYPES?.GET_ALL_COUNTRY.SUCCESS,
  payload,
});

export const getCountryFail = err => ({
  type: COUNTRY_ACTION_TYPES?.GET_ALL_COUNTRY.FAIL,
  err,
});
