/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-11-18 11:51:38
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-11-18 11:52:35
 */

import logo from '@shared/assets/images/logo.svg';
import React from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
