import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {Path, Svg} from 'react-native-svg';
import {COLORS} from '../../constants/colors';
import {scale, scaleHeight} from '../../utils/fontConfig';
import {IMAGES} from '../../constants/images';

const LoginView = ({data = []}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{flex: 1, paddingLeft: 15, paddingRight: 15, borderRadius: 5}}
      /> */}
      <ImageBackground
        source={IMAGES.LOGIN_BACKGROUND}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </SafeAreaView>
  );
};

export default LoginView;
