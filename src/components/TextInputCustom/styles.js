import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils/fontConfig';

const styles = isNightMode =>
  StyleSheet.create({
    inputView: {
      //height: scaleHeight(150),
      width: '100%',
      marginVertical: scaleHeight(10),
    },
    titleView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: scaleHeight(5),
    },
    titleInput: {
      fontFamily: FONT_FAMILY.BOLD,
      fontSize: FONT_SIZE.NORMAL,
      color: isNightMode ? COLORS.white : COLORS.lightBlack,
    },
    textInput: {
      flexGrow: 1,
      // width: '100%',
      height: scaleHeight(40),
      fontFamily: FONT_FAMILY.REGULAR,
      color: COLORS.black,
      fontSize: FONT_SIZE.MEDIUM,
      paddingVertical: scaleHeight(5),
    },
    errorText: {
      fontFamily: FONT_FAMILY.REGULAR,
      fontSize: FONT_SIZE.NORMAL,
      color: COLORS.red,
    },
    placeHolderTextColor: {
      color: COLORS.grey,
    },
    textInputContainer: {
      // flex: 1,
      flexDirection: 'row',
      // width: '100%',
      height: scaleHeight(50),
      // borderBottomWidth: scaleHeight(2),
      // borderBottomColor: COLORS.grey,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: scale(10),
      backgroundColor: COLORS.white,
      borderRadius: scale(8),
    },
    withErr: {
      borderColor: COLORS.red,
      borderWidth: 1,
    },
    rightIcon: {
      marginLeft: scale(15),
    },
    textInputDis: {
      flex: 1,
      width: '100%',
      fontFamily: FONT_FAMILY.REGULAR,
      color: COLORS.black,
      fontSize: FONT_SIZE.MEDIUM,
      paddingVertical: scaleHeight(5),
      textAlignVertical: 'center',
      opacity: 0.6,
    },
  });

export default styles;
