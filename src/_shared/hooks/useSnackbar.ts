import Snackbar from 'react-native-snackbar';
import { ISnackbar } from '_shared/types';
import { useSettings } from '.';

export const useSnackbar = () => {
    const { theme } = useSettings();

    const showSnackbar = (payload: ISnackbar) => {
        let { message, type, duration, actionText, onActionPress } = payload;

        Snackbar.show({
            text: message,
            textColor:
                type === 'error'
                    ? '#ffaaaa'
                    : type === 'warning'
                    ? theme.TERTIARY
                    : undefined,
            fontFamily: 'Quicksand-Medium',
            duration:
                duration === 'long'
                    ? 6000
                    : duration === 'indefinite'
                    ? Snackbar.LENGTH_INDEFINITE
                    : 4000,
            action: {
                text: actionText || 'OK',
                textColor:
                    type === 'error' || type === 'warning'
                        ? undefined
                        : theme.SECONDARY,
                onPress: onActionPress ?? Snackbar.dismiss,
            },
            numberOfLines: 3,
        });
    };

    const dismissSnackbar = Snackbar.dismiss;

    return { showSnackbar, dismissSnackbar };
};
