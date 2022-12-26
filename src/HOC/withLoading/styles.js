import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {SPACE} from '../../constants/space';

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
  },
  container: {
    position: 'absolute',
    top: SPACE.NONE,
    left: SPACE.NONE,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
  activityIndicator: {
    position: 'absolute',
    top: SPACE.NONE,
    left: SPACE.NONE,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: COLORS.gray_light,
  },
});

export default styles;
