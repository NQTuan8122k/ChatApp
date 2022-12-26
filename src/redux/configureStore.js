import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import {persistStore} from 'redux-persist';
import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga';

let middlewares = [];
const sagaMiddleware = createSagaMiddleware();
// middlewares = [...middlewares, sagaMiddleware, logger];
middlewares = [...middlewares, sagaMiddleware];

const middleware = applyMiddleware(...middlewares);

export const store = createStore(rootReducer, middleware);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
