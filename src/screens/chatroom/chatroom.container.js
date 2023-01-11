import moment from 'moment';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {REALTIME_DATABASE_TABLE} from '../../constants/other';
import useIsMounted from '../../hooks/useIsMounted';
import {postNewMessageHandle} from '../../redux/chat/chat.actions';
import {getAllMessageSelector} from '../../redux/chat/chat.selectors';
import {getUserSelector} from '../../redux/user/user.selectors';
import database from '../../utils/firebaseUtils';
import ChatroomView from './chatroom.view';

const ChatroomContainer = props => {
  const userInfo = useSelector(getUserSelector);
  const [message, setMessage] = React.useState('');
  const [allMessage, setAllMessage] = React.useState({data: []});

  const roomId = useRef(props?.route?.params?.roomId);

  const partnerId = props?.route?.params?.partnerId;
  const partnerData = props?.route?.params?.partnerData;

  const dispath = useDispatch();

  const [listMessages, setListMessages] = useState({
    page: 1,
    data: [],
  });

  const listMessageRef = useRef([]);
  const isMounted = useIsMounted();
  const [isFetching, setIsFetching] = useState(true);

  // let message = {
  //   id: moment.now().toString(),
  //   createdAt: '2022-12-27T05:38:01.854Z',
  //   emoji: null,
  //   reply: null,
  //   isDeletedAll: false,
  //   isDeletedOnly: false,
  //   isSeen: false,
  //   isUnread: false,
  //   lastedAction: 1663317877903,
  //   message: 'Oh na na, just be careful, na na',
  //   owner: userInfo?.uid,
  //   type: 0, // 0: message, 1: audio, 2 video, 3 image, 4 file
  // };

  const sendMessage = userId => {
    console.log('=========--------------------------', userId);
    let newMessage = {
      id: moment.now().toString(),
      createdAt: new Date().toString(),
      emoji: null,
      reply: null,
      isDeletedAll: false,
      isDeletedOnly: false,
      isSeen: false,
      isUnread: false,
      lastedAction: 1663317877903,
      message,
      owner: userId,
      type: 0, // 0: message, 1: audio, 2 video, 3 image, 4 file
    };
    const roomChat = {
      roomId: roomId?.current,
      message: {
        id: moment.now().toString(),
        createdAt: new Date().toString(),
        emoji: null,
        reply: null,
        isDeletedAll: false,
        isDeletedOnly: false,
        isSeen: false,
        isUnread: false,
        lastedAction: 1663317877903,
        message,
        owner: userId,
        type: 0, // 0: message, 1: audio, 2 video, 3 image, 4 file
      },
    };

    setListMessages(prevState => ({
      ...prevState,
      data: [newMessage, ...prevState?.data],
    }));
    dispath(
      postNewMessageHandle(
        roomChat,
        () => setMessage(''),
        () => {},
      ),
    );
  };

  const RoomData = useSelector(getAllMessageSelector);
  const compareArrays = (a, b) =>
    a?.length === b?.length && !!a?.length
      ? a?.every((element, index) => element === b?.[index])
      : false;

  useEffect(() => {
    let data = listMessages?.data
      ? listMessages?.data?.sort?.((a, b) => {
          const timeA = a?.createdAt; // ignore upper and lowercase
          const timeB = b?.createdAt; // ignore upper and lowercase
          if (timeA < timeB) {
            return -1;
          }
          if (timeA > timeB) {
            return 1;
          }
          // names must be equal
          return 0;
        })
      : [];
    if (data?.length) {
      setAllMessage(prev => {
        if (!compareArrays(prev?.data, data)) {
          return {data};
        }
      });
    }
  }, [RoomData, listMessages?.data]);

  useEffect(() => {
    if (roomId.current == undefined) {
      setIsFetching(false);
    }
    return () => {
      if (roomId.current) {
        database
          .ref(REALTIME_DATABASE_TABLE.TBL_CHATROOM)
          // eslint-disable-next-line react-hooks/exhaustive-deps
          .child(roomId?.current)
          .child('data')
          .off();
      }
    };
  }, []);

  const addMessageListener = page => {
    listMessageRef.current = [];
    setIsFetching(true);
    database
      .ref(REALTIME_DATABASE_TABLE.TBL_CHATROOM)
      .child(roomId.current)
      .child('data')
      .on('value', snapshot => {
        if (snapshot.val()) {
          setListMessages(() => {
            return {
              page: 1,
              data: Object?.keys(snapshot.val())?.map(function (key) {
                return snapshot?.val()[key];
              }),
            };
          });
        }
      });
  };
  useEffect(() => {
    if (roomId?.current) {
      addMessageListener(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId?.current]);

  console.log('=====0', roomId?.current);
  console.log('=====0*********', listMessages?.data);

  return (
    <ChatroomView
      RoomData={allMessage?.data}
      roomId={roomId?.current}
      partnerId={partnerId}
      userInfo={userInfo}
      userId={userInfo?.uid}
      partnerData={partnerData}
      sendMessage={sendMessage}
      message={message}
      setMessage={setMessage}
    />
  );
};

export default ChatroomContainer;
