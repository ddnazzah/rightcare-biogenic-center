/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-04-15 17:07:48
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-11-18 12:30:50
 */

import 'styled-components';

export interface ISettings {
	theme: 'light' | 'dark';
}

export interface Theme {
	BACKGROUND: string;
	SURFACE: string;
	PRIMARY: string;
	SECONDARY: string;
	ON_BACKGROUND: string;
	ON_SURFACE: string;
	ON_PRIMARY: string;
	ON_SECONDARY: string;
}

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
