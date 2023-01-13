import moment from 'moment';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {REALTIME_DATABASE_TABLE} from '../../constants/other';
import useIsMounted from '../../hooks/useIsMounted';
import usePrevious from '../../hooks/usePrevious';
import {postNewMessageHandle} from '../../redux/chat/chat.actions';
import {getAllMessageSelector} from '../../redux/chat/chat.selectors';
import {getUserSelector} from '../../redux/user/user.selectors';
import database from '../../utils/firebaseUtils';
import ChatroomView from './chatroom.view';

const ChatroomContainer = props => {
  const userInfo = useSelector(getUserSelector);
  const [message, setMessage] = React.useState('');
  const [chossingMessage, setChossingMessage] = React.useState(null);

  const [allMessage, setAllMessage] = React.useState({data: []});

  const roomId = useRef(props?.route?.params?.roomId);

  const partnerId = props?.route?.params?.partnerId;
  const partnerData = props?.route?.params?.partnerData;
  const [isEndList, setIsEndList] = useState(false);
  const isFetchingPrev = usePrevious(isFetching);

  const dispath = useDispatch();

  const [listMessages, setListMessages] = useState({
    page: 1,
    data: [],
  });

  const listMessageRef = useRef([]);
  const isMounted = useIsMounted();
  const [isFetching, setIsFetching] = useState(true);

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
      message: newMessage,
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
  // const RoomData = useSelector(getAllMessageSelector);

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
  }, [listMessages?.data]);

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

  const addMessageListener = async page => {
    listMessageRef.current = [];
    setIsFetching(true);

    await database
      .ref(REALTIME_DATABASE_TABLE.TBL_CHATROOM)
      .child(roomId?.current)
      .child('data')
      .limitToLast(20)
      .on('value', snapshot => {
        !!snapshot.val() &&
          setListMessages({
            data: Object?.keys(snapshot.val())?.map(function (key) {
              return snapshot?.val()[key];
            }),
          });
      });

    // database
    //   .ref(REALTIME_DATABASE_TABLE.TBL_CHATROOM)
    //   .child(roomId.current || roomId?.current)
    //   .child('data')
    //   .limitToLast(20)
    //   .on('child_added', snap => {
    //     if (typeof snap.val() == 'object' && isFetchingPrev.current) {
    //       if (isMounted.current) {
    //         listMessageRef.current = [
    //           {
    //             ...snap.val(),
    //           },
    //           ...listMessageRef.current,
    //         ];
    //       }
    //     } else {
    //       if (typeof snap.val() == 'object') {
    //         if (snap.val().uid && isMounted.current) {
    //           setListMessages(prevState => {
    //             console.log('=======******3333******,', prevState);

    //             prevState.data.shift();
    //             return {
    //               ...prevState,
    //               data: [{...snap.val()}, ...prevState.data],
    //             };
    //           });
    //         }
    //         if (isMounted.current && snap.val().uid) {
    //           setListMessages(prevState => {
    //             console.log('=======******2222******,', prevState);

    //             return {
    //               ...prevState,
    //               data: [{...snap.val()}, ...prevState.data],
    //             };
    //           });
    //         }
    //       } else {
    //         if (listMessageRef.current?.[0].uid) {
    //         }
    //         if (isMounted.current) {
    //           if (!!(listMessageRef.current.length % 2)) {
    //             setIsEndList(true);
    //           }
    //           setListMessages({
    //             page: page + 1,
    //             data: listMessageRef.current,
    //           });
    //           setIsFetching(false);
    //         }
    //       }
    //     }
    //   });
  };
  useEffect(() => {
    if (roomId?.current) {
      addMessageListener(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId?.current]);

  // console.log('\n=====0*********', listMessages?.data);
  useEffect(() => {
    console.log(
      '\n!!!!!!!!!!!!!!!!!!*************!!!!!!!!!!!!!!!!!!!,,,,',
      listMessages?.data?.length,
    );
  }, [listMessages]);

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
      paddingBottomText={
        parseInt(message?.length / 33) + 1 > 6
          ? 6 * 14
          : (parseInt(message?.length / 33) + 1) * 14
      }
      chossingMessage={chossingMessage}
      setChossingMessage={setChossingMessage}
    />
  );
};

export default ChatroomContainer;
