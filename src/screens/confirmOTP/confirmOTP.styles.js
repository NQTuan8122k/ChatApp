import {StatusBar, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils/fontConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: scaleHeight(StatusBar.currentHeight),
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    height: scaleHeight(44),
    paddingHorizontal: scale(20),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: scale(25),
    paddingTop: scaleHeight(15),
  },
  imageStyle: {
    height: scaleHeight(200),
  },
  titleText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.X_LARGE,
    color: COLORS.black,
    marginVertical: scaleHeight(5),
  },
  normalText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: COLORS.black,
    textAlign: 'center',
  },
  countDownContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: scaleHeight(15),
    alignItems: 'center',
  },
  countDownText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.LARGE,
    color: COLORS.darkRed,
    marginLeft: scale(5),
  },
  countDownText1: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.LARGE,
    color: COLORS.blue,
    marginLeft: scale(5),
  },
  inputOTPContainer: {
    marginVertical: scaleHeight(15),
    height: scaleHeight(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeInputFieldStyle: {
    borderRadius: scale(10),
    borderColor: COLORS.radiantYellow,
    color: COLORS.black,
    fontSize: FONT_SIZE.MEDIUM,
    fontFamily: FONT_FAMILY.BOLD,
  },
  helpContainer: {
    flexDirection: 'row',
    marginBottom: scaleHeight(15),
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
});

export default styles;
