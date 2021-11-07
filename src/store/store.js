import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';

import albumReducer from './album';
import responseReducer from './response';
import uiReducer from './ui';

const persistConfig = {
  key: 'root',
  storage: storage,
  version: 1,
  stateReconciler: autoMergeLevel1,
};

const persistedReducer = persistReducer(persistConfig, albumReducer);

export const store = configureStore({
  reducer: {
    album: persistedReducer,
    response: responseReducer,
    ui: uiReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      /* ignore persistance actions */
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER
      ],
    },
  }),
});

export const persistor = persistStore(store)

export default store;
