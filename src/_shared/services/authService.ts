/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-06-24 01:04:35
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-10-08 19:37:58
 */

import axios from 'axios';
import { Constants } from '../constants';

// create apiToken as singleton
let apiToken = '';

export async function saveApiTokenInMemory(token: string) {
    apiToken = token;
}

export function getAuthToken() {
    return apiToken;
}

export const isLoggedIn = () => {
    return !!apiToken;
};

/**
 * Returns an instance of axios that already contains the API token needed by the server
 * and also contains the base url for the api
 */
export function getSecureAxiosInstance(formData?: boolean) {
    function instance(token: string) {
        const secureAxios = axios.create({
            baseURL: Constants.app.BASE_API_URL,
            headers: {
                'x-shabo-user-auth': token,
                'Content-Type': formData
                    ? 'multipart/form-data'
                    : 'application/json',
            },
        });

        // secureAxios.interceptors.request.use(request => {
        //     console.log('Response:', JSON.stringify(request, null, 2));
        //     return request;
        // });

        // handle expired tokens
        secureAxios.interceptors.request.use(
            response => {
                // console.log('Response:', JSON.stringify(response, null, 2));
                return response;
            },
            async function (error) {
                // const originalRequest = error.config;

                console.log(error, error?.response, 'hghg');

                if (error?.response?.data?.message === 'Token Has Expired') {
                }
                return Promise.reject(error);
            },
        );

        return secureAxios;
    }

    if (!apiToken) {
        throw new Error(
            `Attempting to securely connect to api when there is no token!
			To prevent this error from showing up,
			call the function saveApiTokenInMemory() after the user logs in`,
        );
    }

    console.log(apiToken);

    return instance(apiToken);
}

export function getPaymentAxiosInstance() {
    function instance(token: string) {
        const secureAxios = axios.create({
            baseURL: Constants.app.PAYMENT_BASE_URL,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        return secureAxios;
    }

    return instance(Constants.app.MERCHANT_SECRET_KEY);
}
