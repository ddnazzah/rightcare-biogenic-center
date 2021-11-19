/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-03-20 03:44:46
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-11-18 12:46:55
 */

import { configureStore } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import allReducers from './combineReducers';

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
	devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export default store;

// Infer the `RootState` and `AppDispatch`s types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
