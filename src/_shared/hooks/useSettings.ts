import { Constants } from '../constants';
import { settingsActions } from '../redux/reducerSlice/settingsSlice';
import { ISettings, Theme } from '../types';
import { useAppDispatch, useAppSelector } from './useTypedRedux';

export const useSettings = () => {
    const dispatch = useAppDispatch();
    const { theme: _theme } = useAppSelector(state => state.settings);

    const setTheme = (payload: ISettings['theme']) => {
        dispatch(settingsActions.setTheme(payload));
    };

    const theme: Theme =
        _theme === 'light' ? Constants.ui.theme.light : Constants.ui.theme.dark;

    return { _theme, setTheme, theme };
};
