import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {confirmOtpHandle} from '../../redux/signup/signup.actions';
import NavigationServices from '../../utils/navigationServices';
import auth from '@react-native-firebase/auth';

import ConfirmOTPView from './confirmOTP.view';
import {SCREEN_NAME} from '../../constants/screenName';

const ConfirmOTPContainer = props => {
  const phoneNumber = props?.route?.params?.phoneNumber;
  const [countDown, setCountDown] = useState(60);
  const [codeOTP, setCodeOTP] = useState('');
  const onCodeChanged = useCallback(code => setCodeOTP(code), []);
  const dispatch = useDispatch();
  const confirmVerificationCode = () => {
    try {
      dispatch(
        confirmOtpHandle(
          {OtpCode: codeOTP},
          () => {
            auth().onAuthStateChanged(user => {
              if (user) {
                let uid = auth()?.currentUser?.uid;
                NavigationServices.navigate(SCREEN_NAME.REGISTER_SCREEN, {
                  phoneNumber,
                  uid,
                });
              }
            });
          },
          () => console.log('======== fail confirm'),
        ),
      );
    } catch (error) {
      console.log('-------------- fail otp');
    }
  };

  useEffect(() => {
    const timeCountDown = setInterval(() => {
      if (countDown > 0) {
        setCountDown(pre => pre - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timeCountDown);
    };
  }, [countDown]);

  return (
    <ConfirmOTPView
      countDown={countDown}
      codeOTP={codeOTP}
      onCodeChanged={onCodeChanged}
      confirmVerificationCode={confirmVerificationCode}
      phoneNumber={phoneNumber}
    />
  );
};

export default ConfirmOTPContainer;
