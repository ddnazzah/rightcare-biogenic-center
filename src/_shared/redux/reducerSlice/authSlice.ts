/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-03-20 03:05:47
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-04-15 17:17:02
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuth } from '../../types';
import initialStoreState from '../initialStoreState';

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialStoreState.AUTH_STATE as IAuth,
    reducers: {
        setAuthState: (state, action: PayloadAction<Partial<IAuth>>) => {
            return { ...state, ...action.payload };
        },
        reset: () => {
            return initialStoreState.AUTH_STATE;
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
