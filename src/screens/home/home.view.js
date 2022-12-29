import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../constants/colors';
import {scale, scaleHeight} from '../../utils/fontConfig';
import {FONT_SIZE} from '../../constants/fonts';
import Icon from '../../components/Icon';
import {ICONS} from '../../constants/icons';
import {FlatList} from 'react-native-gesture-handler';
import moment from 'moment/moment';
import formatTimeMessage from '../../helpers/formatTimeMessage';

const HomeView = ({
  userInfo = null,
  searchKey = 'Search',
  onlineUser = [],
  chatList = [],
}) => {
  // console.log('=======================', moment());
  const renderUser = useCallback(item => {
    return (
      <View
        style={{
          alignItems: 'center',
          marginRight: scale(22),
          justifyContent: 'center',
        }}>
        {item?.avatarUrl ? (
          <View>
            <Image
              source={{uri: item?.avatarUrl}}
              style={{
                height: scaleHeight(52),
                width: scaleHeight(52),
                borderRadius: scaleHeight(52),
              }}
              resizeMode={'contain'}
            />
            <View
              style={{
                padding: scaleHeight(2),
                backgroundColor: COLORS.white,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: scaleHeight(20),
                position: 'absolute',
                bottom: 0,
                right: 0,
              }}>
              <View
                style={{
                  width: scaleHeight(12),
                  height: scaleHeight(12),
                  backgroundColor: COLORS.green,
                  borderRadius: scaleHeight(20),
                }}></View>
            </View>
          </View>
        ) : (
          <View
            style={{
              height: scaleHeight(52),
              width: scaleHeight(52),
              borderRadius: scaleHeight(52),
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            }}>
            <Image
              source={ICONS.PLUS}
              style={{
                height: scaleHeight(20.5),
                width: scaleHeight(20.5),
                borderRadius: scaleHeight(52),
              }}
            />
          </View>
        )}
        <Text style={{marginTop: scaleHeight(7)}}>
          {item?.username || 'Your story'}
        </Text>
      </View>
    );
  }, []);

  const renderMessageItem = useCallback(
    item => {
      let messageTime = formatTimeMessage(item?.lastMessage?.time);

      return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: scaleHeight(8),
          }}>
          <Image
            source={{uri: item?.avatarUrl}}
            style={{
              height: scaleHeight(60),
              width: scaleHeight(60),
              borderRadius: scaleHeight(60),
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginLeft: scale(12),
            }}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  color: COLORS.black,
                  fontSize: scaleHeight(17),
                  fontWeight:
                    item?.lastMessage?.sender === userInfo?.id ? '500' : '400',
                }}>
                {item?.username}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  height: scaleHeight(20),
                  width:
                    item?.lastMessage?.sender === userInfo?.id
                      ? scale(271 - scale(10))
                      : scale(271),
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    color: COLORS.blue,
                    // maxWidth: scale(271),
                    maxWidth:
                      item?.lastMessage?.sender === userInfo?.id
                        ? scale(271 - messageTime.len - scale(10))
                        : scale(271 - messageTime.len),
                  }}>
                  {item?.lastMessage?.sender === userInfo?.id
                    ? 'You'
                    : item?.nickname || item?.username}
                  : {item?.lastMessage?.message}
                </Text>
                <Text
                  style={{
                    color: COLORS.black,
                    width: scale(messageTime.len),
                    textAlign: 'right',
                  }}>
                  {messageTime?.time}
                </Text>
              </View>
            </View>

            {item?.lastMessage?.sender === userInfo?.id ? (
              !item?.lastMessage?.isRead ? (
                <Image
                  source={
                    item?.lastMessage?.status == 1 ? ICONS.CIRCLE : ICONS.CHECK
                  }
                  style={{
                    width: scaleHeight(16),
                    height: scaleHeight(16),
                    alignSelf: 'flex-end',
                  }}
                  resizeMode={'contain'}
                />
              ) : (
                <Image
                  source={{uri: item?.avatarUrl}}
                  style={{
                    width: scaleHeight(16),
                    height: scaleHeight(16),
                    borderRadius: scaleHeight(20),
                    alignSelf: 'flex-end',
                  }}
                  resizeMode={'cover'}
                />
              )
            ) : (
              <></>
            )}
          </View>
        </View>
      );
    },
    [userInfo?.id],
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: scaleHeight(64),
          paddingHorizontal: scale(16),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{uri: userInfo?.avatarUrl}}
            style={{
              height: scaleHeight(40),
              width: scaleHeight(40),
              borderRadius: scaleHeight(40),
            }}
          />
          <Text
            style={{
              fontSize: FONT_SIZE.MEDIUM_LARGE,
              color: COLORS.black,
              marginLeft: scale(12),
              fontWeight: '700',
            }}>
            Chats
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: scaleHeight(12),
          }}>
          <View
            style={{
              height: scaleHeight(40),
              width: scaleHeight(40),
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
              borderRadius: scaleHeight(40),
            }}>
            <Icon
              name="camera"
              category="FontAwesome"
              color={COLORS.black}
              size={scaleHeight(20)}
            />
          </View>

          <View
            style={{
              height: scaleHeight(40),
              width: scaleHeight(40),
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
              borderRadius: scaleHeight(40),
              marginLeft: scale(12),
            }}>
            <Image
              source={ICONS.NOTE}
              style={{
                height: scaleHeight(30),
                width: scaleHeight(30),
                resizeMode: 'contain',
              }}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: scaleHeight(48),
          paddingHorizontal: scale(16),
        }}>
        <View
          style={{
            backgroundColor: '#f2f2f2',
            borderRadius: scaleHeight(10),
            paddingHorizontal: scale(8),
            height: scaleHeight(36),
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
            flexDirection: 'row',
          }}>
          <Image
            source={ICONS.SEARCH}
            style={{
              height: scaleHeight(16),
              width: scaleHeight(16),
              resizeMode: 'cover',
              tintColor: COLORS.gray,
              marginRight: scale(6),
            }}
          />
          <Text
            style={{
              color: COLORS.gray_light,
              fontSize: scaleHeight(17),
              fontWeight: '400',
            }}>
            {searchKey}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginLeft: scale(12),
          height: scaleHeight(106),
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: scaleHeight(14.5),
        }}>
        <FlatList
          contentContainerStyle={{
            height: scaleHeight(77),
          }}
          ListHeaderComponent={renderUser}
          data={onlineUser}
          keyExtractor={item => item?.avatarUrl}
          renderItem={({item}) => renderUser(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <FlatList
        contentContainerStyle={{
          paddingBottom: scaleHeight(600),
        }}
        style={{marginHorizontal: scale(16)}}
        data={chatList}
        keyExtractor={item => item?.avatarUrl}
        renderItem={({item}) => renderMessageItem(item)}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeView;
