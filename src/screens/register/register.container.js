import React, {useCallback, useState} from 'react';
import RegisterView from './register.view';

const RegisterContainer = props => {
  const phoneNumber = props?.route?.params?.phoneNumber;
  const uid = props?.route?.params?.uid;

  return <RegisterView phoneNumber={phoneNumber} uid={uid} />;
};

export default RegisterContainer;
