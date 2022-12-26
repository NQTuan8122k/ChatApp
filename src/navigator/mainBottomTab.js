import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect} from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SCREEN_NAME} from '../constants/screenName';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from '../constants/colors';
import {ICONS} from '../constants/icons';
import {windowWidth} from '../constants/sizeScreen';
import {scale, scaleHeight} from '../utils/fontConfig';
import DetailContainer from '../screens/detail/detail.container';
import PlaceContainer from '../screens/place/place.container';
import SettingContainer from '../screens/setting/setting.container';
import HomeView from '../screens/home/home.view';
import {Icon} from '../components';
import {Path, Svg} from 'react-native-svg';

const TabButton = props => {
  const {icon, onPress, accessibilityState} = props;
  const insets = useSafeAreaInsets();
  const focused = accessibilityState.selected;
  const iconAnimation = useSharedValue(1);
  const iconAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: iconAnimation.value}],
    };
  });

  useEffect(() => {
    if (focused) {
      iconAnimation.value = withTiming(1.25);
    } else {
      iconAnimation.value = withTiming(1);
    }
  }, [focused, iconAnimation]);

  return (
    <View style={styles.containerTabButton(insets.bottom)}>
      <TouchableOpacity onPress={onPress} activeOpacity={1}>
        <View style={styles.viewTabButton}>
          <Animated.Image
            source={icon}
            style={[
              {
                height: scaleHeight(25),
                aspectRatio: 1,
                tintColor: focused ? COLORS.primary : COLORS.gray_dark,
              },
              iconAnimationStyle,
            ]}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const StackHome = createNativeStackNavigator();
const StackHomeNavigation = () => {
  return (
    <StackHome.Navigator
      screenOptions={{headerShown: false, animationEnabled: false}}>
      <StackHome.Screen
        name={SCREEN_NAME.SETTING_SCREEN}
        component={SettingContainer}
        options={{
          headerShown: false,
        }}
      />

      {/* <StackHome.Screen
        name={SCREEN_NAME.PLACE_SCREEN}
        component={PlaceContainer}
        options={{
          headerShown: false,
        }}
      /> */}
      {/* <StackHome.Screen
        name={SCREEN_NAME.DETAIL_SCREEN}
        component={HomeView}
        options={{
          headerShown: false,
        }}
      />
      <StackHome.Screen
        name={SCREEN_NAME.DETAIL_SCREEN}
        component={DetailContainer}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      /> */}
    </StackHome.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();
const MainBottomTab = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        // paddingHorizontal: scale(15),
        // justifyContent: 'flex-end',
        backgroundColor: COLORS.pinkBorder,
      }}>
      {/* <Svg
        width={200}
        height={50}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: scaleHeight(10),
          left: scale(130),
          zIndex: 10,
        }}>
        <Path
          d={
            'M32.333 6C17.608 6 5.667 17.819 5.667 32.4c0 11.77 4.666 39.707 50.602 67.947a5.26 5.26 0 0 0 5.462 0c45.936-28.24 50.602-56.176 50.602-67.947 0-14.581-11.941-26.4-30.666-26.4C70.94 6 59 22 59 22S47.059 6 32.333 6Z'
          }
          fill={COLORS.GST_Blue}
        />
      </Svg> */}
      <View
        style={{
          position: 'absolute',
          bottom: scaleHeight(20),
          left: scale(375 / 2 - 5),
          zIndex: 10,
        }}>
        <View
          style={{
            height: scaleHeight(10),
            width: scaleHeight(10),
            backgroundColor: COLORS.pinkBorder,
            borderRadius: scale(100),
          }}
        />
        <View
          style={{
            height: scaleHeight(19),
            width: scaleHeight(19),
            backgroundColor: COLORS.GST_Blue,
          }}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: scaleHeight(36),
          left: scale(375 / 2 - 3),
          zIndex: 10,
          height: scaleHeight(6),
          width: scaleHeight(6),
          backgroundColor: COLORS.pinkBorder,
          borderRadius: scale(100),
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: scaleHeight(42),
          left: scale(360 / 2 - 20),
          zIndex: 10,
        }}>
        <Icon
          category={'MaterialIcons'}
          name={'add-location'}
          size={55}
          color={COLORS.white}
        />
      </View>

      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
          keyboardHidesTabBar: true,
          showLabel: false,
          tabBarStyle: styles.tabBarStyle,
          // tabBarStyle: styles.tabBarStyle(insets.bottom),
        }}>
        <BottomTab.Screen
          name={SCREEN_NAME.HOME_SCREEN}
          component={StackHomeNavigation}
          options={{
            tabBarShowLabel: false,
            tabBarButton: props => (
              <View
                style={{
                  height: '100%',
                  width: '25%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.GST_Blue,
                }}>
                <Icon
                  category={'MaterialIcons'}
                  name={'local-fire-department'}
                  size={scale(25)}
                  color={COLORS.white}
                />
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name={SCREEN_NAME.DETAIL_SCREEN}
          component={DetailContainer}
          options={{
            tabBarShowLabel: false,
            tabBarButton: props => (
              <View
                style={{
                  height: '100%',
                  width: '25%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  // borderRadius: scale(50),
                  borderTopRightRadius: scale(43),
                  backgroundColor: COLORS.GST_Blue,
                  zIndex: 22,
                }}>
                <Icon
                  category={'MaterialIcons'}
                  name={'local-fire-department'}
                  size={scale(25)}
                  color={COLORS.white}
                />
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name={SCREEN_NAME.PLACE_SCREEN}
          component={PlaceContainer}
          options={{
            tabBarShowLabel: false,
            tabBarButton: props => (
              <View
                style={{
                  height: '100%',
                  width: '25%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.GST_Blue,
                  borderTopLeftRadius: scale(43),
                }}>
                <Icon
                  category={'MaterialIcons'}
                  name={'local-fire-department'}
                  size={scale(25)}
                  color={COLORS.white}
                />
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name={SCREEN_NAME.TEST_SCREEN}
          component={PlaceContainer}
          options={{
            tabBarShowLabel: false,
            tabBarButton: props => (
              <View
                style={{
                  height: '100%',
                  width: '25%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.GST_Blue,
                }}>
                <Icon
                  category={'MaterialIcons'}
                  name={'local-fire-department'}
                  size={scale(25)}
                  color={COLORS.white}
                />
              </View>
            ),
          }}
        />
      </BottomTab.Navigator>
      <View
        style={{
          width: '25%',
          height: scaleHeight(2),
          backgroundColor: 'red',
          alignSelf: 'center',
          marginBottom: scaleHeight(5),
          borderRadius: scale(5),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerTabButton: insetsBottom => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? scaleHeight(15) : 0,
  }),
  viewTabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 0.15,
    borderColor: 'transparent',
  },
  // tabBarStyle: insetsBottom => ({
  //   paddingBottom: insetsBottom,
  //   shadowColor: 'transparent',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // }),
  tabBarStyle: {
    shadowColor: 'transparent',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: scale(15),
    height: scaleHeight(55),
    borderRadius: scale(20),
    marginBottom: scale(5),
    backgroundColor: COLORS.pinkBorder,
  },
});

export default MainBottomTab;
