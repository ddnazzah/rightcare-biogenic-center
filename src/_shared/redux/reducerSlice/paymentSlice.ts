/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-03-20 03:05:47
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-09-17 04:20:22
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPaymentMethod, IReceivePaymentMethod } from '../../types';
import initialStoreState from '../initialStoreState';

export const paymentSlice = createSlice({
    name: 'payment_method',
    initialState: initialStoreState.PAYMENT_METHOD,
    reducers: {
        addMakePaymentMethod: (
            state,
            action: PayloadAction<Partial<IPaymentMethod>>,
        ) => {
            return {
                ...state,
                make_payment: [...state.make_payment, action.payload],
            };
        },
        addReceivePaymentMethod: (
            state,
            action: PayloadAction<IReceivePaymentMethod[]>,
        ) => {
            return {
                ...state,
                receive_payment: action.payload,
            };
        },
        removeMakePaymentMethod: (
            state,
            action: PayloadAction<Partial<IPaymentMethod['id']>>,
        ) => {
            return {
                ...state,
                make_payment: state.make_payment?.filter(
                    method => method.id !== action.payload,
                ),
            };
        },
        removeReceivePaymentMethod: (
            state,
            action: PayloadAction<Partial<IPaymentMethod['id']>>,
        ) => {
            return {
                ...state,
                receive_payment: state.receive_payment?.filter(
                    method => method.account_number !== action.payload,
                ),
            };
        },
    },
});

export const paymentActions = paymentSlice.actions;

export default paymentSlice.reducer;
