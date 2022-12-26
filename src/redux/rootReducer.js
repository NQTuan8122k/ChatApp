import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import loadingReducer from './loading/loading.reducer';
// import nightModeReducer from './nightMode/nightMode.reducer';
import countryReducer from './country/country.reducers';

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
  countryReducer,
});

export default rootReducer;
