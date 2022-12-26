import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {ICONS} from '../../constants/icons';
import LottieView from 'lottie-react-native';

const Loading = ({...props}) => {
  return (
    <View style={styles.container}>
      <View style={styles.activityIndicator}>
        <LottieView source={ICONS.LOADING} autoPlay loop />
      </View>
    </View>
  );
};

export default React.memo(Loading);
