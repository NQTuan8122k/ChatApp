import auth from '@react-native-firebase/auth';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  PHONE_NUMBER_2,
  PHONE_NUMBER_3,
  PHONE_NUMBER_NOT_0_2,
  PHONE_NUMBER_NOT_0_3,
} from '../../constants/other';
import {SCREEN_NAME} from '../../constants/screenName';
import {authLoginPasswordHandle} from '../../redux/auth/auth.actions';
import {registerNewUserHandle} from '../../redux/signup/signup.actions';
import NavigationServices from '../../utils/navigationServices';
import LoginView from './login.view';

const LoginContainer = () => {
  const formikRef = useRef(null);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   try {
  //     if (!!auth()?.currentUser) {
  //       auth()?.signOut();
  //     }
  //   } catch (error) {}
  // }, []);

  const onLogin = () => {
    let newPhone = formikRef?.current?.values?.phoneNumber?.replace(/\s+/g, '');
    newPhone = newPhone.charAt(0) == '0' ? newPhone.slice(1) : newPhone;
    dispatch(
      authLoginPasswordHandle(
        {
          phoneNumber: '+84' + newPhone,
          password: formikRef?.current?.values?.password,
        },
        () => NavigationServices.navigate(SCREEN_NAME.HOME_SCREEN),
        () => {},
      ),
    );
  };

  const [maxLength, setMaxLength] = useState(10);

  let dot = '⚫ ';
  const onChangePassword = text => {
    formikRef?.current?.setFieldValue('password', text);
  };
  const onChangePhoneNumber = useCallback(
    text => {
      let newPhone = text.replace(/\s+/g, '');
      newPhone = newPhone.replace(/ /g, '');
      newPhone = newPhone.replace(/[^0-9]/g, '');
      if (newPhone?.charAt(0) === '0') {
        if (maxLength != 10) {
          setMaxLength(10);
        }
        if (newPhone?.length == 2 && !PHONE_NUMBER_2?.includes(newPhone)) {
          newPhone = newPhone?.slice(0, 1);
        } else if (
          newPhone?.length == 3 &&
          !PHONE_NUMBER_3?.includes(newPhone)
        ) {
          newPhone = newPhone?.slice(0, 2);
        }
      } else if (newPhone?.charAt(0) !== '0') {
        if (maxLength != 9) {
          setMaxLength(9);
        }
        if (
          newPhone?.length == 1 &&
          !PHONE_NUMBER_NOT_0_2?.includes(newPhone)
        ) {
          newPhone = '';
        } else if (
          newPhone?.length == 2 &&
          !PHONE_NUMBER_NOT_0_3?.includes(newPhone)
        ) {
          newPhone = newPhone?.slice(0, 1);
        }
      }
      formikRef?.current?.setFieldValue('phoneNumber', newPhone);
    },
    [maxLength],
  );

  let errorMsgUsername = formikRef?.current?.errors?.phoneNumber || '';
  let errorMsgPassword = formikRef?.current?.errors?.password || '';

  const [focusUsername, setFocusUsername] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [isTouchedUsername, setIsTouchedUsername] = useState(false);
  const [isTouchedPassword, setIsTouchedPassword] = useState(false);

  const onConfirm = async () => {
    let phoneNumber = '+84395965414';
    let username = 'lasdafvzxv';
    let avatarUrl =
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60';
    dispatch(
      registerNewUserHandle(
        {
          userData: {
            username,
            firstName: '1241*',
            lastName: 'N*azxs*',
            age: 22,
            followers: '',
            following: '',
            description: '',
            phoneNumber: phoneNumber,
            uid: phoneNumber,
            avatarUrl,
          },
          uid: phoneNumber,
          auth: {
            username: username,
            password: 'Qwe123456!',
            phoneNumber: phoneNumber,
          },
        },
        () => {},
        () => {},
      ),
    );
  };
  // useEffect(() => {
  //   onConfirm();
  // }, []);

  return (
    <LoginView
      formikRef={formikRef}
      onLogin={onLogin}
      setFocusUsername={setFocusUsername}
      setIsTouchedUsername={setIsTouchedUsername}
      maxLength={maxLength}
      onChangePassword={onChangePassword}
      onChangePhoneNumber={onChangePhoneNumber}
      setFocusPassword={setFocusPassword}
      setIsTouchedPassword={setIsTouchedPassword}
      isTouchedUsername={isTouchedUsername}
      errorMsgPassword={errorMsgPassword}
      isTouchedPassword={isTouchedPassword}
      errorMsgUsername={errorMsgUsername}
      focusUsername={focusUsername}
      focusPassword={focusPassword}
      dot={dot}
    />
  );
};

export default LoginContainer;
