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

const TextInputCustom = React.forwardRef(
  (
    {value, placeHolder, onChangeText, onBlur = () => {}, onFocus = () => {}},
    refInput,
  ) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          // minHeight: scaleHeight(36),
          borderRadius: scaleHeight(18),
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingLeft: scale(15),
          maxHeight: scaleHeight(135),
        }}>
        <TextInput
          defaultValue={'Aa'}
          value={value}
          ref={refInput}
          // numberOfLines={1}
          keyboardType={'ascii-capable'}
          multiline
          onChangeText={onChangeText}
          placeholder={placeHolder}
          placeholderTextColor={{
            color: '#999999',
            fontSize: FONT_SIZE.MEDIUM,
            fontWeight: '400',
          }}
          style={{
            color: COLORS.black,
            fontSize: FONT_SIZE.MEDIUM,
            fontWeight: '400',
            flex: 1,
            maxWidth: scale(285),
          }}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        <Image
          source={ICONS.EMOIJ}
          style={{
            width: scaleHeight(22),
            height: scaleHeight(24),
            tintColor: COLORS.blue,
            position: 'absolute',
            bottom: scaleHeight(10),
            right: scale(5),
          }}
          resizeMode={'contain'}
        />
      </View>
    );
  },
);

export default React.memo(TextInputCustom);
