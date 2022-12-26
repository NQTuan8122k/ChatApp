import React, {useCallback, useState} from 'react';
import {View, Text} from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scaleHeight} from '../../utils/fontConfig';
import styles from './styles';

const withToast = WrappedComponent => props => {
  const [type, setType] = useState('success');
  const setTypeStatus = useCallback(type => setType(type), []);
  const insets = useSafeAreaInsets();

  const [message, setMessage] = useState('');
  const sendMessage = useCallback(name => setMessage(name), []);

  const translateY = useSharedValue(0);

  const translateYStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  const startToast = useCallback(() => {
    translateY.value = withSequence(
      withTiming(scaleHeight(250) + insets.top, {duration: 800}),
      withTiming(0, {duration: 2800}),
    );
  }, [insets]);

  return (
    <>
      <Animated.View style={[styles().container, translateYStyle]}>
        <View style={styles().toastView}>
          <View style={styles(type).statusView} />
          <Text style={styles().messageText}>{message}</Text>
        </View>
      </Animated.View>

      <WrappedComponent
        {...props}
        setTypeStatus={setTypeStatus}
        sendMessage={sendMessage}
        startToast={startToast}
      />
    </>
  );
};

export default withToast;
