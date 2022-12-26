import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/colors';
import {FONT_SIZE} from '../../../../constants/fonts';
import {scale, scaleHeight} from '../../../../utils/fontConfig';

const styles = StyleSheet.create({
  container: {
    marginTop: scaleHeight(20),
  },
  image: {
    height: scaleHeight(220),
    width: scale(345),
    borderRadius: scaleHeight(25),
    borderColor: COLORS.gray_light,
    borderBottomWidth: scale(1),
    borderRightWidth: scale(2),
  },
  itemContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
  },
  container1: {
    width: '100%',
    alignItems: 'center',
    marginTop: scaleHeight(35),
  },
  card: {
    width: '90%',
    height: '90%',
    position: 'absolute',
    backgroundColor: 'red',
  },
  image1: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  text: {
    position: 'absolute',
    top: 50,
    fontSize: 32,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  likeText: {
    left: 20,
    color: '#32CD32',
    borderColor: '#32CD32',
  },
  nopeText: {
    right: 20,
    color: 'red',
    borderColor: 'red',
  },
  flatListContentStyle: {
    width: scale(345),
    flexGrow: 1,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  footerContainer: {
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
  },
  pagView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: scaleHeight(20),
  },
  pagContainer: {
    padding: scale(2),
    borderColor: COLORS.orange,
    marginRight: scale(5),
    borderRadius: scale(15),
  },
  dot: {
    borderRadius: scale(20),
    height: scaleHeight(7),
    width: scaleHeight(7),
  },
  textContainer: {
    position: 'absolute',
    bottom: scale(10),
    left: scale(20),
    zIndex: 10,
  },
  indicatorView: {
    position: 'absolute',
    bottom: scale(0),
    left: scale(0),
    backgroundColor: COLORS.white,
    zIndex: 10,
    height: '100%',
    width: '100%',
    opacity: 0.2,
    borderRadius: scale(4),
  },
  locationName: {
    fontSize: FONT_SIZE.MEDIUM,
    color: COLORS.white,
    fontWeight: '400',
  },
  location: {
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.white,
    fontWeight: '400',
  },
});

export default styles;
