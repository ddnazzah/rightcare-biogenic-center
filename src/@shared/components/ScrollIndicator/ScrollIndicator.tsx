/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-11-25 07:48:42
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-11-25 07:59:42
 */

import React, { useState } from 'react';
import styled from 'styled-components';
// import { Container, Heading, ProgressBar, ScrollContent } from "./Styles";
const ScrollIndicator = () => {
	const [scroll, setScroll] = useState(0);

	const onScroll = () => {
		const Scrolled = document.documentElement.scrollTop;
		const MaxHeight =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		const ScrollPercent = (Scrolled / MaxHeight) * 100;
		setScroll(ScrollPercent);
	};

	window.addEventListener('scroll', onScroll);

	return (
		<Container>
			<ProgressBar style={{ width: `${scroll}%` }}></ProgressBar>
		</Container>
	);
};

export default ScrollIndicator;

export const Container = styled.div({
	backgroundColor: 'transparent',
	height: '0.1em',
	position: 'sticky',
	top: 0,
	left: 0,
	zIndex: 1000,
	width: '100%',
});

export const ProgressBar = styled.div(({ theme }) => ({
	height: '0.1em',
	backgroundColor: theme.PRIMARY,
}));
