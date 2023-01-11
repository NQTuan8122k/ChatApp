import * as Yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const registerYupSchema = Yup.object().shape({
  username: Yup.string()
    .required('This blank can not empty.')
    .max(50, 'Length of username must be less than 50'),
  password: Yup.string()
    .required('This blank can not empty.')
    .max(50, 'Length of password must be less than 50.')
    .min(8, 'Password must be at least 8 characters.')
    .test(
      'Password format.',
      'Password must be contain uppercase, lowercase, special character and number.',
      value => {
        let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        let isUpperCase = !!value ? value?.toUpperCase() === value : false;
        let isLowerCase = !!value ? value?.toLowerCase() === value : value;
        let isNumber = /\d/.test(value);
        let isSpecial = specialChars.test(value);

        if (isSpecial) {
          if (!isUpperCase && !isLowerCase) {
            if (isNumber) {
              return true;
            }
          }
        }
        return false;
      },
    ),
  confirmPassword: Yup.string()
    .required('This blank can not empty.')
    .oneOf(
      [Yup.ref('password'), null],
      'Password must match. Please try again.',
    ),
});

const phoneYupSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required('Please fill your phone number')
    .test('isNumber', 'Phone number must be only contain number', value => {
      let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      let isUpperCase = !!value ? value?.toUpperCase() === value : false;
      let isLowerCase = !!value ? value?.toLowerCase() === value : value;
      let isSpecial = specialChars.test(value);
      if (!isSpecial) {
        if (isUpperCase && isLowerCase) {
          return true;
        }
      }
      return false;
    })
    .max(10, 'Length of username must be less than 10')
    .min(9, 'Phone number must be at least 9 number'),
});

const loginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required('Phone number can not empty')
    .test('format', 'Wrong phone number!', value => {
      if (value?.charAt(0) === '0') {
        if (value?.length == 10) {
          return true;
        }
      } else if (value?.charAt(0) !== '0') {
        if (value?.length == 9) {
          return true;
        }
      }
      return false;
    }),

  password: Yup.string()
    .required('Password can not empty.')
    .max(50, 'Length of password must be less than 50.')
    .min(8, 'Password must be at least 8 characters.'),
});
export {registerYupSchema, phoneYupSchema, loginSchema};
