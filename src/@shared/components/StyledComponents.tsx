/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-11-19 02:20:58
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-11-26 02:55:56
 */

import bg from '@shared/assets/images/oriental.png';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle(({ theme }) => ({
	'*': {
		margin: 0,
		padding: 0,
	},
	html: {
		scrollBehavior: 'smooth',
		overflowX: 'hidden',
	},
	a: {
		color: theme.ON_BACKGROUND,
		textDecoration: 'none',
	},
	'h1, h2, h3, h3, h4, h5, h6': {
		fontWeight: 'normal',
		fontSize: '1em',
		fontFamily: 'Montserrat',
		lineHeight: '1.4em',
	},
	body: {
		fontFamily: 'Poppins',
		backgroundImage: `url(${bg})`,
		overflowX: 'hidden',
		color: theme.ON_BACKGROUND,
		fontWeight: '200',
		lineHeight: '1.7em',
	},
	ul: {
		listStyle: 'none',
	},
	p: {
		lineHeight: '1.7em',
		fontSize: '0.95em',
	},
}));
