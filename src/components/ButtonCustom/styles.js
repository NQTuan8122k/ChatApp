import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils/fontConfig';

const styles = disable =>
  StyleSheet.create({
    container: {
      backgroundColor: COLORS.primary,
      borderRadius: scale(8),
      justifyContent: 'center',
      alignItems: 'center',
      opacity: disable ? 0.6 : 1,
      flexDirection: 'row',
    },
    buttonText: {
      fontFamily: FONT_FAMILY.BOLD,
      fontSize: FONT_SIZE.MEDIUM,
      color: COLORS.white,
      paddingVertical: scaleHeight(10),
    },
  });

export default styles;
