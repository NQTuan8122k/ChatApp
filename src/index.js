import React from 'react';
import {LogBox, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import Loading from './components/Loading';
import AppContainer from './navigator';
import {persistor, store} from './redux/configureStore';
import DetailContainer from './screens/detail/detail.container';
import HomeView from './screens/home/home.view';
import LoginContainer from './screens/login/login.container';
import NewFeedContainer from './screens/newFeed/newFeed.container';
import PlaceContainer from './screens/place/place.container';
import ProfileContainer from './screens/profile/profile.container';

const App = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 3000);
  // }, []);
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="dark-content"
        // translucent
        backgroundColor="transparent"
      />
      {/* <PersistGate loading={<Loading />} persistor={persistor}> */}
      <SafeAreaProvider>
        {/* <DetailContainer /> */}
        {/* <AppContainer /> */}
        <LoginContainer />
      </SafeAreaProvider>
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
