import { checkoutActions } from '../redux/reducerSlice/checkoutSlice';
import { IOffer, IPaymentMethod, ITask } from '../types';
import { useAppDispatch, useAppSelector } from './useTypedRedux';

export const useCheckout = () => {
    const dispatch = useAppDispatch();

    const { payment, offer, task } = useAppSelector(state => state.checkout);

    const setCheckoutPayment = (payload: IPaymentMethod) => {
        dispatch(checkoutActions.addPayment(payload));
    };

    const setCheckoutOffer = (payload: IOffer) => {
        dispatch(checkoutActions.addOffer(payload));
    };

    const setCheckoutTask = (payload: ITask) => {
        dispatch(checkoutActions.addTask(payload));
    };

    const cleanCheckout = () => {
        dispatch(checkoutActions.cleanCheckout());
    };

    const resetCheckout = () => {
        dispatch(checkoutActions.reset());
    };

    return {
        payment,
        offer,
        task,
        setCheckoutPayment,
        setCheckoutOffer,
        setCheckoutTask,
        resetCheckout,
        checkoutActions,
        cleanCheckout,
    };
};
