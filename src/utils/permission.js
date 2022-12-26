import {
  PERMISSIONS,
  check,
  requestMultiple,
  checkMultiple,
  RESULTS,
} from 'react-native-permissions';
import {Platform} from 'react-native';

export default async function requestPermission(resultFunc) {
  try {
    if (Platform.OS == 'android') {
      const granted = await checkMultiple([
        PERMISSIONS.ANDROID.CAMERA,
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      ]);
      if (granted === RESULTS.GRANTED) {
        resultFunc?.(true);
      } else if (granted === RESULTS.DENIED) {
        const granted2 = await requestMultiple([
          PERMISSIONS.ANDROID.CAMERA,
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        ]);
        granted2 === RESULTS.GRANTED ? resultFunc?.(true) : resultFunc?.(false);
      }
    } else {
      const granted = await checkMultiple([
        PERMISSIONS.IOS.CAMERA,
        PERMISSIONS.IOS.MEDIA_LIBRARY,
        PERMISSIONS.IOS.MICROPHONE,
        PERMISSIONS.IOS.PHOTO_LIBRARY,
      ]);
      if (granted === RESULTS.GRANTED) {
        resultFunc?.(true);
      } else if (granted === RESULTS.DENIED) {
        const granted2 = await requestMultiple([
          PERMISSIONS.IOS.CAMERA,
          PERMISSIONS.IOS.MEDIA_LIBRARY,
          PERMISSIONS.IOS.MICROPHONE,
          PERMISSIONS.IOS.PHOTO_LIBRARY,
        ]);
        granted2 === RESULTS.GRANTED ? resultFunc?.(true) : resultFunc?.(false);
      }
    }
  } catch (err) {
    console.warn(err);
  }
}
