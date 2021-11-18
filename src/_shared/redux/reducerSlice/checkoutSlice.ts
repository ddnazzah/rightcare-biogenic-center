/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-03-20 03:05:47
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-10-09 03:20:36
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICheckout, IOffer, IPaymentMethod, ITask } from '../../types';
import initialStoreState from '../initialStoreState';

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: initialStoreState.CHECKOUT as ICheckout,
    reducers: {
        addPayment: (state, action: PayloadAction<IPaymentMethod>) => {
            return { ...state, payment: action.payload };
        },
        addTask: (state, action: PayloadAction<ITask>) => {
            return { ...state, task: action.payload };
        },
        addOffer: (state, action: PayloadAction<IOffer>) => {
            return { ...state, offer: action.payload };
        },

        cleanCheckout: state => {
            return { ...state, task: undefined, offer: undefined };
        },

        reset: () => {
            return initialStoreState.CHECKOUT;
        },
    },
});

export const checkoutActions = checkoutSlice.actions;

export default checkoutSlice.reducer;
