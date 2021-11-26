/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-11-19 02:14:04
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-11-19 23:47:26
 */

import styled from 'styled-components';

export const ButtonWrapper = styled.a(({ theme }) => ({
	backgroundColor: theme.PRIMARY,
	color: theme.ON_PRIMARY,
	fontWeight: 'normal',
	padding: '0.6em 1.3em',
	display: 'inline-block',
	borderRadius: '5em',
	fontSize: '1em',
	marginTop: '1.5em',
	boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
}));
