/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-11-18 11:51:38
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-11-19 02:24:47
 */

import { GlobalStyle } from '@shared/components';
import { persistor, store } from '@shared/redux';
import { Home } from 'Home';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { InitializationWrapper } from './components';

interface Props {}

const App = (props: Props) => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<InitializationWrapper>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Home />}>
								<Route index element={<Home />} />
							</Route>
						</Routes>
					</BrowserRouter>
					<GlobalStyle />
				</InitializationWrapper>
			</PersistGate>
		</Provider>
	);
};

export default App;
