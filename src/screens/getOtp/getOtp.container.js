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
import {getOtpHandle} from '../../redux/signup/signup.actions';
import NavigationServices from '../../utils/navigationServices';
import GetOtpView from './getOtp.view';

const GetOtpContainer = () => {
  // useEffect(() => {
  //   try {
  //     auth()?.signOut();
  //   } catch (error) {}
  // }, []);

  const formikRef = useRef(null);
  const [maxLength, setMaxLength] = useState(10);

  const dispatch = useDispatch();

  const onPressContinue = () => {
    let newPhone = formikRef?.current?.values?.phoneNumber?.replace(/\s+/g, '');
    newPhone = newPhone.charAt(0) == '0' ? newPhone.slice(1) : newPhone;

    dispatch(
      getOtpHandle(
        {phoneNumber: '+84' + newPhone},
        () =>
          NavigationServices.navigate(SCREEN_NAME.OTP_SCREEN, {
            phoneNumber: '+84' + newPhone,
          }),
        () => {},
      ),
    );
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

  const onlogin = useCallback(
    () => NavigationServices.navigate(SCREEN_NAME.LOGIN_SCREEN),
    [],
  );
  const [focus, setFocus] = useState(false);
  return (
    <GetOtpView
      onPressContinue={onPressContinue}
      formikRef={formikRef}
      focus={focus}
      setFocus={setFocus}
      onChangePhoneNumber={onChangePhoneNumber}
      maxLength={maxLength}
      onlogin={onlogin}
    />
  );
};

export default GetOtpContainer;
