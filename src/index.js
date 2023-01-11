import React from 'react';
import {LogBox, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import AppContainer from './navigator';
import {store} from './redux/configureStore';

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
        translucent
        backgroundColor="transparent"
      />
      {/* <PersistGate loading={<Loading />} persistor={persistor}> */}
      <SafeAreaProvider>
        {/* <DetailContainer /> */}
        <AppContainer />
        {/* <SignupContainer /> */}
      </SafeAreaProvider>
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
