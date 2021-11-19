/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-03-20 03:05:47
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-11-18 12:44:12
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISettings } from '../../types';
import initialStoreState from '../initialStoreState';

export const settingsSlice = createSlice({
	name: 'settings',
	initialState: initialStoreState.SETTINGS as ISettings,
	reducers: {
		setTheme: (state, action: PayloadAction<ISettings['theme']>) => {
			state.theme = action.payload;
		},
		reset: () => {
			return initialStoreState.SETTINGS;
		},
	},
});

export const settingsActions = settingsSlice.actions;

export default settingsSlice.reducer;
