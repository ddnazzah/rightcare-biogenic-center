/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-11-19 03:43:28
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-11-19 03:58:30
 */

import React from 'react';
import { ButtonWrapper } from './components/styledComponents';

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
	text?: string;
	image?: React.ReactElement;
	href?: string;
}

const Button = (props: Props) => {
	const { text, image, href, ...rest } = props;

	return (
		<ButtonWrapper href={href} {...rest}>
			{image}
			{text}
		</ButtonWrapper>
	);
};

export default Button;
