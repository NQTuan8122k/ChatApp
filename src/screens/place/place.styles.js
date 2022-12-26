import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils/fontConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    paddingTop: scaleHeight(15),
    paddingHorizontal: scaleHeight(15),
    paddingBottom: scaleHeight(25),
  },
  greeting: {
    color: COLORS.gray_dark,
    fontSize: FONT_SIZE.MEDIUM,
  },
  question: {
    color: COLORS.black,
    fontSize: FONT_SIZE.XX_LARGE,
    fontWeight: '700',
  },
  labelContainer: {
    flexDirection: 'row',
    marginRight: scale(10),
    paddingHorizontal: scale(10),
    paddingVertical: scaleHeight(7),
    alignItems: 'center',
    borderRadius: scale(4),
    height: scaleHeight(35),
  },
  cardItemContainer: {
    backgroundColor: COLORS.white,
    borderRadius: scale(16),
    paddingHorizontal: scale(7),
    marginRight: scale(15),
    borderColor: COLORS.gray_light,
    borderWidth: scale(1),
    justifyContent: 'center',
  },
  cardText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(10),
    paddingVertical: scaleHeight(5),
    alignItems: 'center',
  },
  placeName: {
    color: COLORS.black,
    fontWeight: '600',
    fontSize: FONT_SIZE.NORMAL,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: COLORS.gray,
    fontWeight: '400',
    fontSize: FONT_SIZE.SMALL,
    marginLeft: scale(5),
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
