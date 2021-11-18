/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-03-19 05:26:30
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-03-28 01:53:31
 */

import * as Yup from 'yup';

export const PhoneNumberSchema = Yup.object().shape({
    phoneNumber: Yup.string()
        .min(9, 'Invalid phone Number')
        .max(9, 'Invalid phone Number')
        .required('Required'),
});

export const PinSchema = Yup.object().shape({
    pin: Yup.string()
        .min(4, 'Invalid pin')
        .max(4, 'Invalid pin')
        .required('Required'),
});
