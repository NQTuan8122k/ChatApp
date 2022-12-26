import React, {useRef} from 'react';
import {Animated, Dimensions, PanResponder, View} from 'react-native';
import {COLORS} from '../../../../constants/colors';
import {HttpImage} from '../../../../helpers/httpImage';
import {scale, scaleHeight} from '../../../../utils/fontConfig';
import styles from './styles';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const CustomCarousel = ({data, nextPicture, prevPicture, currentPicture}) => {
  const currentCardIndex = 4;
  let len = data.length - 1;

  const animatedValue = useRef(new Animated.ValueXY()).current;

  const swipeUp = () => {
    Animated.spring(animatedValue, {
      toValue: {
        x: 0,
        y: windowHeight,
      },
      useNativeDriver: false,
    }).start(() => {
      animatedValue.setValue({x: 0, y: 0});
      nextPicture();
    });
  };

  const swipeDown = () => {
    Animated.spring(animatedValue, {
      toValue: {
        x: 0,
        y: -windowWidth,
      },
      useNativeDriver: false,
    }).start(() => {
      animatedValue.setValue({x: 0, y: 0});
      prevPicture();
    });
  };

  const resetPosition = () => {
    Animated.timing(animatedValue, {
      toValue: {
        x: 0,
        y: 0,
      },
      useNativeDriver: false,
    }).start();
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        animatedValue.setValue({x: gesture.dx, y: gesture.dy});
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dy > windowHeight * 0.1) {
          swipeUp();
        } else if (gesture.dy < -windowHeight * 0.1) {
          swipeDown();
        } else {
          resetPosition();
        }
        animatedValue.setValue({x: 0, y: 0});
      },
    }),
  ).current;

  return (
    <View {...panResponder.panHandlers} style={styles.container}>
      <Animated.FlatList
        contentContainerStyle={styles.flatListContentStyle}
        extraData={data}
        style={{height: scaleHeight(255 + 40)}}
        data={data}
        ListFooterComponent={() => {
          return (
            <View style={styles.footerContainer}>
              <View style={styles.pagView}>
                {[4, 3, 2, 1, 0]?.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={[
                        styles.pagContainer,
                        currentPicture === item ? {borderWidth: scale(1)} : {},
                      ]}>
                      <View
                        style={[
                          styles.dot,
                          currentPicture === item
                            ? {backgroundColor: COLORS.orange}
                            : {backgroundColor: COLORS.gray_light},
                        ]}
                      />
                    </View>
                  );
                })}
              </View>
            </View>
          );
        }}
        renderItem={({item, index}) => {
          let cardAnimation = {};
          let prevCardAnimation = {};
          let childCardAnimation = {};
          if (index === currentCardIndex) {
            cardAnimation = {
              transform: [
                {
                  translateY: animatedValue.y.interpolate({
                    inputRange: [0, windowHeight],
                    outputRange: [0, windowHeight * 1.25],
                    extrapolate: 'clamp',
                  }),
                },
              ],
              opacity: animatedValue.y.interpolate({
                inputRange: [0, windowHeight * 0.3],
                outputRange: [1, 0],
                extrapolate: 'clamp',
              }),
            };
          }

          prevCardAnimation = {
            transform: [
              {
                translateX: animatedValue.y.interpolate({
                  inputRange: [-windowHeight, -windowHeight * 0.5, 0],
                  outputRange: [-15 * 4, windowHeight, 0],
                  extrapolate: 'clamp',
                }),
              },
              {
                translateY: animatedValue.y.interpolate({
                  inputRange: [-windowHeight * 0.5, 0],
                  outputRange: [-28, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
            opacity: animatedValue.y.interpolate({
              inputRange: [-windowHeight, 0],
              outputRange: [1, 0.6],
              extrapolate: 'clamp',
            }),
          };

          childCardAnimation = {
            transform: [
              {
                translateY: animatedValue.y.interpolate({
                  inputRange: [0, windowHeight * 0.25],
                  outputRange: [0, -7],
                  extrapolate: 'clamp',
                }),
              },
              {
                translateX: animatedValue.y.interpolate({
                  inputRange: [0, windowHeight * 0.25],
                  outputRange: [0, -15],
                  extrapolate: 'clamp',
                }),
              },
            ],
            width: animatedValue.y.interpolate({
              inputRange: [0, windowHeight * 0.2],
              outputRange: [
                scale(345 - (currentCardIndex - index) * 30),
                scale(345 - (currentCardIndex - index - 1) * 30),
              ],
              extrapolate: 'clamp',
            }),
            opacity: animatedValue.y.interpolate({
              inputRange: [0, windowHeight * 0.25, windowHeight * 0.5],
              outputRange: [
                1 - (currentCardIndex - index) / 5,
                1,
                1 - (currentCardIndex - index + 1) / 10,
              ],
              extrapolate: 'clamp',
            }),
          };

          let textAnimation = {
            transform: [
              {
                translateY: animatedValue.y.interpolate({
                  inputRange: [0, windowHeight * 0.25],
                  outputRange: [0, -7],
                  extrapolate: 'clamp',
                }),
              },
              {
                translateX: animatedValue.y.interpolate({
                  inputRange: [0, windowHeight * 0.25],
                  outputRange: [0, -15],
                  extrapolate: 'clamp',
                }),
              },
            ],
          };

          return (
            <Animated.View
              key={item}
              style={[
                styles.itemContainer,
                {
                  top: (len - index) * 7,
                  zIndex: -index,
                  left: (len - index) * 15,
                },
                cardAnimation,
                index === 0 ? prevCardAnimation : {},
              ]}>
              <Animated.Image
                source={{
                  uri: HttpImage(item?.image),
                }}
                resizeMode="cover"
                style={[styles.image, childCardAnimation]}
              />

              <Animated.View style={[styles.textContainer, textAnimation]}>
                <Animated.View style={styles.indicatorView} />
                <Animated.Text style={styles.locationName}>
                  {item?.name}
                </Animated.Text>
                <Animated.Text style={styles.location}>
                  {item?.location}
                </Animated.Text>
              </Animated.View>
            </Animated.View>
          );
        }}
        keyExtractor={(item, index) => item?.image}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
};

export default CustomCarousel;
