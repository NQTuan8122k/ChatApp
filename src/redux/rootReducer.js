import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import loadingReducer from './loading/loading.reducer';
// import nightModeReducer from './nightMode/nightMode.reducer';
import countryReducer from './country/country.reducers';
import signupReducer from './signup/signup.reducers';
import userReducer from './user/user.reducers';
import authReducer from './auth/auth.reducers';
import chatReducer from './chat/chat.reducers';

const nightModePersistConfig = {
  key: 'nightMode',
  storage: AsyncStorage,
};

// const userPersistConfig = {
//   key: 'user',
//   storage: AsyncStorage,
// };

const rootReducer = combineReducers({
  loading: loadingReducer,
  // nightModeReducer: persistReducer(nightModePersistConfig, nightModeReducer),
  // userReducer: persistReducer(userPersistConfig, userReducer),
  // loyaltyReducer,
  userReducer,
  countryReducer,
  signupReducer,
  authReducer,
  chatReducer,
});

export default rootReducer;
