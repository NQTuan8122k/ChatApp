import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils/fontConfig';

const styles = isNightMode =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    errorMessage: {
      color: COLORS.red,
      fontSize: FONT_SIZE.SMALL,
      width: '80%',
      textAlign: 'left',
      paddingLeft: scale(10),
      marginBottom: scaleHeight(12),
    },
    textInputStyles: {
      fontSize: FONT_SIZE.NORMAL,
      color: COLORS.black,
      fontWeight: '400',
      flex: 1,
    },
  });

export default styles;
