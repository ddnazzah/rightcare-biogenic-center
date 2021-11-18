/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-03-20 03:44:46
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-10-05 00:45:22
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import allReducers from './combineReducers';

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    blacklist: ['alert'],
};

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export default store;

// Infer the `RootState` and `AppDispatch`s types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
