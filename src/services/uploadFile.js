import {END_POINTS} from '../constants/api';
import APIUtils from '../utils/apiUtils';

export const postUploadFile = async formData => {
  return await APIUtils.post(`${END_POINTS.UPLOAD_FILE.POST}`, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'text/plain',
    },
    body: formData,
  });
};
