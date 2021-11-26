import { useSettings } from '@shared/hooks';
import React from 'react';
import { ThemeProvider } from 'styled-components';

interface Props {
	children: React.ReactNode;
}

const InitializationWrapper = ({ children }: Props) => {
	const { theme } = useSettings();

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default InitializationWrapper;
