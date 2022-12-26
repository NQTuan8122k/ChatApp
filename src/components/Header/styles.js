import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONT_SIZE} from '../../constants/fonts';
import {scaleHeight} from '../../utils/fontConfig';

const styles = StyleSheet.create({
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundColor,
  },
  image: {
    width: scaleHeight(35),
    height: scaleHeight(35),
    borderRadius: scaleHeight(35),
  },
  user: {
    backgroundColor: COLORS.white,
    padding: scaleHeight(3),
    borderRadius: scaleHeight(100),
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    color: COLORS.gray,
    fontSize: FONT_SIZE.NORMAL,
    marginLeft: scaleHeight(5),
  },
});

export default styles;
