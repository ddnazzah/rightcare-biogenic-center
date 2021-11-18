/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-03-20 03:05:47
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-04-15 17:17:02
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITaskFilter } from '../../types';
import initialStoreState from '../initialStoreState';

export const filterSlice = createSlice({
    name: 'task_filter',
    initialState: initialStoreState.TASK_FILTER as ITaskFilter,
    reducers: {
        setFilterState: (
            state,
            action: PayloadAction<Partial<ITaskFilter>>,
        ) => {
            return { ...state, ...action.payload };
        },
        reset: state => {
            console.log(state);
            return initialStoreState.TASK_FILTER;
        },
    },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
