/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-11-19 04:07:12
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-11-26 04:34:30
 */

import { Rating } from '@shared/components/Rating';
import React from 'react';
import styled from 'styled-components';
import { Bullet } from '.';

interface Props {
	image?: string;
	name?: string;
	descs?: string[];
}

const Product = (props: Props) => {
	const { image, name, descs } = props;
	console.log('hi');
	return (
		<ProductWrapper>
			<ProductImage src={image} />
			<ProductInfo>
				<Rating rating={4.5} />
				<ProductName>{name}</ProductName>
				<ProductDesc>
					{descs?.map((desc, index) => (
						<ProductDescItem key={index.toString()}>
							<Bullet check />
							{desc}
						</ProductDescItem>
					))}
				</ProductDesc>
			</ProductInfo>
		</ProductWrapper>
	);
};

export default Product;

const ProductWrapper = styled.div({
	marginTop: '5em',
	textAlign: 'center',
});

const ProductImage = styled.img({
	height: '15rem',
	width: 'auto',
});

const ProductInfo = styled.div({
	marginTop: '1em',
});

const ProductName = styled.h2(({ theme }) => ({
	fontSize: '1.2em',
	fontWeight: '700',
	margin: '0.5em 0em',
	textShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
	'&:before': {
		position: 'absolute',
		content: '""',
		height: '0.1em',
		width: '3rem',
		backgroundColor: theme.PRIMARY,
		marginTop: '1em',
		marginLeft: '-2.7em',
	},
	'&:after': {
		position: 'absolute',
		content: '""',
		height: '0.1em',
		width: '3rem',
		backgroundColor: theme.PRIMARY,
		marginTop: '1em',
		marginLeft: '0.2em',
	},
}));

const ProductDesc = styled.ul({
	textAlign: 'left',
	display: 'inline-flex',
	flexDirection: 'column',
	alignSelf: 'center',
});

const ProductDescItem = styled.li({
	display: 'flex',
	lineHeight: '1.5em',
	margin: '0.2em 0em',
});
