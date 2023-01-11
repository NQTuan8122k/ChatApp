import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const TopBackground = () => {
  return (
    <>
      <View style={styles.backgroundContainer1}>
        <View style={styles.item1} />
        <View style={styles.border1} />
      </View>

      <View style={styles.backgroundContainer2}>
        <View style={styles.item2} />
        <View style={styles.border2} />
      </View>

      <View style={styles.backgroundContainer3}>
        <View style={styles.item3} />
        <View style={styles.border3} />
      </View>

      <View style={styles.backgroundContainer4}>
        <View style={styles.item4} />
        <View style={styles.border4} />
      </View>

      <View style={styles.roundContainer1}>
        <View style={styles.roundItem1} />
        <View style={styles.round1} />
        <View style={styles.roundround1} />
      </View>

      <View style={styles.roundContainer2}>
        <View style={styles.roundItem2} />
        <View style={styles.round2} />
        <View style={styles.roundround2} />
      </View>

      <View style={styles.roundContainer3}>
        <View style={styles.roundItem3} />
        <View style={styles.round3} />
        <View style={styles.roundround3} />
      </View>

      <View style={styles.roundContainer4}>
        <View style={styles.roundItem4} />
        <View style={styles.round4} />
        <View style={styles.roundround4} />
      </View>
    </>
  );
};

export default React.memo(TopBackground);
