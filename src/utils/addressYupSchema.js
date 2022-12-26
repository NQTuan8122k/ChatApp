import * as Yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const addressYupSchema = Yup.object().shape({
  fullName: Yup.string().required('Trường này không được trống !'),
  phoneNumber: Yup.string()
    .required('Trường này không được trống !')
    .matches(phoneRegExp, 'Số điện thoại không hợp lệ'),
  province: Yup.string().test(
    'Chọn Tỉnh/Thành Phố',
    'Vui lòng chọn Tỉnh/Thành Phố',
    id => {
      return id != -1;
    },
  ),
  district: Yup.string().test(
    'Chọn Quận/Huyện',
    'Vui lòng chọn Quận/Huyện',
    id => {
      return id != -1;
    },
  ),
  ward: Yup.string().test('Chọn Xã/Phường', 'Vui lòng chọn Xã/Phường', id => {
    return id != -1;
  }),
  detail: Yup.string().required('Trường này không được trống !'),
});

export {addressYupSchema};
