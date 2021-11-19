/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-02-23 17:24:28
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-11-18 12:42:13
 */

import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import settingsReducer from './reducerSlice/settingsSlice';

const allReducers = combineReducers({
	settings: settingsReducer,
});

const rootReducer = (state: any, action: AnyAction) => {
	return allReducers(state, action);
};

export default rootReducer;
