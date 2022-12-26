import {SendNotification} from '../components/NotificationModal';

const SendMessageOnlyRead = (message, type) => {
  SendNotification({
    isShow: true,
    options: {
      message: message,
      type: type,
      isAccept: true,
      onAccept: () => {},
      titleAccept: 'Ok',
      isCancel: false,
    },
  });
};

export {SendMessageOnlyRead};
