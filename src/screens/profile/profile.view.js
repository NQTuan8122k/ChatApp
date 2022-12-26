import {
  Animated,
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../constants/colors';
import {scale, scaleHeight} from '../../utils/fontConfig';
import {HttpImage} from '../../helpers/httpImage';
import {USER} from '../../data';
import {FONT_SIZE} from '../../constants/fonts';
import {TabView, SceneMap} from 'react-native-tab-view';

const ProfileView = ({userData, imageData}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'all', title: 'All'},
    {key: 'photos', title: 'Photos'},
    {key: 'videos', title: 'Videos'},
  ]);

  const routeAll = () => (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <FlatList
        contentContainerStyle={{paddingBottom: scaleHeight(50)}}
        showsHorizontalScrollIndicator={false}
        data={imageData}
        numColumns={3}
        keyExtractor={(item, index) => item?.url}
        renderItem={({item, index}) => (
          <View>
            <Image
              source={{
                uri: HttpImage(item?.url),
              }}
              resizeMode="cover"
              style={{
                width: scale(124),
                height: scale(124),
                marginRight: scaleHeight(1),
                marginBottom: scaleHeight(1),
              }}
            />
          </View>
        )}
      />
    </View>
  );

  const routePhotos = () => (
    <View style={{flex: 1, backgroundColor: '#673ab7'}} />
  );
  const routeVideos = () => (
    <View style={{flex: 1, backgroundColor: COLORS.white}} />
  );

  const renderScene = SceneMap({
    all: routeAll,
    photos: routePhotos,
    videos: routeVideos,
  });

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <View
        style={[
          styles.tabBar,
          {
            marginHorizontal: '25%',
            height: scaleHeight(40),
            marginBottom: scaleHeight(13),
          },
        ]}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });

          return (
            <TouchableOpacity
              key={props.navigationState.index + i}
              style={styles.tabItem}
              onPress={() => setIndex(i)}>
              <Animated.Text
                style={[
                  {opacity},
                  index == i
                    ? {
                        borderBottomColor: COLORS.green,
                        borderBottomWidth: scaleHeight(2),
                      }
                    : {},
                ]}>
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.profileColor}}>
      <ImageBackground
        source={{
          uri: HttpImage(userData?.backgroundUrl),
        }}
        resizeMode="cover"
        style={{
          width: '100%',
          height: scaleHeight(229),
        }}>
        <View
          style={{
            // padding: scaleHeight(1),
            width: scaleHeight(100),
            height: scaleHeight(100),
            borderRadius: scaleHeight(100),
            alignSelf: 'center',
            marginTop: scaleHeight(229 - 100),
            // backgroundColor: COLORS.white,
            borderWidth: scaleHeight(2),
            borderColor: COLORS.white,
            zIndex: 20,
          }}>
          <Image
            source={{
              uri: HttpImage(userData?.avatarUrl),
            }}
            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: scaleHeight(100),
            }}
          />
        </View>
      </ImageBackground>
      <View
        style={{
          width: '100%',
          height: scaleHeight(650),
          zIndex: 10,
          top: -scaleHeight(50),
          backgroundColor: COLORS.profileColor,
          borderTopRightRadius: scaleHeight(50),
          borderTopLeftRadius: scaleHeight(50),
        }}>
        <View
          style={{
            marginTop: scaleHeight(9),
            marginHorizontal: scale(51),
            height: scaleHeight(240),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: COLORS.black,
                  fontWeight: '800',
                  fontSize: FONT_SIZE.NORMAL,
                }}>
                {USER.followers}
              </Text>
              <Text
                style={{
                  color: COLORS.black,
                  fontSize: FONT_SIZE.NORMAL,
                }}>
                Followers
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: COLORS.black,
                  fontWeight: '800',
                  fontSize: FONT_SIZE.NORMAL,
                }}>
                {USER.following}
              </Text>
              <Text
                style={{
                  color: COLORS.black,
                  fontSize: FONT_SIZE.NORMAL,
                }}>
                Following
              </Text>
            </View>
          </View>
          <Text
            style={{
              alignSelf: 'center',
              marginTop: scaleHeight(12),
              color: COLORS.black,
              fontWeight: '700',
              fontSize: FONT_SIZE.LARGE,
            }}>
            {USER?.username}
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              width: '100%',
              textAlign: 'center',
              marginHorizontal: scale(5),
              marginTop: scaleHeight(12),
              color: COLORS.gray,
            }}>
            {USER?.description}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: scale(10),
              marginTop: scaleHeight(10),
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '45%',
                paddingVertical: scaleHeight(10),
                backgroundColor: COLORS.white,
                borderRadius: scaleHeight(30),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>Follow</Text>
            </View>
            <View
              style={{
                width: '45%',
                paddingVertical: scaleHeight(10),
                backgroundColor: COLORS.white,
                borderRadius: scaleHeight(30),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>Message</Text>
            </View>
          </View>
        </View>
        <TabView
          style={{
            top: -scaleHeight(63),
            zIndex: 40,
          }}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: '100%'}}
          renderTabBar={renderTabBar}
        />
      </View>
    </View>
  );
};

export default ProfileView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: COLORS.GST_Blue,
  },
});
