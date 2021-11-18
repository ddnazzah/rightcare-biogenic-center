import { paymentActions } from '../redux/reducerSlice/paymentSlice';
import { IPaymentMethod, IReceivePaymentMethod } from '../types';
import { useAppDispatch, useAppSelector } from './useTypedRedux';

export const usePayment = () => {
    const dispatch = useAppDispatch();

    const { receive_payment, make_payment } = useAppSelector(
        state => state.paymentMethod,
    );

    const addMakePaymentMethod = (payload: Partial<IPaymentMethod>) => {
        dispatch(paymentActions.addMakePaymentMethod(payload));
    };

    const addReceivePaymentMethod = (payload: IReceivePaymentMethod[]) => {
        dispatch(paymentActions.addReceivePaymentMethod(payload));
    };

    const removePaymentMethod = (id: string, type: 'make' | 'receive') => {
        dispatch(
            type === 'make'
                ? paymentActions.removeMakePaymentMethod(id)
                : paymentActions.removeReceivePaymentMethod(id),
        );
    };

    return {
        addMakePaymentMethod,
        addReceivePaymentMethod,
        receive_payment,
        make_payment,
        removePaymentMethod,
    };
};
