import {useState} from 'react';
import {isValidEmail} from '..//helpers/Validate';

const useInputChange = (initVal = '', type = 'text') => {
  const [value, setValue] = useState(initVal || '');

  const onChangeText = text => {
    setValue(text);
  };

  return {
    value,
    onChangeText,
  };
};

export default useInputChange;
