import { Constants } from '../constants';

/**
 * An unknown error is one that should ideally never happen.
 * E.g. will be there when there is a 500/400/etc.
 * Returned from the server, or when a database operation fails
 */
const processUnknownError = (
    error: any,
    extraInfo?: string,
    response?: any,
): string => {
    switch (response?.status) {
        default:
            return (
                error?.response?.data?.message ??
                Constants.flashMessages.GENERIC_ERROR_MSG
            );
    }
};

/**
 * Get the error response.
 *
 * In most cases, errors that occur when communicating with the API are handled in the same way,
 * this utility function can be used for that.
 * @param {Object} error
 */
export const processErrorResponse = (
    error: any,
    errorDescription?: string,
): string => {
    return error?.message && error?.message?.indexOf('Network Error') !== -1
        ? Constants.flashMessages.NO_INTERNET
        : processUnknownError(error, errorDescription, error?.response || null);
};
