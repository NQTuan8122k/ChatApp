import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../constants/colors';
import {Icon} from '../../components';
import {scale, scaleHeight} from '../../utils/fontConfig';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {HttpImage} from '../../helpers/httpImage';
import {USER, POST_NEWS} from '../../data';
import {ICONS} from '../../constants/icons';

const NewFeedView = () => {
  const [isFocus, setIsFocus] = useState(null);
  const onFocus = text => {
    setIsFocus(prev => {
      if (prev === text) {
        return null;
      } else {
        return text;
      }
    });
  };
  return (
    <View
      style={{
        backgroundColor: COLORS.secondary_bachground,
        paddingTop: StatusBar.currentHeight,
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: scale(11),
        }}>
        <Icon
          name="camera"
          category="Entypo"
          color={COLORS.white}
          size={24}
          wrapperStyle={styles.IconContainer}
        />
        <Text
          style={{
            color: COLORS.black,
            fontSize: FONT_SIZE.X_LARGE,
            fontWeight: '600',
          }}>
          SOTWIN
        </Text>
        <Icon
          name="heart"
          category="Foundation"
          size={24}
          color={COLORS.white}
          wrapperStyle={styles.IconContainer}
        />
      </View>
      <FlatList
        data={[0, 1, 2, 3, 4, 5]}
        keyExtractor={index => index}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          marginHorizontal: scale(11),
          marginTop: scaleHeight(15),
          marginBottom: scaleHeight(20),
          height: scaleHeight(112),
        }}
        renderItem={({item}) => {
          return (
            <View
              style={{
                marginRight: scale(20),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  borderWidth: scaleHeight(2),
                  borderColor: COLORS.GST_Blue,
                  padding: scale(2),
                  width: scaleHeight(70),
                  height: scaleHeight(70),
                  borderRadius: scaleHeight(100),
                }}>
                <Image
                  source={{
                    uri: HttpImage(USER.avatarUrl),
                  }}
                  resizeMode="cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: scaleHeight(100),
                  }}
                />
              </View>

              <Text
                style={{
                  color: COLORS.black,
                  fontSize: FONT_SIZE.SMALL,
                  fontWeight: '600',
                }}>
                {USER.name}
              </Text>
            </View>
          );
        }}
      />

      <FlatList
        data={POST_NEWS}
        keyExtractor={index => index}
        style={{marginHorizontal: scale(11)}}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                borderRadius: scaleHeight(40),
                backgroundColor: COLORS.profileColor,
                paddingHorizontal: scale(10),
                paddingVertical: scaleHeight(10),
                marginBottom: scaleHeight(20),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginLeft: scale(10),
                  marginBottom: scaleHeight(10),
                }}>
                <Image
                  source={{
                    uri: HttpImage(item?.avatarUrl),
                  }}
                  resizeMode="cover"
                  style={{
                    width: scaleHeight(35),
                    height: scaleHeight(35),
                    borderRadius: scaleHeight(100),
                    marginRight: scale(12),
                  }}
                />
                <View>
                  <Text
                    style={{
                      color: COLORS.black,
                      fontSize: FONT_SIZE.MEDIUM,
                      fontWeight: '800',
                    }}>
                    {item?.name}
                  </Text>
                  <Text
                    style={{
                      color: COLORS.gray,
                      fontSize: FONT_SIZE.NORMAL,
                    }}>
                    {item?.username}
                  </Text>
                </View>
              </View>
              {!!item?.desription && <Text>{item?.description}</Text>}
              {!!item?.image?.isAvailable && (
                <TouchableOpacity
                  onPress={() => onFocus(index)}
                  activeOpacity={0.9}>
                  <Image
                    source={{
                      uri: HttpImage(item?.image.imageUrl[0]),
                    }}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: scaleHeight(256),
                      borderRadius: scaleHeight(30),
                      marginRight: scale(12),
                    }}
                  />
                  {isFocus === index && (
                    <View
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: COLORS.white,
                        opacity: 0.5,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        borderRadius: scaleHeight(30),
                      }}>
                      <View
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '100%',
                          height: scaleHeight(50),
                          backgroundColor: COLORS.black,
                          borderBottomRightRadius: scale(30),
                          borderBottomLeftRadius: scale(30),
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingHorizontal: scale(20),
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Icon
                            category="Ionicons"
                            name="ios-chatbubble-ellipses-sharp"
                            color={COLORS.white}
                            size={24}
                          />
                          <Text
                            style={{
                              color: COLORS.white,
                              marginHorizontal: scale(5),
                            }}>
                            10
                          </Text>
                          <Icon
                            category="Ionicons"
                            name="ios-heart"
                            color={COLORS.white}
                            size={24}
                          />
                          <Text
                            style={{
                              color: COLORS.white,
                              marginHorizontal: scale(5),
                            }}>
                            122
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Icon
                            category="FontAwesome"
                            name="send"
                            color={COLORS.white}
                            size={22}
                            style={{marginRight: scale(5)}}
                          />
                          <Image
                            source={ICONS.SAVE}
                            style={{
                              width: scaleHeight(26),
                              height: scaleHeight(26),
                            }}
                          />
                        </View>
                      </View>
                    </View>
                  )}
                </TouchableOpacity>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default NewFeedView;
const styles = StyleSheet.create({
  IconContainer: {
    width: scaleHeight(40),
    height: scaleHeight(40),
    borderRadius: scaleHeight(40),
    backgroundColor: '#5599DF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
