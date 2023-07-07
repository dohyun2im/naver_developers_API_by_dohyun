import { combineReducers, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { naverSlice } from '../slice/naver';
import logger from 'redux-logger';

const reducer = (state: any, action: PayloadAction<any>) => {
  return combineReducers({
    [naverSlice.name]: naverSlice.reducer,
  })(state, action);
};

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();

const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
        .concat(logger)
        .concat(sagaMiddleware),
  });

export const store = makeStore();
export const persistor = persistStore(store);
