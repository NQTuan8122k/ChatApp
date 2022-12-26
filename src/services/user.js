import {END_POINTS} from '../constants/api';
import APIUtils from '../utils/apiUtils';

export const getCurrentUser = async () => {
  return await APIUtils.get(END_POINTS.USER.GET_CURRENT_USER);
};

const changePassword = async (payload = {}) => {
  const res = await APIUtils.post(END_POINTS.USER?.CHANGE_PASSWORD, {
    body: JSON.stringify(payload),
  });
  return res?.data;
};

export const updateUser = async (payload, id) => {
  return await APIUtils.put(`${END_POINTS.USER.UPDATE_USER}/${id}`, {
    body: JSON.stringify(payload),
  });
};

export default {
  changePassword,
};
