import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils/fontConfig';

const windowWidth = Dimensions.get('screen').width;
const styles = type =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      height: scaleHeight(50),
      width: windowWidth,
      alignItems: 'center',
      top: scaleHeight(-150),
      zIndex: 100,
    },
    toastView: {
      height: '100%',
      width: '90%',
      backgroundColor: COLORS.white,
      flexDirection: 'row',
    },
    statusView: {
      height: '100%',
      width: scale(8),
      backgroundColor: type == 'success' ? COLORS.green : COLORS.red,
    },
    messageText: {
      textAlign: 'center',
      fontSize: FONT_SIZE.NORMAL,
      alignSelf: 'center',
      fontFamily: FONT_FAMILY.REGULAR,
      color: COLORS.black,
      paddingHorizontal: scale(15),
    },
  });

export default styles;
