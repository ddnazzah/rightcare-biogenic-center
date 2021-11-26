/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-11-19 04:07:12
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-11-26 05:54:41
 */

import { Rating } from '@shared/components/Rating';
import React from 'react';
import styled from 'styled-components';

interface Props {
	image?: string;
	name?: string;
}

const TopSelling = (props: Props) => {
	const { image, name } = props;

	// const { theme } = useSettings();

	return (
		<TopSellingWrapper>
			<TopSellingTag>Top Selling</TopSellingTag>
			<TopSellingImage src={image} />
			<TopSellingCaption>
				<TopSellingName>{name}</TopSellingName>
				<Rating rating={4.5} />
			</TopSellingCaption>
		</TopSellingWrapper>
	);
};

export default TopSelling;

const TopSellingWrapper = styled.div({
	background: 'rgba( 0, 0, 0, 0.05)',
	backdropFilter: 'blur( 1px )',
	boxShadow: 'rgba(0, 0, 0, 0.3) 2px 8px 8px',
	borderRadius: '0.5em',
	display: 'inline-flex',
	flexShrink: 0,
	flexDirection: 'column',
	alignItems: 'center',
	padding: '1em 0em',
	margin: '1em',
	width: '90%',
});

const TopSellingImage = styled.img({
	height: '12em',
	width: 'auto',
});

const TopSellingCaption = styled.div({
	borderBottomLeftRadius: '0.5em',
	borderBottomRightRadius: '0.5em',
	textAlign: 'center',
	marginTop: '1em',
});

const TopSellingName = styled.h2({
	fontSize: '0.8em',
	textTransform: 'uppercase',
	textShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
});

const TopSellingTag = styled.h3(({ theme }) => ({
	fontSize: '0.8em',
	marginBottom: '0.5em',
	textTransform: 'uppercase',
	fontWeight: '700',
	color: theme.PRIMARY,
	textShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
}));
