import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {COLORS} from '../../constants/colors';
import {scale, scaleHeight} from '../../utils/fontConfig';
import {ICONS} from '../../constants/icons';
import {FONT_SIZE} from '../../constants/fonts';
import {Icon, TextInputCustom} from '../../components';

const ChatroomView = (
  {data = [], userId = '0'},
  partnerId = '1',
  // sendMessage,
  // sendNewMessage,
) => {
  const inputRef = useRef(null);
  const scrollViewRef = useRef(null);
  const [message, setMessage] = React.useState('');
  const [focus, setFocus] = React.useState(false);
  const changeFocus = () => {
    setFocus(prev => !prev);
  };
  const checkLastMessage = (arr, index, id) => {
    let len = arr?.length - 1;
    if (index === 0) {
      if (arr[index]?.owner == id && arr[index + 1]?.owner == id) {
        return false;
      }
      return true;
    }
    if (index == len) {
      if (arr[index]?.owner == id && arr[index + 1]?.owner == id) {
        return false;
      }
    }
    if (index < len) {
      if (arr[index + 1]?.owner == id && arr[index]?.owner == id) {
        return false;
      }
    }

    return true;
  };
  const isOnlyAbove = (arr, index, id) => {
    let len = arr?.length - 1;
    if (index < len && index > 0) {
      if (
        arr[index]?.owner == id &&
        arr[index - 1]?.owner == id &&
        arr[index + 1]?.owner != id
      )
        return {
          user: {
            borderTopLeftRadius: scaleHeight(18),
            borderTopRightRadius: scaleHeight(4),
            borderBottomLeftRadius: scaleHeight(18),
            borderBottomRightRadius: scaleHeight(18),
          },
          partnerId: {
            borderTopLeftRadius: scaleHeight(4),
            borderTopRightRadius: scaleHeight(18),
            borderBottomLeftRadius: scaleHeight(18),
            borderBottomRightRadius: scaleHeight(18),
          },
        };
    } else if (index == len) {
      if (arr[index]?.owner == id && arr[index - 1]?.owner == id)
        return {
          user: {
            borderTopLeftRadius: scaleHeight(18),
            borderTopRightRadius: scaleHeight(4),
            borderBottomLeftRadius: scaleHeight(18),
            borderBottomRightRadius: scaleHeight(18),
          },
          partnerId: {
            borderTopLeftRadius: scaleHeight(4),
            borderTopRightRadius: scaleHeight(18),
            borderBottomLeftRadius: scaleHeight(18),
            borderBottomRightRadius: scaleHeight(18),
          },
        };
    }
    return {};
  };
  const isOnlyBottom = (arr, index, id) => {
    let len = arr?.length - 1;
    if (index < len && index > 0) {
      if (
        arr[index]?.owner == id &&
        arr[index + 1]?.owner == id &&
        arr[index - 1]?.owner != id
      )
        return {
          user: {
            borderTopLeftRadius: scaleHeight(18),
            borderTopRightRadius: scaleHeight(18),
            borderBottomLeftRadius: scaleHeight(18),
            borderBottomRightRadius: scaleHeight(4),
          },
          partnerId: {
            borderTopLeftRadius: scaleHeight(18),
            borderTopRightRadius: scaleHeight(18),
            borderBottomLeftRadius: scaleHeight(4),
            borderBottomRightRadius: scaleHeight(18),
          },
        };
    } else if (index == 0) {
      if (arr[index]?.owner == id && arr[index + 1]?.owner == id)
        return {
          user: {
            borderTopLeftRadius: scaleHeight(18),
            borderTopRightRadius: scaleHeight(18),
            borderBottomLeftRadius: scaleHeight(18),
            borderBottomRightRadius: scaleHeight(4),
          },
          partnerId: {
            borderTopLeftRadius: scaleHeight(18),
            borderTopRightRadius: scaleHeight(18),
            borderBottomLeftRadius: scaleHeight(4),
            borderBottomRightRadius: scaleHeight(18),
          },
        };
    }
    return {};
  };
  const haveNextMessage = (arr, index, id) => {
    let len = arr?.length - 1;
    if (index < len && index > 0) {
      if (
        arr[index]?.owner == id &&
        arr[index + 1]?.owner == id &&
        arr[index - 1]?.owner == id
      )
        return {
          user: {
            borderTopLeftRadius: scaleHeight(18),
            borderTopRightRadius: scaleHeight(4),
            borderBottomLeftRadius: scaleHeight(18),
            borderBottomRightRadius: scaleHeight(4),
          },
          partnerId: {
            borderTopLeftRadius: scaleHeight(4),
            borderTopRightRadius: scaleHeight(18),
            borderBottomLeftRadius: scaleHeight(4),
            borderBottomRightRadius: scaleHeight(18),
          },
        };
    }
    return {};
  };
  const sendNewMessage = message => {
    console.log('==========================================');
    const newMessage = {
      id: new Date().toString(),
      createdAt: '2022-12-27T05:38:01.854Z',
      emoji: [],
      isDeletedAll: false,
      isDeletedOnly: false,
      isSeen: [],
      isUnread: false,
      lastedAction: 1663317877903,
      message,
      owner: '1',
    };
    data.push(newMessage);
    setMessage('');
  };

  const sendMessage = message => {
    console.log('=========--------------------------');

    const newMessage = {
      id: new Date().toString(),
      createdAt: '2022-12-27T05:38:01.854Z',
      emoji: [],
      isDeletedAll: false,
      isDeletedOnly: false,
      isSeen: [],
      isUnread: false,
      lastedAction: 1663317877903,
      message,
      owner: '0',
    };

    data.push(newMessage);
    setMessage('');
  };

  const rendeMessageItem = (item, index) => {
    let isLassmessage = checkLastMessage(data, index, item?.owner);
    let border = haveNextMessage(data, index, item?.owner);
    let bottomMess = isOnlyBottom(data, index, item?.owner);
    let topMess = isOnlyAbove(data, index, item?.owner);

    return (
      <View
        style={[
          {
            marginBottom: scaleHeight(2),
            flexDirection: 'row',
            backgroundColor: COLORS.white,
          },
          userId == item?.owner
            ? {alignSelf: 'flex-end', justifyContent: 'center'}
            : {alignSelf: 'flex-start', justifyContent: 'center'},
          isLassmessage && {marginBottom: scaleHeight(12)},
        ]}>
        {userId != item?.owner && !!isLassmessage ? (
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1624212933981-7fd3e1692147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VuJTIwc2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            }}
            style={{
              width: scaleHeight(28),
              height: scaleHeight(28),
              borderRadius: scaleHeight(100),
              marginRight: scale(12),
            }}
            resizeMode={'center'}
          />
        ) : (
          <View
            style={{
              width: scaleHeight(28),
              height: scaleHeight(28),
              borderRadius: scaleHeight(100),
              marginRight: scale(12),
            }}
          />
        )}
        <Text
          style={[
            {
              borderTopLeftRadius: scaleHeight(18),
              borderTopRightRadius: scaleHeight(18),
              borderBottomLeftRadius: scaleHeight(18),
              borderBottomRightRadius: scaleHeight(18),
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              paddingHorizontal: scale(12),
              paddingTop: scaleHeight(7.5),
              paddingBottom: scaleHeight(8.5),
              maxWidth: '70%',
            },
            userId == item?.owner && {
              backgroundColor: '#0584FE',
              color: COLORS.white,
            },
            userId == item?.owner
              ? border?.user || {}
              : border?.partnerId || {},

            userId == item?.owner
              ? bottomMess?.user || {}
              : bottomMess?.partnerId || {},
            userId == item?.owner
              ? topMess?.user || {}
              : topMess?.partnerId || {},
          ]}>
          {item?.message}
          {index}
        </Text>
        {userId == item?.owner && !!item?.isSeen?.includes(partnerId) ? (
          <Image
            source={ICONS.CHECK}
            style={{
              width: scaleHeight(16),
              height: scaleHeight(16),
              borderRadius: scaleHeight(100),
              marginHorizontal: scale(2),
              tintColor: COLORS.blue,
              alignSelf: 'flex-end',
            }}
            resizeMode={'contain'}
          />
        ) : (
          <View
            style={{
              width: scaleHeight(16),
              height: scaleHeight(16),
              borderRadius: scaleHeight(100),
              marginHorizontal: scale(2),
              tintColor: COLORS.blue,
              alignSelf: 'flex-end',
            }}
          />
        )}
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{height: '100%', width: '100%', backgroundColor: COLORS.white}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: scaleHeight(52),
          paddingHorizontal: scale(16),
          borderBottomWidth: scale(0.5),
          borderBottomColor: COLORS.gray_light,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={ICONS.BACK}
            resizeMode={'contain'}
            style={{
              width: scale(13),
              height: scaleHeight(23),
              marginRight: scale(20),
            }}
          />
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/1352173787/photo/sunset.jpg?b=1&s=170667a&w=0&k=20&c=jKDMxKXALm540OTFB3vMIDFYwOEedauorSpvLgjkU1M=',
            }}
            resizeMode={'contain'}
            style={{
              width: scaleHeight(36),
              height: scaleHeight(36),
              borderRadius: scaleHeight(36),
              marginRight: scale(10),
            }}
          />
          <View>
            <Text
              style={{
                color: COLORS.black,
                fontSize: FONT_SIZE.LARGE,
                fontWeight: '700',
              }}>
              Martha Craig
            </Text>
            <Text
              style={{
                color: COLORS.gray_light,
                fontSize: FONT_SIZE.SMALL,
                fontWeight: '500',
              }}>
              Messenger
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={ICONS.CALL}
            style={{
              width: scaleHeight(23),
              height: scaleHeight(23),
              tintColor: COLORS.blue,
              resizeMode: 'contain',
              marginRight: scale(20),
            }}
          />
          <Image
            source={ICONS.VIDEOCALL}
            style={{
              width: scaleHeight(27),
              height: scaleHeight(18),
              tintColor: COLORS.blue,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>

      <ScrollView
        ref={scrollViewRef}
        nestedScrollEnabled={true}
        style={[
          {flex: 1, marginBottom: scaleHeight(83)},
          focus && {marginBottom: scaleHeight(53)},
        ]}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({animated: true})
        }
        horizontal={false}>
        <View
          style={{
            width: scale(275),
            height: scaleHeight(255),
            paddingTop: scaleHeight(8),
            position: 'absolute',
            top: 0,
            left: 50,
            zIndex: 10,
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1624212933981-7fd3e1692147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VuJTIwc2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            }}
            style={{
              width: scaleHeight(100),
              height: scaleHeight(100),
              borderRadius: scaleHeight(100),
            }}
            resizeMode={'center'}
          />
          <Text
            style={{
              fontSize: FONT_SIZE.XX_LARGE,
              color: COLORS.black,
              fontWeight: '700',
              marginBottom: scaleHeight(2),
              marginTop: scaleHeight(12),
            }}>
            Martha Craig
          </Text>
          <Text
            style={{
              fontSize: FONT_SIZE.NORMAL,
              color: COLORS.black,
              fontWeight: '400',
              marginBottom: scaleHeight(26),
            }}>
            You’re friends on Facebook
          </Text>
          <View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1624212933981-7fd3e1692147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VuJTIwc2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                }}
                style={{
                  width: scaleHeight(48),
                  height: scaleHeight(48),
                  borderRadius: scaleHeight(100),
                }}
                resizeMode={'center'}
              />
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1627174003373-1892aff35f9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VuJTIwc2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                }}
                style={{
                  width: scaleHeight(48),
                  height: scaleHeight(48),
                  borderRadius: scaleHeight(100),
                  left: -scale(16),
                  zIndex: 20,
                }}
                resizeMode={'center'}
              />
            </View>
            <Text
              style={{
                fontSize: FONT_SIZE.SMALL,
                color: 'rgba(0, 0, 0, 0.3)',
              }}>
              Say hi to your new Facebook friend, Martha.
            </Text>
          </View>
        </View>
        <FlatList
          style={
            {
              // marginBottom: scaleHeight(83),
            }
          }
          scrollEnabled={false}
          contentContainerStyle={{
            minHeight: scaleHeight(700),
            marginLeft: scale(12),
            paddingTop: scaleHeight(548),
          }}
          data={data}
          renderItem={({item, index}) => rendeMessageItem(item, index)}
          keyExtractor={(item, index) => item?.id}
          // inverted={true}
        />
      </ScrollView>

      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            minHeight: scaleHeight(53),
            paddingHorizontal: scale(16),
            position: 'absolute',
            bottom: 34,
            left: 0,
            backgroundColor: COLORS.white,
          },
          focus && {bottom: 0},
        ]}>
        {!focus ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
            }}>
            <Image
              source={ICONS.MORE}
              style={{
                width: scaleHeight(20),
                height: scaleHeight(20),
                tintColor: COLORS.blue,
                marginRight: scale(20),
              }}
              resizeMode={'contain'}
            />
            <Image
              source={ICONS.CAMERA}
              style={{
                width: scaleHeight(25),
                height: scaleHeight(22),
                tintColor: COLORS.blue,
                marginRight: scale(18),
              }}
              resizeMode={'contain'}
            />
            <Image
              source={ICONS.PHOTO}
              style={{
                width: scaleHeight(20),
                height: scaleHeight(20),
                tintColor: COLORS.blue,
                marginRight: scale(20),
              }}
              resizeMode={'contain'}
            />
            <Image
              source={ICONS.ON_MIC}
              style={{
                width: scaleHeight(20),
                height: scaleHeight(20),
                tintColor: COLORS.blue,
                marginRight: scale(15),
              }}
              resizeMode={'contain'}
            />
          </View>
        ) : (
          <TouchableOpacity onPress={() => sendNewMessage(message)}>
            <Image
              source={ICONS.ARROW_RIGHT}
              style={{
                width: scaleHeight(10),
                height: scaleHeight(16),
                tintColor: COLORS.blue,
                marginRight: scale(11),
              }}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        )}
        <TextInputCustom
          ref={inputRef}
          value={message}
          placeHolder={'Aa'}
          onChangeText={setMessage}
          onBlur={changeFocus}
          onFocus={changeFocus}
        />
        <TouchableOpacity onPress={() => sendMessage(message)}>
          <Image
            source={!focus ? ICONS.LIKE : ICONS.SEND}
            style={[
              {
                width: scaleHeight(22),
                height: scaleHeight(24),
                tintColor: COLORS.blue,
                marginLeft: scale(15),
              },
              focus && {width: scaleHeight(27), height: scaleHeight(28)},
            ]}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
      {!focus && (
        <View
          style={{
            position: 'absolute',
            height: scaleHeight(5),
            width: scale(135),
            left: scale(120),
            bottom: scaleHeight(9),
            backgroundColor: '#060606',
            borderRadius: scaleHeight(100),
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default ChatroomView;
const styles = StyleSheet.create({});
