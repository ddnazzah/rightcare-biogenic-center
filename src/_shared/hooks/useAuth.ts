import { isFileEmpty } from '_shared/utils';
import { authActions } from '../redux/reducerSlice/authSlice';
import { IAuth } from '../types';
import { useAppDispatch, useAppSelector } from './useTypedRedux';

export const useAuth = () => {
    const dispatch = useAppDispatch();

    const { user } = useAppSelector(state => state.auth);

    const setAuthState = (payload: Partial<IAuth>) => {
        dispatch(authActions.setAuthState(payload));
    };

    const resetAuth = () => {
        dispatch(authActions.reset());
    };

    const userAccess = {
        canPostTask: !isFileEmpty(user?.user_id),
        canMakeOffer: !isFileEmpty(user?.user_id),
    };

    return {
        user,
        resetAuth,
        setAuthState,
        userAccess,
    };
};
