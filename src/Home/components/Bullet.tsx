/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-11-19 21:28:14
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-11-25 00:31:12
 */

import { device } from '@shared/utils';
import React from 'react';
import { BsBrightnessHigh } from 'react-icons/bs';
import { IoRocketSharp } from 'react-icons/io5';
import styled from 'styled-components';

interface Props {
	check?: boolean;
}

const Bullet = (props: Props) => {
	const { check } = props;

	return (
		<Wrapper check={check}>
			{check ? <BsCheckIcon /> : <BsBrightnessHighIcon />}
		</Wrapper>
	);
};

export default Bullet;

const Wrapper = styled.div<{ check?: boolean }>(({ theme, check }) => ({
	backgroundColor: check ? 'transparent' : theme.PRIMARY,
	display: 'inline-flex',
	padding: '0.15em',
	width: check ? '1em' : '3.7em',
	height: check ? '1em' : '3.7em',
	borderRadius: '100%',
	alignItems: 'center',
	justifyContent: 'center',
	marginRight: '0.5em',
	flexShrink: 0,
	[device.mediumDevices]: {
		width: check ? '1em' : '2.7em',
		height: check ? '1em' : '2.7em',
	},
}));

const BsCheckIcon = styled(IoRocketSharp)(({ theme }) => ({
	color: `${theme.PRIMARY}`,
}));

const BsBrightnessHighIcon = styled(BsBrightnessHigh)(({ theme }) => ({
	color: `${theme.ON_PRIMARY}`,
	fontSize: '2em',
}));
