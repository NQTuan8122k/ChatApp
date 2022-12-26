import {END_POINTS} from '../constants/api';
import APIUtils from '../utils/apiUtils';

export const checkPhoneNumber = async phoneNumber => {
  return await APIUtils.post(END_POINTS.OTP, {
    body: JSON.stringify({
      phoneNumber: phoneNumber,
    }),
  });
};

export const loginGoogle = async token => {
  return await APIUtils.post(END_POINTS.LOGIN.GOOGLE, {
    body: JSON.stringify({
      tokenId: token,
    }),
  });
};

export const loginFacebook = async token => {
  return await APIUtils.post(END_POINTS.LOGIN.FACEBOOK, {
    body: JSON.stringify({
      tokenId: token,
    }),
  });
};

export const loginInternal = async (phoneNumber, password) => {
  return await APIUtils.post(END_POINTS.LOGIN.INTERNAL, {
    body: JSON.stringify({
      phoneNumber: phoneNumber,
      password: password,
    }),
  });
};

export const loginOTP = async phoneNumber => {
  return await APIUtils.post(END_POINTS.LOGIN.OTP, {
    body: JSON.stringify({
      phoneNumber: phoneNumber,
    }),
  });
};

export const registerWithPhone = async (phoneNumber, password) => {
  return await APIUtils.post(END_POINTS.AUTH.REGISTER, {
    body: JSON.stringify({
      phoneNumber: phoneNumber,
      password: password,
    }),
  });
};
