import {Linking} from 'react-native';
export const OpenLinkingUrl = (url = '') => {
  const deepLinkURL = url;
  console.log('url: ', url);
  if (deepLinkURL) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url)
          .then(res => console.log('Open Link Success', res))
          .catch(err => console.log('Open Link Error', err));
      }
    });
  }
};
