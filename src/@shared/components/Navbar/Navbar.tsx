/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-11-19 00:53:38
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-11-21 02:17:39
 */

import logo from '@shared/assets/images/logo.png';
import React, { useEffect, useState } from 'react';
import {
	Hamburger,
	LogoImage,
	LogoWrapper,
	Nav,
	NavbarClose,
	NavbarContainer,
	NavbarWrapper,
	NavItem,
	NavItemLink,
	NavList,
} from './components/styledComponents';

interface Props {}

const Navbar = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const [isSticky, setIsSticky] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleSticky);
		return () => {
			window.removeEventListener('scroll', handleSticky);
		};
	});

	const handleSticky = () => {
		const scrollTop = window.scrollY;

		if (scrollTop >= 150) {
			setIsSticky(true);
			document.body.style.paddingTop = '70.4px';
		} else {
			setIsSticky(false);
			document.body.style.paddingTop = '0px';
		}
	};

	return (
		<NavbarWrapper isSticky={isSticky}>
			<NavbarContainer>
				<LogoWrapper href="#">
					<LogoImage src={logo} />
					Rightcare Biogenic Center
				</LogoWrapper>

				<Hamburger id="hamburger-icon" onClick={handleClick} />

				<Nav isOpen={isOpen}>
					<NavbarClose id="navbar-close" onClick={handleClick} />
					<NavList
						items={[
							'homeSection',
							'aboutSection',
							'productSection',
							'contactSection',
						]}
						currentClassName="active"
					>
						<NavItem>
							<NavItemLink href="#homeSection">Home</NavItemLink>
						</NavItem>
						<NavItem>
							<NavItemLink href="#aboutSection">
								About Us
							</NavItemLink>
						</NavItem>
						<NavItem>
							<NavItemLink href="#productSection">
								Products
							</NavItemLink>
						</NavItem>
						<NavItem>
							<NavItemLink href="#contactSection">
								Contact
							</NavItemLink>
						</NavItem>
					</NavList>
				</Nav>
			</NavbarContainer>
		</NavbarWrapper>
	);
};

export default Navbar;
