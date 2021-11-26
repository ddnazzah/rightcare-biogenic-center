import { useSettings } from '@shared/hooks';
import { store } from '@shared/redux';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

interface IProvider {
	children?: React.ReactNode;
}

interface ITestThemeProvider {
	children: React.ReactNode;
}

export const TestReduxProvider = ({ children }: IProvider) => {
	return <Provider store={store}>{children}</Provider>;
};

export const TestThemeProvider = ({ children }: ITestThemeProvider) => {
	const { theme } = useSettings();
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
