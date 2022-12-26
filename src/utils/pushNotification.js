import messaging from '@react-native-firebase/messaging';
import {KEY_STORE} from '../constants/keyStores';
import {getData, storeData} from '../utils/storeAsync';
import notifee, {
  AndroidImportance,
  AndroidStyle,
  EventType,
} from '@notifee/react-native';
import {COLORS} from '../constants/colors';
import {OpenLinkingUrl} from '../utils/linkingConfig';
import {Alert} from 'react-native'

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    GetFCMToken();
  }
}

const GetFCMToken = async () => {
  let fcmToken = await getData(KEY_STORE.FCM_TOKEN);
  console.log('fcm token', 'old FCM token', fcmToken);

  if (!fcmToken) {
    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log(fcmToken, 'new FCM token');
        await storeData(KEY_STORE.FCM_TOKEN, fcmToken);
      }
    } catch (err) {
      console.log(err, 'error FCM Token');
    }
  }
};

const NotificationListener = () => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        const dl = remoteMessage?.data?.dl;
        const message = remoteMessage?.data?.message || ' ';
        !!dl && OpenLinkingUrl(`${dl}/${message}`);
      }
    });

  messaging().onMessage(async remoteMessage => {
    console.log('Notification on fro ground state....', remoteMessage);
    let {title, body} = remoteMessage.notification;
    let {data} = remoteMessage;
    console.log('*********DATA********', data);
   // Alert.alert('NOTIFI',title,body)
    
    if (data?.type == 1) {
      onDisplayNotification(title, body, data);
    } else {
      onDisplayMessage(title, body, data);
    }
  });
};

const onDisplayNotification = async (title, body, data) => {
  const channelId = await notifee.createChannel({
    id: 'GST_Ecommerce_Channel',
    name: 'GST_Ecommerce_Channel',
    badge: true,
    importance: AndroidImportance.HIGH,
  });
  await notifee.requestPermission()
  // Display a notification
  await notifee.displayNotification({
    id: `${Date.now().toString()}`,
    title: title,
    body: body,
    data: data,
    android: {
      color: COLORS.primary,
      channelId,
      smallIcon: 'ic_launcher_round', // optional, defaults to 'ic_launcher'.
      importance: AndroidImportance.HIGH,
    },
    // ios: {
    //   foregroundPresentationOptions: {
    //     badge: true,
    //     sound: true,
    //     banner: true,
    //     list: true,
    //   },
    // }
  });
};

const onDisplayMessage = async (title, body, data) => {
  const channelId = await notifee.createChannel({
    id: 'GST_Ecommerce_Channel_Message',
    name: 'GST_Ecommerce_Channel_Message',
    badge: true,
    importance: AndroidImportance.HIGH,
  });

  await notifee.requestPermission()

  // Display a notification
  await notifee.displayNotification({
    id: `${Date.now().toString()}`,
    title: title,
    body: body,
    data: data,
    android: {
      channelId,
      importance: AndroidImportance.HIGH,
      style: {
        type: AndroidStyle.MESSAGING,
        person: {
          name: title,
          icon: 'https://image.winudf.com/v2/image1/Y29tLlJvc2VCbGFja3BpbmtXYWxscGFwZXIuYWRuYXBwc19zY3JlZW5fMF8xNTk1ODQ5NDE0XzA3OA/screen-0.jpg?fakeurl=1&type=.webp',
        },
        messages: [
          {
            text: body.toString(),
            timestamp: parseInt(Date.now()),
          },
        ],
      },
    },
    
  });
};

const notifeeListener = () => {
  return notifee.onForegroundEvent(({type, detail}) => {
    switch (type) {
      case EventType.DISMISSED:
        console.log(
          '-----------User dismissed notification-------------',
          detail,
        );
        break;
      case EventType.PRESS:
        console.log(
          '-------------User pressed notification-------------',
          detail,
        );
        const dl = detail?.notification?.data?.dl;
        const message = detail?.notification?.data?.message || ' ';
        //   !!dl && OpenLinkingUrl(`${dl}/${message}`);
        break;
    }
  });
};

export {
  requestUserPermission,
  NotificationListener,
  GetFCMToken,
  onDisplayNotification,
  notifeeListener,
};
