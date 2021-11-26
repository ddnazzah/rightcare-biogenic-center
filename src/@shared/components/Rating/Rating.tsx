import React from 'react';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';
import styled from 'styled-components';

interface Props {
	rating: number;
	size?: number;
}

const Rating: React.FC<Props> = ({
	rating,

	size,
}) => {
	let fullStars = Math.floor(rating);

	let halfStars = rating % fullStars > 0.4 ? 1 : 0;

	let emptyStars = 5 - (fullStars + halfStars);

	return (
		<StarRating>
			{Array(fullStars)
				.fill('')
				.map((_, index) => (
					<FullStar name="star" size={size} />
				))}
			{Array(halfStars)
				.fill('')
				.map((_, index) => (
					<HalfStar
						name="star-half"
						size={size}
						key={index.toString()}
					/>
				))}
			{Array(emptyStars)
				.fill('')
				.map((_, index) => (
					<EmptyStar name="star-outline" size={size} />
				))}
		</StarRating>
	);
};

export default Rating;

export const StarRating = styled.div({});

export const FullStar = styled(IoIosStar)(({ theme }) => ({
	color: theme.PRIMARY,
	fontSize: '1em',
}));

export const HalfStar = styled(IoIosStarHalf)(({ theme }) => ({
	color: theme.PRIMARY,
	fontSize: '1em',
}));

export const EmptyStar = styled(IoIosStarOutline)(({ theme }) => ({
	color: theme.PRIMARY,
	fontSize: '1em',
}));
