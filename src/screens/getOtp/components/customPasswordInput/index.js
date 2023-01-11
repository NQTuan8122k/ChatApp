import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {scale, scaleHeight} from '../../../../utils/fontConfig';
import {FONT_SIZE} from '../../../../constants/fonts';

const CustomPassword = ({value = '', onChangeValue, placeholder = ''}) => {
  const renderDot = useCallback((text = '') => {
    let tmp = '⚫';
    return tmp.repeat(text.length);
  }, []);
  let dot = renderDot(value);
  return (
    <>
      <TextInput
        value={value ? dot : ''}
        // secureTextEntry={true}
        onChangeText={onChangeValue}
        style={{
          textAlign: 'left',
          width: scale(310),
          fontSize: scaleHeight(8),
        }}
        underlineColorAndroid={'#AAAAAA'}
      />
    </>
  );
};
export default CustomPassword;
const styles = StyleSheet.create({});
