/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-02-23 17:24:28
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-09-12 06:18:16
 */

import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { Constants } from '../constants';
import { saveApiTokenInMemory } from '../services';
import { removeFromLocalStorage } from '../utils';
import authReducer from './reducerSlice/authSlice';
import checkoutReducer from './reducerSlice/checkoutSlice';
import filterReducer from './reducerSlice/filterSlice';
import paymentReducer from './reducerSlice/paymentSlice';
import settingsReducer from './reducerSlice/settingsSlice';

const allReducers = combineReducers({
    auth: authReducer,
    settings: settingsReducer,
    taskFilter: filterReducer,
    paymentMethod: paymentReducer,
    checkout: checkoutReducer,
});

const rootReducer = (state: any, action: AnyAction) => {
    // when a logout action is dispatched it will reset redux state
    if (action.type === Constants.actions.USER_LOGGED_OUT) {
        state = undefined;
        saveApiTokenInMemory('');
        removeFromLocalStorage(Constants.storageKeys.TOKEN);
    }

    return allReducers(state, action);
};

export default rootReducer;
