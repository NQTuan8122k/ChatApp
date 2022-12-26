import * as Yup from 'yup';

const passwordYupSchema = Yup.object().shape({
  password: Yup.string()
    .required('Trường này không được trống !')
    .matches(
      `^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*[!@#$%^&*?])`,
      'Mật khẩu chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 chữ số, 1 ký tự đặc biệt và có độ dài ít nhất là 8',
    ),
});

const changePasswordYupSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .required('Trường này không được trống !')
    .matches(
      `^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*[!@#$%^&*?])`,
      'Mật khẩu chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 chữ số, 1 ký tự đặc biệt và có độ dài ít nhất là 8',
    ),
  newPassword: Yup.string()
    .required('Trường này không được trống !')
    .matches(
      `^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*[!@#$%^&*?])`,
      'Mật khẩu chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 chữ số, 1 ký tự đặc biệt và có độ dài ít nhất là 8',
    )
    .notOneOf(
      [Yup.ref('currentPassword')],
      'Mật khẩu mới phải khác với mật khẩu hiện tại!',
    ),
  confirmPassword: Yup.string()
    .required('Trường này không được trống !')
    .oneOf([Yup.ref('newPassword')], 'Mật khẩu không trùng khớp!'),
});

export {passwordYupSchema, changePasswordYupSchema};
