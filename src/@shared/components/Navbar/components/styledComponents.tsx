/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-11-19 02:14:04
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-11-26 02:27:21
 */

import bg from '@shared/assets/images/oriental.png';
import { device } from '@shared/utils';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt3 } from 'react-icons/hi';
import Scrollspy from 'react-scrollspy';
import styled from 'styled-components';

// const smoothScroll = keyframes`
//  0% { height: 100px; width: 100px; }
//  30% { height: 400px; width: 400px; opacity: 1 }
//  40% { height: 405px; width: 405px; opacity: 0.3; }
//  100% { height: 100px; width: 100px; opacity: 0.6; }
// `;

// const smoothScrollAnimation = css`
// 	${smoothScroll} 1s forwards;
// `;

export const NavbarWrapper = styled.div<{ isSticky: boolean }>(
	({ isSticky }) => ({
		background: isSticky ? `url(${bg})` : 'transparent',
		padding: '1.2em 7%',
		position: isSticky ? 'fixed' : 'unset',
		top: isSticky ? '0' : 'unset',
		left: isSticky ? '0' : 'unset',
		right: isSticky ? '0' : 'unset',
		zIndex: isSticky ? '10' : 'unset',
		boxShadow: isSticky ? '0px 1px 5px 1px rgba(0,0,0,0.65)' : 'unset',
		transition: 'all 0.5s ease',
		// animation: `${smoothScrollAnimation}`,
	}),
);

export const NavbarContainer = styled.div({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	[device.mediumDevices]: {
		display: 'grid',
		gridTemplateColumns: '300px auto',
	},
});

export const LogoWrapper = styled.a({
	fontWeight: 'bold',
	display: 'flex',
	alignItems: 'center',
});

export const LogoImage = styled.img({
	height: '2em',
	width: 'auto',
	marginRight: '0.5em',
});

export const Hamburger = styled(HiMenuAlt3)(({ theme }) => ({
	fontSize: '1.5em',
	cursor: 'pointer',
	color: theme.ON_BACKGROUND,
	[device.mediumDevices]: {
		display: 'none',
	},
}));

export const Nav = styled.nav<{ isOpen?: boolean }>(({ isOpen }) => ({
	display: isOpen ? 'block' : 'none',
	position: 'fixed',
	zIndex: 999,
	width: '45%',
	top: 0,
	right: 0,
	backgroundColor: '#20272e',
	height: '100vh',
	padding: '1em',
	[device.mediumDevices]: {
		position: 'unset',
		display: 'flex',
		height: 'auto',
		width: '100%',
		padding: '0',
		background: 'none',
	},
}));

export const NavbarClose = styled(AiOutlineClose)(({ theme }) => ({
	// display: 'block',
	fontSize: '2em',
	color: theme.ON_BACKGROUND,
	float: 'right',
	pointer: 'cursor',
	[device.mediumDevices]: {
		display: 'none',
	},
}));

export const NavList = styled(Scrollspy)({
	marginTop: '5em',
	[device.mediumDevices]: {
		display: 'flex',
		marginTop: '0',
	},
});

export const NavItem = styled.li({
	'&.active': {
		fontWeight: 'bold',
	},
});

export const NavItemLink = styled.a(({ theme }) => ({
	display: 'block',
	padding: '.5em',
	fontSize: '1.3em',
	textAlign: 'right',
	transition: 'all 0.3s ease-in-out',
	':hover': {
		fontWeight: 'bold',
	},
	[device.mediumDevices]: {
		fontSize: '0.9em',
		color: `${theme.PRIMARY}`,
		padding: '0.1em 1em',
	},
}));
