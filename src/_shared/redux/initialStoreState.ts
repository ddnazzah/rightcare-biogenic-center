/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-03-19 04:06:11
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-09-17 04:18:52
 *
 */

import { Constants } from '../constants';
import { IPaymentMethod, IReceivePaymentMethod, IService } from '../types';

export default {
    ALERT: {
        title: 'Oops...',
        message: '',
        type: 'success' as 'success' | 'error',
    },
    AUTH_STATE: {},
    SETTINGS: {
        theme: 'light' as 'light' | 'dark',
    },
    TASK_FILTER: {
        task_name: '',
        category_id: '',
        location: '',
        budget: [
            Constants.values.TASK_FILTER_BUDGET_MIN,
            Constants.values.TASK_FILTER_BUDGET_MAX,
        ],
        distance: Constants.values.TASK_FILTER_DISTANCE_MIN,
        service: '' as IService,
        longitude: 0,
        latitude: 0,
    },
    PAYMENT_METHOD: {
        make_payment: [] as IPaymentMethod[],
        receive_payment: [] as IReceivePaymentMethod[],
    },
    CHECKOUT: {},
};
