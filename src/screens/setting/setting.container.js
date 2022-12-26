import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';

const SettingContainer = () => {
  return (
    <View style={{backgroundColor: COLORS.pinkBorder, flex: 1}}>
      <Text>settting.container</Text>
    </View>
  );
};

export default SettingContainer;

const style = StyleSheet.create({});
