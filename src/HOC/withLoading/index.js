import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {COLORS} from '../../constants/colors';
import {getLoadingSelector} from '../../redux/loading/loading.selector';
import styles from './styles';
import {ICONS} from '../../constants/icons';
import LottieView from 'lottie-react-native';

function withLoading(WrappedComponent, actionTypes) {
  function HOC({isLoading, ...props}) {
    return (
      <View style={styles.contentView}>
        <WrappedComponent {...props} />
        {isLoading && (
          <View style={styles.container}>
            <View style={styles.activityIndicator}>
              <LottieView source={ICONS.LOADING} autoPlay loop />
            </View>
          </View>
        )}
      </View>
    );
  }
  const mapStateToProps = state => ({
    isLoading: getLoadingSelector(state, actionTypes),
  });
  return connect(mapStateToProps, null)(HOC);
}
export default withLoading;
