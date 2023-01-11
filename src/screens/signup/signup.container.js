import React, {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import {SCREEN_NAME} from '../../constants/screenName';
import NavigationServices from '../../utils/navigationServices';
import SignupView from './signup.view';

const SignupContainer = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorPhone, setErrorPhone] = useState('');
  const [isAcceptPolicy, setIsAcceptPolicy] = useState(true);
  const [confirm, setConfirm] = useState(null);
  const dispatch = useDispatch();
  const onPressContinue = () => {
    () =>
      NavigationServices.navigate(SCREEN_NAME.CONFIRM_CODE, {
        phoneNumber: '+84' + phoneNumber,
      });
  };

  const onChangePhone = useCallback(phone => {
    setPhoneNumber(phone);
  }, []);

  const onChangeAcceptPolicy = useCallback(
    () => setIsAcceptPolicy(pre => !pre),
    [],
  );

  return (
    <SignupView
      phoneNumber={phoneNumber}
      onChangePhone={onChangePhone}
      isAcceptPolicy={isAcceptPolicy}
      onChangeAcceptPolicy={onChangeAcceptPolicy}
      onPressContinue={onPressContinue}
      errorMessage={errorPhone}
      confirm={confirm}
      setConfirm={setConfirm}
    />
  );
};

export default SignupContainer;
