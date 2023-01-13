import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SCREEN_NAME} from '../../constants/screenName';
import {postNewChatroomHandle} from '../../redux/chat/chat.actions';
import {
  getUserListSelector,
  getUserSelector,
} from '../../redux/user/user.selectors';
import NavigationServices from '../../utils/navigationServices';
import HomeView from './home.view';
const USER = {
  id: '863330d3-1cb3-4cc3-8d0c-28e14fef31a7',
  username: 'NQT',
  avatarUrl:
    'https://images.unsplash.com/photo-1624212933981-7fd3e1692147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VuJTIwc2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
};
const CHAT_LiST = [
  {
    id: 'e525c5b1-04aa-4743-bfc6-317a0cb8538a',
    username: 'Draven',
    nickname: 'capoo',
    status: '0',
    lastMessage: {
      time: '2022-12-05T06:23:01.854Z',
      message:
        'You can use either Date function or moment.js to get the Date Time but as per my personal experience I would suggest using Date function while you are dealing in 24hr formate and if you are using 12hr (am/pm) format then go for moment.js. So let’s start with the example, we will see the one by one example for both.',
      isRead: false,
      status: '0',
      type: '0',
      imageUrl: '',
      audioUrl: '',
      sender: 'e525c5b1-04aa-4743-bfc6-317a0cb8538a',
    },
    avatarUrl:
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
  },
  {
    id: '3519045d-5d51-41a1-8c27-9d2cada2c5be',
    username: 'Zed',
    status: '1',
    nickname: 'capoo',
    lastMessage: {
      time: '2022-05-25T05:23:01.854Z',
      message:
        'You can use either Date function or moment.js to get the Date Time but as per my personal experience I would suggest using Date function while you are dealing in 24hr formate and if you are using 12hr (am/pm) format then go for moment.js. So let’s start with the example, we will see the one by one example for both.',
      isRead: true,
      status: '0',
      type: '0',
      imageUrl: '',
      audioUrl: '',
      sender: '863330d3-1cb3-4cc3-8d0c-28e14fef31a7',
    },
    avatarUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  },
  {
    id: '72cec8f6-bb98-4245-b784-2fb9f96dd23e',
    username: 'Riven',
    nickname: 'capoo',
    status: '1',
    lastMessage: {
      time: '2022-12-27T02:31:01.854Z',
      message: 'See u late',
      status: '1',
      isRead: false,
      type: '0',
      imageUrl: '',
      audioUrl: '',
      sender: '863330d3-1cb3-4cc3-8d0c-28e14fef31a7',
    },
    avatarUrl:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  },
  {
    id: 'f877b421-2142-4426-871a-56b7fa687c17',
    username: 'Dairius',
    nickname: 'capoo',
    status: '0',
    lastMessage: {
      time: '2022-12-25T06:23:01.854Z',
      message: "Let's go!",
      isRead: true,
      status: '1',
      type: '0',
      imageUrl: '',
      sender: '863330d3-1cb3-4cc3-8d0c-28e14fef31a7',
      audioUrl: '',
    },
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
  },
  {
    id: '5aa1296f-eb81-41d8-adc4-5122179ab61c',
    username: 'Yasuo',
    nickname: 'capoo',
    status: '0',
    lastMessage: {
      message: 'Hello, how are u to day?',
      isRead: false,
      type: '0',
      status: '0',
      imageUrl: '',
      audioUrl: '',
      sender: '863330d3-1cb3-4cc3-8d0c-28e14fef31a7',
      time: '2022-11-26T06:23:01.854Z',
    },
    avatarUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
  },
  {
    id: '9e739b41-22dd-45d6-867b-c5ef64c27dbf',
    username: 'Annie',
    nickname: 'capoo',
    status: '0',
    lastMessage: {
      message:
        'This is an example, we will see how to get the current date-time in React Native using the Date function directly and using the moment.js which is very helpful when you deal with the date and time.',
      isRead: false,
      status: '0',
      type: '0',
      imageUrl: '',
      audioUrl: '',
      sender: '9e739b41-22dd-45d6-867b-c5ef64c27dbf',
      time: '2022-12-26T06:00:01.854Z',
    },
    avatarUrl:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
  },
  {
    id: 'f5584ca4-b095-41ec-8252-35b611f1383b',
    username: 'Ez',
    nickname: 'capoo',
    status: '0',
    lastMessage: {
      message: "What's man!",
      isRead: false,
      status: '0',
      type: '0',
      imageUrl: '',
      sender: '863330d3-1cb3-4cc3-8d0c-28e14fef31a7',
      audioUrl: '',
      time: '2022-12-24T09:23:01.854Z',
    },
    avatarUrl:
      'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
  },
  {
    id: '2475b3c8-723a-417e-9523-330191fa444c',
    username: 'Caitlyn',
    status: '1',
    lastMessage: {
      message: "What's man!",
      status: '0',
      isRead: false,
      sender: '2475b3c8-723a-417e-9523-330191fa444c',
      type: '0',
      imageUrl: '',
      audioUrl: '',
      time: '2022-12-25T03:23:01.854Z',
    },
    avatarUrl:
      'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
  },
  {
    id: 'a5c3e1b9-804e-4301-82f2-0086c2c7c59a',
    username: 'Hemerdiger',
    status: '0',
    lastMessage: {
      message: "What's man!",
      sender: 'a5c3e1b9-804e-4301-82f2-0086c2c7c59a',
      isRead: false,
      status: '0',
      type: '0',
      imageUrl: '',
      audioUrl: '',
      time: '2022-12-26T06:22:01.854Z',
    },
    avatarUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  },
];
const HomeContainer = () => {
  const dispath = useDispatch();
  const userInfo = useSelector(getUserSelector);
  const chatList = useSelector(getUserListSelector);

  const newChatroom = (partnerId, roomId, item) => {
    const roomChat = {
      roomId,
      chatroomData: {
        data: null,
        member: [userInfo?.uid, partnerId],
        lastMessage: null,
      },
    };

    if (!!userInfo?.uid && !!partnerId) {
      dispath(
        postNewChatroomHandle(
          roomChat,
          () =>
            NavigationServices.navigate(SCREEN_NAME.CHAT_ROOM_SCREEN, {
              roomId,
              partnerId,
              // partnerData: item,
            }),
          () => {},
        ),
      );
    }
  };

  return (
    <HomeView
      userInfo={userInfo}
      onlineUser={chatList?.filter(item => item?.uid != userInfo?.uid)}
      chatList={CHAT_LiST}
      newChatroom={newChatroom}
    />
  );
};
export default HomeContainer;
