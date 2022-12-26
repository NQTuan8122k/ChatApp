import {END_POINTS} from '../../constants/api';
import APIUtils from '../../utils/apiUtils';

const getCountry = async (payload = {}) => {
  const res = await APIUtils.get(END_POINTS?.COUNTRY?.GET_COUNTRY, {
    params: {
      ...payload,
    },
  });
  return res?.data;
};

export const CountryApi = {
  getCountry,
};
