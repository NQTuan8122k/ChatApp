import React from 'react';
import {
  Animated,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Icon} from '../../components';
import {COLORS} from '../../constants/colors';
import {FONT_SIZE} from '../../constants/fonts';
import {HttpImage} from '../../helpers/httpImage';
import {scale, scaleHeight} from '../../utils/fontConfig';

const DetailView = ({data}) => {
  const animatedScrollY = React.useRef(new Animated.Value(0)).current;

  const withHeightAnimation = animatedScrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [25, 0],
    extrapolate: 'clamp',
  });

  const heightAnimation = animatedScrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [75, 40],
    extrapolate: 'clamp',
  });
  const flatListRef = React.useRef();

  const renderItem = item => {
    return (
      <View
        style={[
          styles.row,
          {
            width: scale(110),
            marginRight: scale(5),
            height: scaleHeight(40),
          },
        ]}>
        <Icon
          category={item?.category}
          name={item?.iconName}
          color={item?.color}
          size={18}
          wrapperStyle={styles.wrapperStyle}
        />
        <View>
          <Text>{item?.name}</Text>
          <Text>
            {item?.value} ({item?.unit})
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.imageContainer}>
      <Image
        source={{
          uri: HttpImage(data?.imageUrl?.[3]),
        }}
        resizeMode="stretch"
        style={styles.image}
      />
      <View style={styles.shadow} />
      <View style={styles.shadow} />
      <ScrollView
        ref={flatListRef}
        style={styles.marginTop}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.bodyContainer}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {y: animatedScrollY}},
            },
          ],
          {
            useNativeDriver: false,
          },
        )}>
        <View style={styles.rowBetween}>
          <Text style={styles.title}>{data?.name}</Text>
          <View style={styles.heartContainer}>
            <Icon
              name="heart"
              category="Ionicons"
              color={COLORS.red}
              size={18}
            />
          </View>
        </View>

        <View style={styles.rowS}>
          <Icon
            name="location-pin"
            category="Entypo"
            color={COLORS.orange}
            size={16}
          />
          <Text style={styles.locationText}>{data?.location}</Text>
        </View>
        <FlatList
          style={{
            marginBottom: scaleHeight(10),
            marginTop: scaleHeight(10),
            maxHeight: scaleHeight(50),
          }}
          showsHorizontalScrollIndicator={false}
          data={data?.info}
          keyExtractor={item => item?.name}
          renderItem={({item, index}) => renderItem(item, index)}
          horizontal
          scrollEnabled={false}
        />
        <Text numberOfLines={null}>{data?.sortDescription}</Text>
      </ScrollView>

      <Animated.View style={styles.buttonContainer(withHeightAnimation)}>
        <Animated.Text
          style={{color: COLORS.white, fontSize: FONT_SIZE.NORMAL, zIndex: 3}}>
          sfsafass
        </Animated.Text>
      </Animated.View>
      <Animated.View
        style={{
          height: heightAnimation,
          width: scale(375),
          position: 'absolute',
          bottom: 0,
          left: 0,
          zIndex: 1,
        }}>
        <Animated.View
          style={{flex: 1, opacity: 0.6, backgroundColor: COLORS.white}}
        />
        <Animated.View
          style={{
            width: '100%',
            height: 55,
            backgroundColor: COLORS.white,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}
        />
      </Animated.View>
    </View>
  );
};
export default DetailView;
const styles = StyleSheet.create({
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowS: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  wrapperStyle: {
    borderColor: COLORS.gray_light,
    borderWidth: scale(1),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    height: scaleHeight(35),
    width: scaleHeight(35),
    borderRadius: scale(40),
    marginRight: scale(5),
  },
  imageContainer: {
    backgroundColor: COLORS.backgroundColor,
    flex: 1,
  },
  image: {
    height: '50%',
    width: '100%',
    borderRadius: scale(14),
  },
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.4,
    shadowRadius: 16.0,

    elevation: 22,
    height: scaleHeight(10),
    width: '70%',
    alignSelf: 'center',
    borderRadius: scale(8),
  },
  marginTop: {
    marginTop: scaleHeight(20),
  },
  bodyContainer: {
    paddingHorizontal: scale(15),
    paddingBottom: scaleHeight(70),
    //   backgroundColor: 'red',
    justifyContent: 'flex-start',
  },
  title: {
    color: COLORS.black,
    fontSize: FONT_SIZE.XX_LARGE,
    fontWeight: '500',
  },
  heartContainer: {
    borderRadius: scale(20),
    alignItems: 'center',
    width: scaleHeight(26),
    height: scaleHeight(26),
    justifyContent: 'center',
    paddingTop: scale(1.5),
    borderColor: COLORS.pinkBorder,
    borderWidth: scale(1),
    backgroundColor: COLORS.pinkBackground,
  },
  locationText: {
    color: COLORS.gray,
    fontSize: FONT_SIZE.NORMAL,
    width: scale(60),
  },
  buttonContainer: withHeightAnimation => {
    return {
      position: 'absolute',
      bottom: withHeightAnimation,
      left: 35,
      width: scale(305),
      backgroundColor: COLORS.orange,
      justifyContent: 'center',
      paddingVertical: scaleHeight(10),
      alignItems: 'center',
      borderRadius: scale(8),
      opacity: 0.9,
      zIndex: 5,
    };
  },
});
