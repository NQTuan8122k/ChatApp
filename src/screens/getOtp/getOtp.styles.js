import {StyleSheet} from 'react-native';
import {scale, scaleHeight} from '../../utils/fontConfig';
import {COLORS} from '../../constants/colors';
import {FONT_SIZE} from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  titleContainer: {
    alignItems: 'center',
    zIndex: 4,
    top: -scaleHeight(150),
    flex: 1,
  },
  title: {
    color: COLORS.GST_Blue,
    fontSize: FONT_SIZE.XX_LARGE,
    fontWeight: '600',
    marginBottom: scaleHeight(40),
  },
  imageBackground: {
    width: scaleHeight(400),
    height: scaleHeight(400),
    left: -scale(75),
    top: -scaleHeight(150),
    marginBottom: scaleHeight(50),
  },

  validateContainer: {
    width: '100%',
    paddingHorizontal: scale(40),
    height: '100%',
  },
  headerText: {
    color: COLORS.black,
    fontWeight: '600',
    fontSize: FONT_SIZE.LARGE,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  regionCode: {
    justifyContent: 'center',
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: scale(1),
    paddingVertical: scaleHeight(4),
    marginRight: scale(10),
  },
  codeText: {
    color: COLORS.black,
    fontSize: FONT_SIZE.MEDIUM,
    fontWeight: '600',
    paddingHorizontal: scale(10),
  },
  textInput: {
    position: 'absolute',
    right: 0,
    color: COLORS.black,
    fontSize: FONT_SIZE.MEDIUM,
    fontWeight: '600',
    paddingLeft: scale(10),
    width: scale(250),
    zIndex: 10,
    opacity: 0,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: scale(1),
    paddingVertical: scaleHeight(4),
  },
  textStyles: {
    width: '100%',
    color: COLORS.black,
    fontSize: FONT_SIZE.MEDIUM,
    fontWeight: '600',
    paddingLeft: scale(15),
    textAlign: 'left',
  },
  disabled: {
    color: COLORS.gray,
  },
  disabledBackground: {
    backgroundColor: COLORS.gray,
  },
  errorsMsg: {
    color: COLORS.red,
    fontSize: FONT_SIZE.SMALL,
    width: '100%',
    textAlign: 'center',
    marginTop: scaleHeight(5),
  },
  bottomContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: scaleHeight(30),
    left: 0,
    width: '100%',
    paddingHorizontal: '10%',
  },
  buttonContainer: {
    width: '100%',
    height: scaleHeight(40),
    borderRadius: scale(15),
    backgroundColor: '#00A3FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scaleHeight(25),
  },
  buttonText: {
    fontSize: FONT_SIZE.NORMAL,
    color: COLORS.white,
    fontWeight: '700',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: scale(40),
    height: scaleHeight(20),
    marginBottom: scaleHeight(25),
  },
  indicator: {
    backgroundColor: '#AAAAAA',
    height: scaleHeight(1),
    width: scale(120),
  },
  indicatorText: {
    color: '#999999',
    fontSize: FONT_SIZE.NORMAL,
    fontWeight: '400',
    marginHorizontal: scale(10),
  },
  loginContainer: {
    paddingHorizontal: scale(24),
    paddingVertical: scaleHeight(8),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: scale(12),
    borderWidth: scale(1.5),
    borderColor: '#00A3FF',
  },
  loginText: {
    color: COLORS.black,
    fontSize: FONT_SIZE.SMALL,
    fontWeight: '400',
  },
});

export default styles;
