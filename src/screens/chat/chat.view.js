import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Animated,
  Platform,
  UIManager,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import {scale, scaleHeight} from '../../utils/fontConfig';
import {COLORS} from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {useCallback} from 'react';
import Icon from '../../components/Icon';
import NavigationServices from '../../utils/navigationServices';
const ChatView = ({
  data,
  onSendMessage,
  userId,
  partnerId,
  userInfo,
  chatroomId,
  chatroomData,
  member,
  partnerData,
  onChangeMessage,
  messageContent,
  sendMessage,
}) => {
  const callIcon = useCallback(() => {
    return (
      <Icon
        name="call"
        size={24}
        color={COLORS.GST_Blue}
        style={styles.marginRight}
        category={'Ionicons'}
      />
    );
  }, []);
  const faceTimeIcon = useCallback(() => {
    return (
      <TouchableOpacity onPress={onSendMessage}>
        <Icon
          name="video-camera"
          size={24}
          color={COLORS.GST_Blue}
          category={'FontAwesome'}
        />
      </TouchableOpacity>
    );
  }, []);

  const emojiIcon = useCallback(() => {
    return (
      <Icon
        name="emoji-happy"
        size={24}
        color={COLORS.GST_Blue}
        category={'Entypo'}
        style={styles.marginRight}
      />
    );
  }, []);

  const likeIcon = useCallback(() => {
    return (
      <Icon
        name="like1"
        size={24}
        color={COLORS.GST_Blue}
        // style={styles.marginRight}
        category={'AntDesign'}
      />
    );
  }, []);
  const renderLeftIcon = useCallback(() => {
    return (
      <View style={styles.row}>
        {!!messageContent ? (
          <Icon
            name="left"
            size={24}
            color={COLORS.GST_Blue}
            style={styles.marginRight}
            category={'AntDesign'}
          />
        ) : (
          <>
            <Icon
              name="more"
              size={24}
              color={COLORS.GST_Blue}
              style={styles.marginRight}
              category={'MaterialIcons'}
            />
            <Icon
              name="camera"
              size={24}
              color={COLORS.GST_Blue}
              style={styles.marginRight}
              category={'FontAwesome'}
            />
            <Icon
              name="image"
              size={24}
              color={COLORS.GST_Blue}
              category={'Feather'}
              style={styles.marginRight}
            />
            <Icon
              name="microphone"
              size={24}
              color={COLORS.GST_Blue}
              style={styles.marginRight}
              category={'FontAwesome'}
            />
          </>
        )}
      </View>
    );
  }, [messageContent]);
  const renderAvatar = useCallback(imageUrl => {
    return (
      <Image
        source={{
          uri: `${imageUrl}`,
        }}
        style={[
          {height: scale(35), width: scale(35), borderRadius: scale(35)},
          styles.marginRight,
        ]}
      />
    );
  }, []);

  const leftIcon = useCallback(() => {
    return (
      <TouchableOpacity onPress={() => NavigationServices.goBack()}>
        <Icon
          name="left"
          size={24}
          color={COLORS.GST_Blue}
          style={styles.marginRight}
          category={'AntDesign'}
        />
      </TouchableOpacity>
    );
  }, []);
  const renderEmptyAvatar = useCallback(() => {
    return <View style={{width: scale(45), height: scale(35)}} />;
  }, []);
  const messageComponent = ({index, item}) => {
    return (
      <View
        style={[
          {flexDirection: 'row', alignItems: 'flex-end'},
          item?.owner == userId
            ? {justifyContent: 'flex-end'}
            : {justifyContent: 'flex-start'},
        ]}>
        {(item?.owner != userId && data?.[index - 1]?.owner == userId) ||
        (index - 1 < 0 && item?.owner != userId)
          ? renderAvatar?.(partnerData?.avatarUrl)
          : renderEmptyAvatar?.()}
        <View
          style={[
            styles.row,
            styles.messageContainer,
            item?.id == userId && {
              alignItem: 'flex-end',
              marginRight: scale(10),
            },
          ]}>
          <Text style={{width: scale(235)}}>
            {item?.message}
            {'/////'}
            {item?.owner} {index}
          </Text>
        </View>
        {(item?.owner == userId && data?.[index - 1]?.owner != userId) ||
        (index - 1 < 0 && item?.owner == userId)
          ? renderAvatar?.(userInfo?.avatarUrl)
          : renderEmptyAvatar?.()}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.rowBetween,
          styles.panelContainer,
          {marginBottom: scaleHeight(10), backgroundColor: 'red'},
        ]}>
        <View style={[styles.row, {alignItems: 'center'}]}>
          {leftIcon?.()}
          <Image
            style={[
              {
                height: scaleHeight(35),
                width: scaleHeight(35),
                borderRadius: scale(35),
              },
              styles.marginRight,
            ]}
            resizeMode={'cover'}
            source={{uri: partnerData?.avatarUrl}}
          />
          <View>
            <Text
              style={{
                color: COLORS.black,
                fontSize: FONT_SIZE.X_LARGE,
                fontFamily: FONT_FAMILY.BOLD,
              }}>
              {partnerData?.username}
            </Text>
            <Text
              style={{
                color: COLORS.gray,
                fontSize: FONT_SIZE.NORMAL,
                fontFamily: FONT_FAMILY.REGULAR,
              }}>
              Messenger
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          {callIcon?.()}
          {faceTimeIcon?.()}
        </View>
      </View>
      <FlatList
        contentContainerStyle={{
          paddingTop: scaleHeight(80),
        }}
        data={data}
        renderItem={messageComponent}
        keyExtractor={(index, item) => item?.id}
        inverted={true}
      />
      <View
        style={[
          styles.rowBetween,
          styles.panelContainer,
          styles.positionBottom,
        ]}>
        {renderLeftIcon?.()}

        <View style={[styles.inputTextContainer, styles.rowBetween]}>
          <TextInput
            placeholder="Aa"
            onChangeText={onChangeMessage}
            value={messageContent}
            style={{
              paddingVertical: scaleHeight(10),
              marginLeft: scale(10),
            }}
          />
          {emojiIcon?.()}
        </View>

        {likeIcon?.()}
      </View>
    </SafeAreaView>
  );
};
export default React.memo(ChatView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  panelContainer: {
    paddingHorizontal: scale(15),
    backgroundColor: COLORS.white,
    paddingVertical: scaleHeight(5),
  },
  marginRight: {
    marginRight: scale(10),
  },
  positionBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  inputTextContainer: {
    borderRadius: scale(20),
    backgroundColor: COLORS.gray_light,
    alignItems: 'center',
    width: '50%',
    minHeight: scaleHeight(50),
    flex: 1,
  },
  messageContainer: {
    borderRadius: scale(8),
    backgroundColor: COLORS.gray_light,
    paddingHorizontal: scale(10),
    paddingVertical: scaleHeight(10),
    marginTop: scaleHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginRight: scale(10),
  },
});
