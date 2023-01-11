import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';
//import {getNightModeSelector} from '../../redux/nightMode/nightMode.selectors';
import styles from './styles';
import {useSelector} from 'react-redux';
import {scale, scaleHeight} from '../../utils/fontConfig';
import {ICONS} from '../../constants/icons';
import {COLORS} from '../../constants/colors';
import {FONT_SIZE} from '../../constants/fonts';

const TextInputCustom = ({
  wrapperStyle,
  value,
  wrapperInputStyle,
  placeHolder,
  onChangeText,
  onBlur = () => {},
  onFocus = () => {},
  errorMessage,
  numberOfLines,
  maxLength,
  editable,
  placeHolderTextColor,
  isSecure,
  keyboardType,
  onPressIconLeft = () => {},
  iconLeft,
  iconRight,
  onPressIconRight,
  rightIconWrapperStyle,
  isTouched,
  setTouched,
}) => {
  return (
    <>
      <View style={[wrapperStyle, styles().container]}>
        {!!iconLeft && (
          <TouchableOpacity
            onPress={() => !!onPressIconLeft && onPressIconLeft()}>
            {iconLeft}
          </TouchableOpacity>
        )}
        <TextInput
          placeholder={placeHolder}
          style={[styles().textInputStyles, wrapperInputStyle]}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          numberOfLines={numberOfLines}
          editable={editable}
          maxLength={maxLength}
          placeholderTextColor={placeHolderTextColor}
          secureTextEntry={!!isSecure}
          keyboardType={keyboardType}
        />
        {!!iconRight && (
          <TouchableOpacity
            style={[styles().rightIcon, rightIconWrapperStyle]}
            onPress={() => !!onPressIconRight && onPressIconRight()}>
            {iconRight}
          </TouchableOpacity>
        )}
      </View>
      {!!setTouched ? (
        <Text style={styles().errorMessage}>
          {isTouched && !!errorMessage ? errorMessage : null}
        </Text>
      ) : (
        <Text style={styles().errorMessage}>
          {!!errorMessage ? errorMessage : null}
        </Text>
      )}
    </>
  );
};

export default React.memo(TextInputCustom);
