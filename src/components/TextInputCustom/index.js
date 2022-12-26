import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
//import {getNightModeSelector} from '../../redux/nightMode/nightMode.selectors';
import styles from './styles';
import {useSelector} from 'react-redux';

const TextInputCustom = React.forwardRef(
  (
    {
      title,
      value,
      isSecure,
      errorMessage,
      forgotPassword,
      keyboardType,
      onChange,
      onBlur,
      textInputStyle,
      placeHolder,
      maxLength,
      iconRight,
      onPressIconRight,
      iconLeft,
      onPressIconLeft,
      textStyle,
      numberOfLines,
      editable,
      titleStyle,
      isTouched,
      setTouched,
      rightIconWrapperStyle,
      disableTextInput,
      isDisableTextInput,
    },
    refInput,
  ) => {
    //console.log('TextInputCustom re-render', textInputStyle);
    // const isNightMode = useSelector(getNightModeSelector);
    return (
      <View style={styles().inputView}>
        <View style={styles().titleView}>
          {!!title && (
            <Text style={[styles().titleInput, titleStyle]}>{title}</Text>
          )}
          {!!forgotPassword && (
            <Text style={styles().titleInput}>{forgotPassword}</Text>
          )}
        </View>
        <View
          style={[
            styles().textInputContainer,
            textInputStyle,
            isTouched && !!errorMessage ? styles().withErr : {},
          ]}>
          {!!iconLeft && (
            <TouchableOpacity
              onPress={() => !!onPressIconLeft && onPressIconLeft()}>
              {iconLeft}
            </TouchableOpacity>
          )}
          {isDisableTextInput ? (
            <Text style={[styles().textInputDis, textStyle]}>{value}</Text>
          ) : (
            <TextInput
              ref={refInput}
              style={[styles().textInput, textStyle]}
              value={value}
              onChangeText={onChange}
              secureTextEntry={!!isSecure}
              keyboardType={keyboardType}
              onBlur={onBlur}
              placeholder={placeHolder}
              placeholderTextColor={styles().placeHolderTextColor}
              maxLength={maxLength}
              numberOfLines={numberOfLines}
              editable={editable}
            />
          )}
          {!!iconRight && (
            <TouchableOpacity
              style={[styles().rightIcon, rightIconWrapperStyle]}
              onPress={() => !!onPressIconRight && onPressIconRight()}>
              {iconRight}
            </TouchableOpacity>
          )}
        </View>
        {setTouched ? (
          <Text style={styles().errorText}>
            {isTouched && !!errorMessage ? errorMessage : null}
          </Text>
        ) : (
          <Text style={styles().errorText}>
            {errorMessage ? errorMessage : null}
          </Text>
        )}
      </View>
    );
  },
);

export default React.memo(TextInputCustom);
