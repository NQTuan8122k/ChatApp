import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constants/colors';

const ButtonCustom = ({
  title,
  onPress,
  disable,
  icon,
  styleButton,
  styleText,
  colorLinear,
  useLinear = true,
  ...props
}) => {
  // console.log('ButtonCustom re-render', colorLinear);
  let colorLinearStyle = !!colorLinear?.length
    ? [...colorLinear]
    : [COLORS.blue, COLORS.blue, COLORS.blue];
  return (
    <React.Fragment>
      {useLinear ? (
        <TouchableOpacity
          disabled={disable}
          // style={[styles(disable).container, styleButton]}
          onPress={onPress}>
          <LinearGradient
            colors={colorLinearStyle}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            style={[styles(disable).container, styleButton]}>
            {icon && icon}
            <Text style={[styles().buttonText, styleText]}>{title}</Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          disabled={disable}
          style={[styles(disable).container, styleButton]}
          onPress={onPress}>
          {icon && icon}
          <Text style={[styles().buttonText, styleText]}>{title}</Text>
        </TouchableOpacity>
      )}
    </React.Fragment>
  );
};

export default React.memo(ButtonCustom);
