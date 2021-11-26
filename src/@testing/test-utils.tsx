import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { TestReduxProvider, TestThemeProvider } from './Provider';

const TestProvider: React.FC = ({ children }) => {
	return (
		<TestReduxProvider>
			<TestThemeProvider>{children}</TestThemeProvider>
		</TestReduxProvider>
	);
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: TestProvider, ...options });

export * from '@testing-library/react';
export { customRender as render };
