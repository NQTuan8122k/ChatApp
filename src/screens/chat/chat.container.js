// import React, {useEffect, useState, useCallback} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {REALTIME_DATABASE_TABLE} from '../../constants/other';
// import {getAllMessagesHandle} from '../../redux/User/user.action';
// import database from '../../utils/firebaseUtils';
// import ChatView from './chat.view';
// import {postNewMessagesHandle} from '../../redux/User/user.action';
// import {
//   getChatRoomDataSelector,
//   getChatRoomMessagesSelector,
//   getRoomIdSelector,
//   getUserInfoSelector,
//   getUserListSelector,
// } from '../../redux/User/user.selector';
// import moment from 'moment';
// const ChatContainer = props => {
//   const userList = useSelector(getUserListSelector);
//   const userInfo = useSelector(getUserInfoSelector);
//   const [messageContent, setMessageContent] = useState('');
//   const partnerId = props?.route?.params?.partnerId;
//   const chatroomId = useSelector(getRoomIdSelector);
//   const onChangeMessage = useCallback(text => {
//     setMessageContent(text);
//   }, []);
//   let newMessage = useCallback(() => {
//     return {
//       id: chatroomId,
//       data: {
//         createdAt: moment.now(),
//         lastedAction: moment.now(),
//         owner: userInfo?.id,
//         isDeletedOnly: false,
//         isDeletedAll: false,
//         emoji: JSON.stringify([]),
//         message: messageContent,
//         isSeen: JSON.stringify([]),
//         isUnread: false,
//         replyFor: null,
//       },
//     };
//   }, [messageContent, userInfo, chatroomId]);
//   // let mess = {
//   //   id: '-NBWbg2lEXno2qLh1uRT',
//   //   data: {
//   //     createdAt: '2022-03-06T08:57:49.270Z',
//   //     lastedAction: '2022-03-06T08:57:49.270Z',
//   //     owner: '-NBM1fTWJbjieQNtxfiE',
//   //     isDeletedOnly: false,
//   //     isDeletedAll: false,
//   //     emoji: JSON.stringify([]),
//   //     message: 'bsga3vd1231424h',
//   //     isSeen: JSON.stringify([]),
//   //     isUnread: false,
//   //     replyFor: null,
//   //   },
//   // };
//   const dispatch = useDispatch();
//   const getAllMessages = () => {
//     // console.log('==================122412', mess);
//     dispatch(getAllMessagesHandle({id: '-NBWbg2lEXno2qLh1uRT'}));
//     // dispatch(postNewMessagesHandle(mess));
//   };
//   const sendMessage = useCallback(() => {
//     dispatch(postNewMessagesHandle(newMessage));
//   }, [newMessage]);

//   const roomMessages = useSelector(getChatRoomMessagesSelector);
//   // const chatroomId = useSelector(getRoomIdSelector);
//   const chatroomData = useSelector(getChatRoomDataSelector);
//   // useEffect(() => {
//   //   dispatch(getAllMessagesHandle(mess));
//   // }, []);
//   let partnerData = chatroomData?.member.filter(user => {
//     if (partnerId == user?.id) {
//       return user;
//     }
//   });
//   return (
//     <ChatView
//       onSendMessage={() => getAllMessages()}
//       data={roomMessages}
//       userId={'-NBM179X22mRRT7kDYpx'}
//       partnerId={'-NBM1fTWJbjieQNtxfiE'}
//       userInfo={userInfo}
//       chatroomId={chatroomId}
//       chatroomData={chatroomData}
//       member={chatroomData?.member}
//       partnerData={partnerData?.[0]}
//       messageContent={messageContent}
//       onChangeMessage={onChangeMessage}
//       sendMessage={sendMessage}
//     />
//   );
// };

// export default ChatContainer;
