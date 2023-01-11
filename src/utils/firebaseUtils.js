import {firebase} from '@react-native-firebase/database';
import {REALTIME_DATABASE_TABLE} from '../constants/other';

const database = firebase
  .app()
  .database('https://chatapp-c221c-default-rtdb.firebaseio.com/');

const databaseChatRoom = () =>
  firebase
    .app()
    .database('https://chatapp-c221c-default-rtdb.firebaseio.com/')
    .ref(REALTIME_DATABASE_TABLE.TBL_CHATROOM);

const referenceChatRoomID = id =>
  firebase
    .app()
    .database('https://chatapp-c221c-default-rtdb.firebaseio.com/')
    .ref(REALTIME_DATABASE_TABLE.TBL_CHATROOM)
    .child(id);

const databaseUser = id =>
  firebase
    .app()
    .database('https://chatapp-c221c-default-rtdb.firebaseio.com/')
    .ref(REALTIME_DATABASE_TABLE.TBL_USER);

const databaseAuth = id =>
  firebase
    .app()
    .database('https://chatapp-c221c-default-rtdb.firebaseio.com/')
    .ref(REALTIME_DATABASE_TABLE.TBL_AUTH);

const referenceUserID = id =>
  firebase
    .app()
    .database('https://chatapp-c221c-default-rtdb.firebaseio.com/')
    .ref(REALTIME_DATABASE_TABLE.TBL_USER)
    .child(id);

const databaseMessages = RoomId =>
  firebase
    .app()
    .database('https://chatapp-c221c-default-rtdb.firebaseio.com/')
    .ref(REALTIME_DATABASE_TABLE.TBL_CHATROOM)
    .child(RoomId)
    .child('messages');

const referenceMessagesId = (RoomId, messageId) =>
  firebase
    .app()
    .database('https://chatapp-c221c-default-rtdb.firebaseio.com/')
    .ref(REALTIME_DATABASE_TABLE.TBL_CHATROOM)
    .child(RoomId)
    .child('messages')
    .child(messageId);

const databaseUserLastMessageUpdate = (userId, chatRoomId) =>
  firebase
    .app()
    .database('https://chatapp-c221c-default-rtdb.firebaseio.com/')
    .ref(REALTIME_DATABASE_TABLE.TBL_USER)
    .child(userId)
    .child(chatRoomId)
    .child('lastMessage');

export {
  databaseChatRoom,
  referenceChatRoomID,
  databaseUser,
  referenceUserID,
  databaseMessages,
  referenceMessagesId,
  databaseUserLastMessageUpdate,
  databaseAuth,
};
export default database;
